import React from 'react'
import { Row, Col, Button } from 'antd'
import DefaultLayout from '../layout/DefaultLayout'

const contentStyle = {
    maxWidth: 1100,
    margin: '0 auto',
    height: '100%',
}

function Checkout() {
    return (
        <DefaultLayout>
            <Row style={contentStyle}>
                <Col span={12}>Thông tin người đặt</Col>
                <Col span={12}>Thông tin đặt sân</Col>
            </Row>
            <Row justify="center" style={contentStyle}>
                <Col span={12} offset={6}>
                    <Button type="primary">Xác nhận đặt sân &#8811;</Button>
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default Checkout
