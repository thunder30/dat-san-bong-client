import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, Avatar, Upload } from 'antd'
import styled from 'styled-components'

import DefaultLayout from '../DefaultLayout'
import { UserOutlined } from '@ant-design/icons'

const contentStyle = {
    maxWidth: 1100,
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    marginBottom: 50,
}

const siderStyle = {
    border: '1px solid #fff',
    borderRadius: '6px',
    backgroundColor: '#fff',
    padding: 20,
}

const AvatarStyled = styled(Avatar)`
    width: 150px;
    height: 150px;
    line-height: 150px;
`

function Profile({ children }) {
    return (
        <DefaultLayout>
            <Row gutter={[24, 24]} style={{ ...contentStyle }}>
                <Col span={6}>
                    <Row style={siderStyle}>
                        <Col span={18} offset={4} style={{ marginBottom: 20 }}>
                            <AvatarStyled
                                icon={<UserOutlined />}
                                size="large"
                                src="https://joeschmoe.io/api/v1/random"
                            />
                        </Col>
                        <Col span={18} offset={4}>
                            <NavLink to="/profile">Thông tin tài khoản</NavLink>
                        </Col>
                        <Col span={18} offset={4}>
                            <NavLink to="/mybooking">Lịch sử đặt sân</NavLink>
                        </Col>
                    </Row>
                </Col>
                <Col span={18}>{children}</Col>
            </Row>
        </DefaultLayout>
    )
}

export default Profile