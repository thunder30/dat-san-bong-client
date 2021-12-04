import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Layout, Row, Col } from 'antd'
import logo from '../../assets/PateLogo.png'

const { Header } = Layout

const LogoStyled = styled.div`
    display: inline-block;
    height: 48px;
    width: 200px;
    margin: 8px;
    background: #38b15d;
`

const NavStyled = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    background-color: #fff !important;
`

const WrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-contents: space-between;
    ul {
        display: inline-block;
        li {
            display: inline;
            margin-left: 16px;
        }
    }
`

function HeaderContent() {
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
                        margin: '0 50px',
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
                            <Col className="gutter-row">
                                <NavLink to="register">Đăng ký chủ sân</NavLink>
                            </Col>
                            <Col className="gutter-row">
                                <NavLink to="login">Đăng nhập</NavLink>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </NavStyled>
            {/* <NavStyled>
                <WrapperStyled>
                    <ul>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </WrapperStyled>
            </NavStyled> */}
        </Header>
    )
}

export default HeaderContent
