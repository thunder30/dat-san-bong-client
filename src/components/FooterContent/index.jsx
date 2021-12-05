import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'
import { FacebookOutlined } from '@ant-design/icons'
import shoppeIcon from '../../assets/shopee-seeklogo.com.svg'
const { Footer } = Layout

const contentStyle = {
    maxWidth: 1100,
    margin: '0 auto',
    height: '100%',
}

function FooterContent() {
    return (
        <Footer
            className="site-layout"
            style={{
                padding: 20,
                //color hard grey
                backgroundColor: '#e9ecef',
                // background: 'none',
            }}
        >
            <Row style={contentStyle}>
                <Col span={4} offset={2}>
                    <h3>Về chúng tôi</h3>
                    <NavLink to="/about" style={{ display: 'block' }}>
                        Giới thiệu về Pate
                    </NavLink>
                    <NavLink to="/blog" style={{ display: 'block' }}>
                        Blog
                    </NavLink>
                    <NavLink to="/privacy" style={{ display: 'block' }}>
                        Chính sách bảo mật
                    </NavLink>
                </Col>
                <Col span={4} offset={2}>
                    <h3>Thông tin liên hệ</h3>
                    <a
                        href="https://shopee.vn/"
                        style={{ display: 'block' }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FacebookOutlined />
                    </a>
                    <NavLink to="/blog" style={{ display: 'block' }}>
                        support@pate.com
                    </NavLink>
                </Col>
                <Col span={4} offset={2}>
                    <h3>Thanh toán</h3>
                    <NavLink to="/blog" style={{ display: 'block' }}>
                        Momo
                    </NavLink>
                    <NavLink to="/blog" style={{ display: 'block' }}>
                        Banking
                    </NavLink>
                </Col>
                <Col span={4} offset={1}>
                    <h3>Ứng dụng di động</h3>
                    <a
                        href="https://www.apple.com/vn/app-store/"
                        style={{ display: 'block' }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://www.sporta.vn/assets/icon-appstore-0ac658e90248e413db2bdc584e50b25b06a8229f6a74efb816b93194d0491829.svg"
                            alt="icon-appstore"
                        ></img>
                    </a>
                    <a
                        href="https://play.google.com/store"
                        style={{ display: 'block' }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://www.sporta.vn/assets/icon-googleplaystore-18c9b8d2140c5ad8657c670f05036c5a62760da182f1d8cbe8c40c467c7f2b4b.svg"
                            alt="icon-googleplaystore"
                        ></img>
                    </a>
                </Col>
            </Row>
        </Footer>
    )
}

export default FooterContent
