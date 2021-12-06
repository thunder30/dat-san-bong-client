import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input, Button, Typography, Divider, Alert } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { AuthContext } from '../../contexts/AuthProvider'

const { Item } = Form
const { Text, Paragraph } = Typography

const WrapperStyled = styled.div`
    .register-form-button {
        width: 100%;
        margin: 12px 0;
    }
    .title {
        font-size: 1.75rem;
    }
    .desc {
        color: #b3b3b3;
        font-size: 1rem;
        margin-bottom: 1.3rem;
    }

    .login-btn {
        border-radius: 4px;
    }
    .login-form-button {
        width: 100%;
    }
    .login-google {
        color: #cf4332;
        border-color: #cf4332;
        text-shadow: none;
        &:hover {
            color: #fff;
            border-color: #fff;
            background-color: #cf4332;
        }
    }
    .login-facebook {
        color: #3d348b;
        border-color: #3d348b;
        text-shadow: none;
        &:hover {
            color: #fff;
            border-color: #fff;
            background-color: #3d348b;
        }
    }
`

const rulesEmail = [
    {
        required: true,
        message: 'Vui lòng nhập email!',
    },
    {
        type: 'email',
        message: 'Vui lòng nhập đúng email!',
    },
]

const rulesPassword = [
    {
        required: true,
        message: 'Vui lòng nhập mật khẩu!',
    },
    {
        pattern: /^(?=.*?[A-Z])/,
        message: 'Ít nhất 1 ký tự [A-Z]',
    },
    {
        pattern: /(?=.*?[a-z])/,
        message: 'Ít nhất 1 ký tự [a-z]',
    },
    {
        pattern: /(?=.*?[0-9])/,
        message: 'Ít nhất 1 ký tự số [0-9]',
    },
    // {
    //     pattern: /(?=.*?[#?!@$ %^&*-])/,
    //     message: 'Ít nhất 1 ký tự đặc biệt [#?!@$ %^&*-]',
    // },
    {
        pattern: /.{8,}$/,
        message: 'Mật khẩu tối thiểu 8 ký tự',
    },
]

const validateConfirm = ({ getFieldValue }) => ({
    validator(_, value) {
        if (!value || getFieldValue('password') === value) {
            return Promise.resolve()
        }

        return Promise.reject(new Error('Xác nhận mật khẩu không đúng!'))
    },
})

function Register() {
    const [form] = Form.useForm()
    const [alert, setAlert] = useState(null)
    const [registerForm, setRegisterForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })
    const { register } = useContext(AuthContext)
    let navigate = useNavigate()

    const handleOnFinish = async () => {}

    const handleRegisterForm = (e) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <WrapperStyled>
            <div>
                <Text className="title">Đăng ký tài khoản</Text>
                <Paragraph className="desc">
                    Nhận ưu đãi cho lần đặt sân đầu tiên
                </Paragraph>
            </div>

            <Form form={form} onFinish={handleOnFinish}>
                <Item name="email" rules={rulesEmail}>
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email"
                        size="large"
                        name="email"
                        value={registerForm.email}
                        onChange={handleRegisterForm}
                    />
                </Item>
                <Item name="password" rules={rulesPassword}>
                    <Input.Password
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Mật khẩu"
                        size="large"
                        name="password"
                        value={registerForm.password}
                        onChange={handleRegisterForm}
                    />
                </Item>
                <Item
                    name="confirm"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng xác nhận mật khẩu!',
                        },
                        validateConfirm,
                    ]}
                >
                    <Input.Password
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Xác nhận mật khẩu"
                        size="large"
                        name="confirmPassword"
                        value={registerForm.confirmPassword}
                        onChange={handleRegisterForm}
                    />
                </Item>

                <Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="register-form-button"
                        size="large"
                    >
                        Đăng ký
                    </Button>
                </Item>
            </Form>
            <Divider plain>Hoặc</Divider>
            <div style={{ margin: '20px 0' }}>
                <Button
                    ghost
                    htmlType="submit"
                    className="login-btn login-facebook login-form-button"
                    size="large"
                >
                    Đăng nhập bằng Facebook
                </Button>
            </div>
            <div style={{ margin: '20px 0' }}>
                <Button
                    ghost
                    htmlType="submit"
                    className="login-btn login-google login-form-button"
                    size="large"
                >
                    Đăng nhập bằng Google
                </Button>
            </div>

            <div style={{ textAlign: 'center' }}>
                Bạn đã có tài khoản Pate Team?{' '}
                <Link to="/login" replace>
                    Đăng nhập
                </Link>
            </div>
        </WrapperStyled>
    )
}

export default Register
