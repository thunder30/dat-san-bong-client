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
    const handleOnFinish = async () => {
        await login(loginForm)
    }

    return (
        <WrapperStyled>
            <div>
                <TextStyled>Pate Team</TextStyled>
                <ParagraphStyled>Ch??o m???ng b???n quay l???i </ParagraphStyled>
            </div>

            <Form name="normal_login" form={form} onFinish={handleOnFinish}>
                <Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Vui l??ng nh???p email!',
                        },
                        {
                            type: 'email',
                            message: 'Vui l??ng nh???p ????ng email!',
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
                            message: 'Vui l??ng nh???p m???t kh???u!',
                        },
                    ]}
                >
                    <Input.Password
                        name="password"
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="M???t kh???u"
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
                            Nh??? m???t kh???u
                        </Checkbox>
                    </Item>
                    <Link to="/forgot" className="login-form-forgot">
                        Qu??n m???t kh???u?
                    </Link>
                </Item>

                <Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-btn login-form-button"
                        size="large"
                    >
                        ????ng nh???p
                    </Button>
                </Item>
            </Form>
            <Divider plain>Ho???c</Divider>
            <div style={{ margin: '20px 0' }}>
                <Button
                    ghost
                    htmlType="submit"
                    className="login-btn login-facebook login-form-button"
                    size="large"
                >
                    ????ng nh???p b???ng Facebook
                </Button>
            </div>
            <div style={{ margin: '20px 0' }}>
                <Button
                    ghost
                    htmlType="submit"
                    className="login-btn login-google login-form-button"
                    size="large"
                >
                    ????ng nh???p b???ng Google
                </Button>
            </div>

            <div style={{ textAlign: 'center' }}>
                B???n ch??a c?? t??i kho???n?{' '}
                <Link to="/register" replace>
                    ????ng k??
                </Link>
            </div>
        </WrapperStyled>
    )
}

export default Login
