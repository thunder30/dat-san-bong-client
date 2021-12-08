import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Layout, Row, Col, Menu, Dropdown, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import logo from '../../assets/logo/pateIconBlue.png'
import { AuthContext } from '../../contexts/AuthProvider'

const { Header } = Layout
const { Item } = Menu

const NavStyled = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
    background-color: #fff !important;
`

const DropdownMenu = () => (
    <Menu>
        <Item key="profile">
            <Link to="/profile" />
            Thông tin cá nhân
        </Item>
        <Item key="logout">
            <Link to="/logout" />
            Đăng xuất
        </Item>
    </Menu>
)

const NavLinkForUser = ({ user }) => {
    return (
        <>
            {/* <Col className="gutter-row">
                <NavLink to="/register">Đăng ký chủ sân</NavLink>
            </Col> */}
            <Col>
                <Dropdown
                    overlay={() => DropdownMenu()}
                    placement="bottomRight"
                    arrow
                >
                    <NavLink to="/profile">
                        <Avatar icon={<UserOutlined />} src={user.avatar} />
                    </NavLink>
                </Dropdown>
            </Col>
        </>
    )
}

function HeaderContent() {
    const {
        authState: { user, isAuthenticated },
    } = useContext(AuthContext)
    return (
        <Header
            className="site-layout"
            style={{
                padding: 0,
                background: 'none',
            }}
        >
            <NavStyled>
                <Row
                    justify="space-between"
                    align="middle"
                    style={{
                        marginLeft: 50,
                        marginRight: 50,
                    }}
                >
                    <Col>
                        <Link to="/">
                            <img src={logo} alt="logo" width="80" height="50" />
                        </Link>
                    </Col>
                    <Col>
                        <Row gutter={[16]}>
                            <Col className="gutter-row">
                                <a
                                    href="https://quanly-datsanbong.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Quản lý sân bóng
                                </a>
                            </Col>
                            {!isAuthenticated ? (
                                <Col className="gutter-row">
                                    <NavLink to="/login">Đăng nhập</NavLink>
                                </Col>
                            ) : (
                                <NavLinkForUser user={user} />
                            )}
                        </Row>
                    </Col>
                </Row>
            </NavStyled>
        </Header>
    )
}

export default HeaderContent
