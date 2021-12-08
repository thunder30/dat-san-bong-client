import React, { useState } from 'react'
import { Row, Col, Form, Input } from 'antd'
import ProfileLayout from '../layout/ProfileLayout'

const { Item } = Form

// const calendar = [
//     [
//         {
//             startTime: "",
//             endTime: ""
//         },
//         {
//             //...
//         }
//     ],
//     [

//     ]
// ]

const contentStyle = {
    border: '1px solid #eee',
    borderRadius: '6px',
    padding: 20,
}

const rules = [
    {
        required: true,
        message: 'Vui lòng nhập thông tin này',
    },
]

function Profile() {
    const [form] = Form.useForm()
    const [profile, setProfile] = useState({
        email: '',
        firstName: '',
    })

    const handleProfile = (e) => {
        e.prevenDefault()
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        })
    }

    const handleOnFinish = (value) => {
        console.log(value)
    }
    return (
        <ProfileLayout>
            <Row justify="center" style={contentStyle}>
                <Col span={18} style={{ textAlign: 'center' }}>
                    <h3>Thông tin tài khoản</h3>
                    <Form
                        name="normal_booking"
                        form={form}
                        layout="inline"
                        initialValues={{
                            email: 'thunder@pate.com',
                        }}
                        onFinish={handleOnFinish}
                    >
                        <Row>
                            <Col>
                                <Item label="Email" name="email" rules={rules}>
                                    <Input
                                        name="email"
                                        size="large"
                                        value={profile.email}
                                        onChange={handleProfile}
                                    />
                                </Item>
                                <Item label="Họ" name="firstName" rules={rules}>
                                    <Input
                                        name="firstName"
                                        size="large"
                                        value={profile.firstName}
                                        onChange={handleProfile}
                                    />
                                </Item>
                            </Col>
                        </Row>

                        <Item label="Họ" name="lastName" rules={rules}>
                            <Input
                                name="lastName"
                                size="large"
                                value={profile.firstName}
                                onChange={handleProfile}
                            />
                        </Item>
                    </Form>
                </Col>
            </Row>
        </ProfileLayout>
    )
}

export default Profile
