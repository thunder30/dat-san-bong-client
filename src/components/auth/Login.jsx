import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Typography, Divider } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { AuthContext } from '../../contexts/AuthProvider'

const { Item } = Form
const { Text, Paragraph } = Typography

const WrapperStyled = styled.div`
    .login-form-forgot {
        float: right;
        color: #b3b3b3;
        &:hover {
            text-decoration: underline;
        }
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
const TextStyled = styled(Text)`
    font-size: 2rem;
    font-weight: 600;
`
const ParagraphStyled = styled(Paragraph)`
    color: #b3b3b3;
    font-size: 1.2rem;
    margin-bottom: 1.3rem;
    font-weight: 400;
`

function Login() {
    // Contexts
    const { login } = useContext(AuthContext)

    // Local state
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    })

    const [remember, setRemember] = useState(false)
    const [alert, setAlert] = useState(null)

    const handleUser = (e) => {
        e.preventDefault()
        setLoginForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleRemember = ({ target: { checked } }) => {
        setRemember(checked)
    }

    const [form] = Form.useForm()

    // submit form
    const handleOnFinish = async () => {}

    return (
        <WrapperStyled>
            <div>
                <TextStyled>Pate Team</TextStyled>
                <ParagraphStyled>Chào mừng bạn quay lại </ParagraphStyled>
            </div>

            <Form name="normal_login" form={form} onFinish={handleOnFinish}>
                <Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập email!',
                        },
                        {
                            type: 'email',
                            message: 'Vui lòng nhập đúng email!',
                        },
                    ]}
                >
                    <Input
                        name="email"
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email"
                        size="large"
                        value={loginForm.email}
                        onChange={handleUser}
                    />
                </Item>
                <Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu!',
                        },
                    ]}
                >
                    <Input.Password
                        name="password"
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Mật khẩu"
                        size="large"
                        value={loginForm.password}
                        onChange={handleUser}
                    />
                </Item>

                <Item>
                    <Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox
                            name="remember"
                            value={remember}
                            onChange={handleRemember}
                        >
                            Nhớ mật khẩu
                        </Checkbox>
                    </Item>
                    <Link to="/forgot" className="login-form-forgot">
                        Quên mật khẩu?
                    </Link>
                </Item>

                <Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-btn login-form-button"
                        size="large"
                    >
                        Đăng nhập
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
                Bạn chưa có tài khoản?{' '}
                <Link to="/register" replace>
                    Đăng ký
                </Link>
            </div>
        </WrapperStyled>
    )
}

export default Login
