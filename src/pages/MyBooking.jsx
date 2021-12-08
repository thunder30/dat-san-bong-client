import React, { useContext, useEffect } from 'react'
import { Row, Col, Table, Spin } from 'antd'
import ProfileLayout from '../layout/ProfileLayout'
import { AuthContext } from '../contexts/AuthProvider'
import { BookingContext } from '../contexts/BookingProvider'
import getCodeOfBooking from '../helpers/getCodeOfBooking'
import {convertBookingToTime, convertToDate} from '../helpers'
import toCommas from '../helpers/toCommas'

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
    },
    {
        title: 'Mã phiếu',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Giá',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Sân',
        dataIndex: 'pitch',
        key: 'pitch',
    },
    {
        title: 'Thời gian đá',
        dataIndex: 'bookingTime',
        key: 'bookingTime',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Ngày đặt',
        dataIndex: 'bookingDate',
        key: 'bookingDate',
    },
]


const contentStyle = {
    border: '1px solid #eee',
    borderRadius: '6px',
    padding: 20,
}

function MyBooking() {

    const {
        authState: { user, isLoading },
    } = useContext(AuthContext)
    const {
        bookingState: { bookings, isLoading: isLoadingBooking },
        getHistoryBooking,
    } = useContext(BookingContext)

    console.log(`history booking: `, bookings)

    const dataSource = bookings.map(({bookingDetails}, index) => {
        return bookingDetails.map(({pitch, _id, price, status,createdAt, startTime, endTime}) => {
            return {
                key: _id,
                stt: index + 1,
                code: getCodeOfBooking(_id),
                price: toCommas(price) + ' VND',
                pitch: pitch.displayName,
                bookingTime: convertBookingToTime(startTime,endTime),
                status: status.description,
                bookingDate: convertToDate(createdAt),
            }
        })

    })
    console.log(`dataSource: `, dataSource)

    const pagination = {
        defaultCurrent: 1,
        defaultPageSize: 5,
        total: dataSource.length,
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '20'],
        showTotal: (total, range) => `${range[0]}-${range[1]} trên ${total} phiếu`,
    }

    useEffect(() => {
        getHistoryBooking(user._id)
    }, [])

    if (isLoading) return <Spin />

    return (
        <ProfileLayout>
            <Row style={contentStyle}>
                <Col span={24} style={{ textAlign: 'center' }}>
                    <h3>Lịch sử đặt sân</h3>
                    <Table
                        columns={columns}
                        dataSource={dataSource.flat()}
                        pagination={pagination}
                        loading={isLoadingBooking}
                    />
                </Col>
            </Row>
        </ProfileLayout>
    )
}

export default MyBooking
