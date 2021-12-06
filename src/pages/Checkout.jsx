import React, { useState } from 'react'
import { Row, Col, Button, Input, Radio, Form, Image, Divider } from 'antd'
import DefaultLayout from '../layout/DefaultLayout'
import InfoBooking from '../components/InfoBooking'

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
    const [form] = Form.useForm()
    const [booking, setBooking] = useState({
        fullName: '',
        email: '',
        typePay: 'Thanh toán online',
    })
    const handleChangeRadio = (e) => {
        e.preventDefault()
        console.log(`is paid: `, e.target.value)
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
    const handleOnFinish = (value) => {
        console.log(value)
    }
    return (
        <DefaultLayout>
            <Row justify="center" align="middle" style={contentStyle}>
                <Col span={10} style={{ padding: '5px' }}>
                    <h1>Thông tin người đặt</h1>
                    <Form
                        name="normal_booking"
                        form={form}
                        onFinish={handleOnFinish}
                    >
                        <Item name="fullName">
                            <Input
                                name="fullName"
                                placeholder="Họ tên"
                                value={booking.fullName}
                                onChange={handleChangeBooking}
                                disabled
                            />
                        </Item>
                        <Item name="email">
                            <Input
                                name="email"
                                placeholder="Email"
                                value={booking.email}
                                onChange={handleChangeBooking}
                                disabled
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
                    <InfoBooking />
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default Checkout
