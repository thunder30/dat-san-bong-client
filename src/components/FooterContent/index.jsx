import React from 'react'
import { Layout, Row, Col} from 'antd'
import { FacebookOutlined } from '@ant-design/icons'
const { Footer } = Layout

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
            <Row>
                <Col span={6}>
                    <Row><h4>VỀ CHÚNG TÔI</h4></Row>
                    <Row><a href ="#">Giới thiệu về Pate</a></Row>
                    <Row><a href ="#">Blog</a></Row>
                    <Row><a href ="#">Chính sách bảo mật</a></Row>
                </Col>
                <Col span={6}>
                    <Row><h4>THÔNG TIN LIÊN HỆ</h4></Row>
                    <Row><a href ="#">
                        {/* <i class="fab fa-facebook">
                            PateChat
                        </i> */}
                        {/* <FacebookOutlined title= "PateChat" >
                            PateChat
                        </FacebookOutlined> */}
                        </a></Row>
                    <Row><a href ="#">pate@gmail.com</a></Row>
                </Col>
                <Col span={6}>
                    <Row><h4>THANH TOÁN</h4></Row>
                    <Row><a href ="#">Momo</a></Row>
                    <Row><a href ="#">Banking</a></Row>
                </Col>
                <Col span={6}>
                    <Row><h4>ỨNG DỤNG DI ĐỘNG</h4></Row>
                    <Row><img src ="https://www.sporta.vn/assets/icon-appstore-0ac658e90248e413db2bdc584e50b25b06a8229f6a74efb816b93194d0491829.svg"></img></Row>
                    <Row><img src ="https://www.sporta.vn/assets/icon-googleplaystore-18c9b8d2140c5ad8657c670f05036c5a62760da182f1d8cbe8c40c467c7f2b4b.svg"></img></Row>
                </Col>
            </Row>
        </Footer>
    )
}

export default FooterContent
