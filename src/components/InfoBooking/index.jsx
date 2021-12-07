import React, { useState } from 'react'
import { Row, Col, Divider } from 'antd'

import clockIcon from '../../assets/checkout/clockIconBlue.png'
import pitchIcon from '../../assets/checkout/pitchIconBlue.png'
import locationIcon from '../../assets/checkout/locationIconBlue.png'
import toCommas from '../../helpers/toCommas'

function InfoBooking({ branch, booking }) {
    const [state, setState] = useState(() => {
        const { startTime, endTime, pitch, price } = booking
        const date = startTime.split(' ')[0]
        return {
            pitchName: pitch.displayName,
            pitchTypeName: pitch.pitchTypeName,
            start: startTime.split(' ')[1],
            end: endTime.split(' ')[1],
            date,
            price: toCommas(price),
        }
    })
    const InfoBranch = () => {
        const { displayName, address, ward, district, province } = branch
        return (
            <>
                <h4>{displayName}</h4>
                <span>{`${address}, ${ward}, ${district}, ${province}`}</span>
            </>
        )
    }
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
                                width={20}
                            />
                        </Col>
                        <Col>
                            <InfoBranch />
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Divider
                        style={{
                            borderTop: '1.5px solid rgba(0, 0, 0, 0.20)',
                        }}
                    />

                    <p>
                        <img src={pitchIcon} alt="icon-location" width={20} />
                        <span style={{ marginLeft: 10 }}>
                            {state.pitchName} {`(${state.pitchTypeName})`}
                        </span>
                    </p>
                    <p>
                        <img src={clockIcon} alt="clock-icon" width={20} />
                        <span style={{ marginLeft: 10 }}>
                            {state.date} {`(${state.start} - ${state.end})`}
                        </span>
                    </p>
                </Col>
                {/* <Col span={24}>
                    <Divider
                        style={{
                            borderTop: '1.5px solid rgba(0, 0, 0, 0.20)',
                        }}
                    />
                    <img src={clockIcon} alt="clock-icon" width={25} />
                    <span style={{ marginLeft: 10 }}>Thời gian</span>
                    <p style={{ marginLeft: 35 }}>06/12/2021 (06:00 - 08:30)</p>
                </Col> */}
                <Col span={24}>
                    <Divider
                        style={{
                            borderTop: '1.5px solid rgba(0, 0, 0, 0.20)',
                            margin: '8px 0',
                        }}
                    />
                    <h3>Tổng tiền: {state.price} VND </h3>
                </Col>
            </Row>
        </>
    )
}

export default InfoBooking
