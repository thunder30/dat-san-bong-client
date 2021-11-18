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

    useEffect(() => {
        const idTimeOut = setTimeout(() => setAlert(null), 5000)
        return () => {
            clearTimeout(idTimeOut)
        }
    }, [alert])

    console.log(registerForm)

    const handleOnFinish = async () => {
        try {
            const data = await register(registerForm)
            if (!data.success) {
                setAlert(data.message)
                //setTimeout(() => setAlert(null), 5000)
            } else {
                // đăng ký thành công
                //  chuyển đến trang thông báo gửi mail
                navigate('/confirm')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleRegisterForm = (e) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <WrapperStyled>
            {alert && (
                <Alert
                    message={alert}
                    type="error"
                    showIcon
                    closable
                    afterClose={() => setAlert(null)}
                />
            )}
            <div>
                <Text className="title">Đăng ký chủ sân</Text>
                <Paragraph className="desc">
                    Quản lý sân bóng của bạn một cách hiệu quả.
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
            <Divider plain>
                Bạn đã có tài khoản?{' '}
                <Link to="/login" replace>
                    Đăng nhập
                </Link>
            </Divider>
        </WrapperStyled>
    )
}

export default Register
