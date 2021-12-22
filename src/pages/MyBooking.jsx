import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment'
import { Row, Col, Table, Spin, Tag, Modal, notification } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import ProfileLayout from '../layout/ProfileLayout'
import { AuthContext } from '../contexts/AuthProvider'
import { BookingContext } from '../contexts/BookingProvider'
import * as apiBooking from '../core/services/booking'
import getCodeOfBooking from '../helpers/getCodeOfBooking'
import {
    convertBookingToTime,
    convertToDate,
    convertStringToDate,
} from '../helpers'
import toCommas from '../helpers/toCommas'
import DateTimePicker from '../components/DateTimePicker'

const contentStyle = {
    border: '1px solid #eee',
    borderRadius: '6px',
    padding: 20,
}

const handleStatus = (startTime, endTime, _status) => {
    const { status, description } = _status

    switch (status) {
        case 'ST1':
            // startTime: 12/21/2021 13:00
            // systems date: 12/21/2021 13:02
            // Thời gian bắt đầu đá lớn hơn tg hệ thống -> Không checkin (ST5)
            const _startTime = convertStringToDate(startTime)
            if (_startTime < Date.now()) {
                _status = {
                    status: 'ST5',
                    description: 'Không checkin',
                }
            }
            return _status

        case 'ST2':
            // Thời gian kết thúc bé hơn thời gian hệ thống -> Hoàn thành (ST4)
            const _endTime = convertStringToDate(endTime)
            if (_endTime < Date.now()) {
                _status = {
                    status: 'ST4',
                    description: 'Hoàn thành',
                }
            }

            return _status

        default:
            return _status
    }
}

function MyBooking() {
    const {
        authState: { user, isLoading },
    } = useContext(AuthContext)
    const {
        bookingState: { bookings, isLoading: isLoadingBooking },
        getHistoryBooking,
    } = useContext(BookingContext)
    const [visible, setVisible] = useState(false)
    const [cancelIndex, setCancelIndex] = useState('')
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [data, setData] = useState([])

    //console.log(`history booking: `, bookings)

    const dataSource = bookings
        .map(({ bookingDetails }, index) => {
            return bookingDetails.map(
                ({
                    pitch,
                    _id,
                    price,
                    status,
                    createdAt,
                    startTime,
                    endTime,
                }) => {
                    return {
                        key: _id,
                        stt: index + 1,
                        code: getCodeOfBooking(_id),
                        price: toCommas(price) + ' VND',
                        pitch: pitch.displayName,
                        bookingTime: convertBookingToTime(startTime, endTime),
                        status: handleStatus(startTime, endTime, status),
                        bookingDate: convertToDate(createdAt),
                        startTime,
                    }
                }
            )
        })
        .flat()

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            align: 'center',
            key: 'stt',
        },
        {
            title: 'Mã checkin',
            dataIndex: 'code',
            align: 'center',
            key: 'code',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            align: 'center',
            key: 'price',
        },
        {
            title: 'Sân',
            dataIndex: 'pitch',
            align: 'center',
            key: 'pitch',
        },
        {
            title: 'Thời gian đá',
            dataIndex: 'bookingTime',
            align: 'center',
            key: 'bookingTime',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            align: 'center',
            key: 'status',
            filters: [
                {
                    text: 'Đang chờ checkin',
                    value: 'ST1',
                },
                {
                    text: 'Đã checkin',
                    value: 'ST2',
                },
                {
                    text: 'Huỷ sân',
                    value: 'ST3',
                },
                {
                    text: 'Hoàn thành',
                    value: 'ST4',
                },
                {
                    text: 'Không checkin',
                    value: 'ST5',
                },
            ],
            onFilter: (value, record) => {
                //console.log(record, value)
                return record.status.status === value
            },
            render: (_status) => {
                const { status, description } = _status
                let color
                switch (status) {
                    case 'ST1':
                        color = 'geekblue'
                        break
                    case 'ST2':
                        color = 'magenta'
                        break
                    case 'ST3':
                        color = 'red'
                        break
                    case 'ST4':
                        color = 'green'
                        break
                    case 'ST5':
                        color = 'volcano'
                        break
                    default:
                        break
                }
                return <Tag color={color}>{description}</Tag>
            },
        },
        {
            title: 'Ngày đặt',
            dataIndex: 'bookingDate',
            align: 'center',
            key: 'bookingDate',
        },
        {
            title: '',
            dataIndex: 'stt',
            align: 'center',
            key: 'cancel',
            render: (stt, record) => {
                return (
                    <DeleteOutlined
                        title="Huỷ phiếu"
                        onClick={() => {
                            setVisible(true)
                            setCancelIndex(stt - 1)
                        }}
                    />
                )
            },
        },
    ]

    const pagination = {
        defaultCurrent: 1,
        defaultPageSize: 10,
        total: dataSource.length,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50'],
        showTotal: (total, range) =>
            `${range[0]}-${range[1]} trên ${total} phiếu`,
    }

    const handleOnChange = (date, dateString) => {
        // console.log(date, dateString)
        if (date) {
            const [fromDate, toDate] = date
            const _fromDate = new Date(
                fromDate.year(),
                fromDate.month(),
                fromDate.date()
            )
            const _toDate = new Date(
                toDate.year(),
                toDate.month(),
                toDate.date()
            )
            const rs = dataSource.filter((item) => {
                const _date = item.startTime.split(' ')[0]
                const dateAsMoment = moment(_date, 'DD/MM/YYYY')
                const currentDate = new Date(
                    dateAsMoment.year(),
                    dateAsMoment.month(),
                    dateAsMoment.date()
                )
                return _fromDate <= currentDate && currentDate <= _toDate
            })
            setData(rs)
        } else {
            setData(dataSource)
        }
    }

    const handleCancelBooking = async () => {
        const bookingDetail = dataSource[cancelIndex]
        console.log(`Phiếu cần huỷ là: `, bookingDetail)
        setConfirmLoading(true)
        const data = await apiBooking.cancelBooking(bookingDetail.key)
        console.log(data)
        if (data.success) {
            notification.info({
                description: 'Huỷ phiếu đặt sân thành công!',
                duration: 5,
            })
            getHistoryBooking(user._id)
        }
        setConfirmLoading(false)
        setVisible(false)
        setCancelIndex('')
    }

    useEffect(() => {
        getHistoryBooking(user._id)
    }, [])

    useEffect(() => {
        setData([...dataSource])
    }, [bookings])

    if (isLoading) return <Spin />

    return (
        <ProfileLayout>
            <Row style={contentStyle}>
                <Col span={24}>
                    <h2 style={{ textAlign: 'center' }}>Lịch sử đặt sân</h2>
                    <div style={{ margin: '20px 0' }}>
                        <h4 style={{ marginRight: 20 }}>Thời gian đá</h4>
                        <DateTimePicker
                            // rangeDate={date}
                            onChange={handleOnChange}
                        />
                    </div>
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={pagination}
                        loading={isLoadingBooking}
                        size="small"
                    />
                </Col>
            </Row>
            <Modal
                visible={visible}
                onOk={handleCancelBooking}
                confirmLoading={confirmLoading}
                onCancel={() => setVisible(false)}
            >
                Huỷ phiếu đặt sân
            </Modal>
        </ProfileLayout>
    )
}

export default MyBooking
