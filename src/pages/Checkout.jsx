import React, { useState, useContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { Row, Col, Button, Input, Radio, Form, notification } from 'antd'
import DefaultLayout from '../layout/DefaultLayout'
import InfoBooking from '../components/InfoBooking'
import { BookingContext } from '../contexts/BookingProvider'
import { PitchBranchContext } from '../contexts/PitchBranchProvider'
import { AuthContext } from '../contexts/AuthProvider'

const { Item } = Form

const contentStyle = {
    maxWidth: 1100,
    margin: '20px auto',
    height: '100%',
}

const infoBookingStyle = {
    border: '1px solid #e3e3e3',
    backgroundColor: '#fff',
    borderRadius: '6px',
    padding: 16,
    boxShadow: '0 0 1rem rgb(0 0 0 / 15%)',
}

function Checkout() {
    const { bookingState, confirmBooking } = useContext(BookingContext)
    const { branchState } = useContext(PitchBranchContext)
    const {
        authState: { user },
    } = useContext(AuthContext)
    let navigate = useNavigate()

    const [form] = Form.useForm()
    const [booking, setBooking] = useState({
        name: `${user.firstName} ${user.lastName}`,
        phone: user.phone,
        typePay: 'Thanh toán online',
    })

    console.log(booking)

    const handleChangeRadio = (e) => {
        e.preventDefault()
        setBooking((prev) => ({
            ...prev,
            typePay: e.target.value,
        }))
    }
    const handleChangeBooking = (e) => {
        e.preventDefault()
        setBooking((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const handleOnFinish = async (value) => {
        console.log(value)
        const { startTime, endTime, pitch } = bookingState.current
        const _booking = {
            startTime,
            endTime,
            customer: user._id,
            pitch: pitch._id,
            name: value.name,
            phone: value.phone,
        }
        console.log(_booking)
        // call api booking confirm
        const data = await confirmBooking(_booking)
        if (data.success) {
            notification.success({
                duration: 5,
                description: 'Đặt sân thành công!',
            })
            navigate('/profile')
        }
    }

    if (bookingState.isLoading || branchState.isLoading)
        return <Navigate to="/" />

    return (
        <DefaultLayout>
            <Row justify="center" align="middle" style={contentStyle}>
                <Col span={10} style={{ padding: '5px' }}>
                    <h1>Thông tin người đặt</h1>
                    <Form
                        name="normal_login"
                        form={form}
                        initialValues={{
                            name: booking.name,
                            phone: booking.phone,
                        }}
                        layout="vertical"
                        onFinish={handleOnFinish}
                    >
                        <Item label="Họ tên" name="name">
                            <Input
                                name="name"
                                value={booking.name}
                                onChange={handleChangeBooking}
                            />
                        </Item>
                        <Item label="Số điện thoại" name="phone">
                            <Input
                                name="phone"
                                value={booking.phone}
                                onChange={handleChangeBooking}
                            />
                        </Item>
                        <Item>
                            <h3>Phương thức thanh toán</h3>
                            <Radio.Group
                                onChange={handleChangeRadio}
                                value={booking.typePay}
                            >
                                <Radio
                                    value={'Thanh toán online'}
                                    style={{ display: 'block' }}
                                >
                                    Thanh toán online
                                </Radio>
                            </Radio.Group>
                        </Item>
                        <Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-btn login-form-button"
                                size="middle"
                            >
                                Xác nhận đặt sân
                            </Button>
                        </Item>
                    </Form>
                </Col>
                <Col span={10} offset={2} style={infoBookingStyle}>
                    <InfoBooking
                        booking={bookingState.current}
                        branch={branchState.current.branch}
                    />
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default Checkout
