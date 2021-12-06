import React from 'react'
import { Row, Col, Divider, Image } from 'antd'

import clockIcon from '../../assets/checkout/clockIconBlue.png'
import pitchIcon from '../../assets/checkout/pitchIconBlue.png'
import locationIcon from '../../assets/checkout/locationIconBlue.png'

import iconLocation from '../../assets/checkout/location-sign-svgrepo-com.svg'

function InfoBooking() {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Thông tin đặt sân</h1>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={2}>
                            <img
                                src={locationIcon}
                                alt="icon-location"
                                width={25}
                            />
                        </Col>
                        <Col>
                            <h3>Sân bóng hoàng gia Bà ba</h3>
                            <p>số 123, phường 7, Quận 5, TP.HCM</p>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Divider
                        style={{
                            borderTop: '1.5px solid rgba(0, 0, 0, 0.20)',
                        }}
                    />

                    <img src={pitchIcon} alt="icon-location" width={25} />
                    <span style={{ marginLeft: 10 }}>Sân N3 (Sân 5) </span>
                </Col>
                <Col span={24}>
                    <Divider
                        style={{
                            borderTop: '1.5px solid rgba(0, 0, 0, 0.20)',
                        }}
                    />
                    <img src={clockIcon} alt="clock-icon" width={25} />
                    <span style={{ marginLeft: 10 }}>Thời gian</span>
                    <p style={{ marginLeft: 35 }}>06/12/2021 (06:00 - 08:30)</p>
                </Col>
                <Col span={24}>
                    <Divider
                        style={{
                            borderTop: '1.5px solid rgba(0, 0, 0, 0.20)',
                            margin: '8px 0',
                        }}
                    />
                    <h3>Tổng giá: 1,000,000 VND </h3>
                </Col>
            </Row>
        </>
    )
}

export default InfoBooking
