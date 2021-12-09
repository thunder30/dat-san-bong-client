import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Select, Button, Divider, Image, notification } from 'antd'
import {
    getAllDayOfWeek,
    timestrToSec,
    formatTime,
    getRangeTime,
} from '../../helpers'
import mbappe from '../../assets/PitchBranchDetail/mbappe.jpg'
import Feedback from '../Feedback'
import PriceTable from '../PriceTable'
// import SelectComponentTest from '../SelectComponent'

import { PitchBranchContext } from '../../contexts/PitchBranchProvider'
import { BookingContext } from '../../contexts/BookingProvider'

const { Option } = Select

const rangeTime = [
    {
        displayName: '06:00',
    },
    {
        displayName: '06:30',
    },
    {
        displayName: '07:00',
    },
    {
        displayName: '07:30',
    },
]

const useTime = [
    {
        _id: '60',
        displayName: '60 phút',
    },
    {
        _id: '90',
        displayName: '90 phút',
    },
    {
        _id: '120',
        displayName: '120 phút',
    },
]

const allDayOfWeek = getAllDayOfWeek().map(({ day, date }) => {
    return {
        _id: date,
        displayName: `${day === 1 ? 'Chủ nhật' : 'Thứ ' + day} ngày ${date}`,
    }
})

const SelectComponent = ({ title, options, style, ...props }) => (
    <>
        <div
            style={{
                display: 'inline-block',
                fontWeight: 'bold',
                width: 90,
            }}
        >
            {title}
        </div>
        <Select
            defaultValue={''}
            style={{ width: 'auto', minWidth: 120, ...style }}
            {...props}
        >
            {options.map(({ _id, displayName }, index) => (
                <Option value={displayName} key={_id || index}>
                    {displayName}
                </Option>
            ))}
        </Select>
    </>
)

const BranchInfo = ({ branch }) => {
    const {
        address,
        district,
        ward,
        province,
        description,
        startTime,
        endTime,
        phoneNumber,
    } = branch
    const _address = `${address}, ${ward}, ${district}, ${province}`
    return (
        <>
            <p>Địa chỉ: {_address}</p>
            <p>Số điện thoại: {phoneNumber}</p>
            <p>Thời gian hoạt động: {`${startTime} - ${endTime}`}</p>
            <p>Mô tả: {description}</p>
        </>
    )
}

function BookingInfo() {
    let navigate = useNavigate()
    const isAuthenticated = true
    const {
        branchState: {
            current: { pitchTypes, branch },
        },
    } = useContext(PitchBranchContext)
    const { checkBooking } = useContext(BookingContext)

    const [statePitch, setStatePitch] = useState({
        pitchType: null,
        pitches: [],
        allDayOfWeek,
        rangeTime,
        useTime,
        prices: [],
    })

    const [booking, setBooking] = useState({
        pitch: '',
        startTime: '',
        useTime: '',
        customer: '',
        createdAt: '',
    })

    console.log(branch)
    console.log(pitchTypes)
    console.log(statePitch)
    console.log(booking)

    useEffect(() => {
        setStatePitch({
            ...statePitch,
            rangeTime: getRangeTime(branch.startTime, branch.endTime).map(
                (time) => ({
                    displayName: time,
                })
            ),
        })
    }, [statePitch])

    const handleChangePitchType = (value, { key }) => {
        //console.log(key, value)
        const pitchType = pitchTypes.find(({ _id }) => _id === key)
        const pitches = pitchType.pitches || []
        const prices = pitchType.prices || []
        setStatePitch({
            ...statePitch,
            pitchType,
            pitches,
            prices: prices.map(
                ({ price, time: { startTime, endTime } }, index) => ({
                    key: index,
                    price,
                    startTime,
                    endTime,
                })
            ),
        })
    }

    const handlePitch = (value, { key }) => {
        setBooking({
            ...booking,
            pitch: statePitch.pitches.find(({ _id }) => _id === key),
        })
    }

    const handleDayOfWeek = (value, { key }) => {
        setBooking({
            ...booking,
            createdAt: key,
        })
    }

    const handleRangeTime = (value) => {
        setBooking({
            ...booking,
            startTime: value,
        })
    }

    const handleUseTime = (value, { key }) => {
        setBooking({
            ...booking,
            useTime: key,
        })
    }

    const handleBooking = async () => {
        // console.log(`handle booking`)
        // kiểm tra authenticated
        // gọi api kiểm tra booking
        const endTime = formatTime(
            timestrToSec(booking.startTime) + booking.useTime * 60
        )
        const _check = {
            pitch: {
                ...booking.pitch,
                pitchTypeName: statePitch.pitchType.displayName,
            },
            startTime: `${booking.createdAt} ${booking.startTime}`,
            endTime: `${booking.createdAt} ${endTime}`,
        }
        console.log(`object check booking: `, _check)
        const data = await checkBooking({
            ..._check,
        })
        if (data.success) {
            // redirect route checkout
            notification.success({
                duration: 10,
                description: 'Có thể đặt sân',
            })
            navigate('/checkout')
        }
    }

    const handleButtonBooking = async () => {
        if (isAuthenticated) await handleBooking()
        else {
            notification.info({
                duration: 10,
                description: 'Vui lòng đăng nhập trước khi đặt sân',
            })
            navigate('/login')
        }
    }

    return (
        <>
            <Row>
                <Col className="gutter-row" span={17}>
                    <Row gutter={[0, 16]}>
                        <Col span={10}>
                            <SelectComponent
                                title="Loại sân"
                                options={pitchTypes}
                                onChange={handleChangePitchType}
                            />
                        </Col>
                        <Col span={7}>
                            <SelectComponent
                                title="Giờ bắt đầu"
                                options={statePitch.rangeTime}
                                onChange={handleRangeTime}
                            />
                        </Col>
                        <Col span={7}>
                            <SelectComponent
                                title="Sử dụng"
                                options={statePitch.useTime}
                                onChange={handleUseTime}
                            />
                        </Col>
                        <Col span={10}>
                            <SelectComponent
                                title="Sân"
                                options={statePitch.pitches}
                                onChange={handlePitch}
                            />
                        </Col>
                        <Col span={14}>
                            <SelectComponent
                                title="Chọn ngày"
                                options={statePitch.allDayOfWeek}
                                style={{ minWidth: 210 }}
                                onChange={handleDayOfWeek}
                            />
                        </Col>
                        <Col span={10}>
                            <Button
                                type="primary"
                                style={{
                                    minWidth: 200,
                                }}
                                onClick={handleButtonBooking}
                            >
                                Đặt sân
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{ margin: '50px 0' }}>
                        <Col span={24}>
                            <h2>Thông tin sân bóng</h2>
                            <BranchInfo branch={branch} />
                            <Divider />
                        </Col>

                        <Col span={24}>
                            <h2>Hình ảnh</h2>
                            <Image width={200} src={mbappe} />
                            <Divider />
                        </Col>

                        <Col span={24}>
                            <h2>Đánh giá</h2>
                            <Feedback />
                            <Divider />
                        </Col>
                    </Row>
                </Col>

                <Col className="gutter-row" span={6} offset={1}>
                    <h3 style={{ textAlign: 'center' }}>Bảng giá</h3>
                    <PriceTable dataSource={statePitch.prices} />
                </Col>
            </Row>
        </>
    )
}

export default BookingInfo
