import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Card } from 'antd'
import styled from 'styled-components'
import DefaultLayout from '../layout/DefaultLayout'
import background from '../assets/background-main.jpg'
import ListPitch from '../components/ListPitch'
import CreateBooking from '../components/CreateBooking'
import PriceTable from '../components/PriceTable'

const contentStyle = {
    maxWidth: 1100,
    margin: '0 auto',
    height: '100%',
}

const PanerStyled = styled.div`
    background-image: url('${background}');
    background-position: center;
    background-size: cover;
    height: 100%;
`

const relativeBranches = [
    {
        _id: '10',
        displayName: 'Sân bà Sáu',
    },
    {
        _id: '11',
        displayName: 'Sân bà Sáu',
    },
    {
        _id: '12',
        displayName: 'Sân bà Sáu',
    },
    {
        _id: '13',
        displayName: 'Sân bà Sáu',
    },
]

function PitchBranchDetail() {
    const { id } = useParams()
    return (
        <DefaultLayout>
            <Row>
                <Col span={24} style={{ minHeight: '60vh' }}>
                    <PanerStyled />
                </Col>
                <Col span={24}>
                    <Row style={{ ...contentStyle, padding: '40px 0' }}>
                        <Col span={18}>
                            {/* Thông tin sân bóng */}
                            <CreateBooking />
                        </Col>
                        <Col span={6}>
                            <PriceTable title="Bảng giá đặc biệt" />
                        </Col>
                        <Col span={24}>
                            <h1>Các sân bóng gần đây</h1>
                            <ListPitch listPitch={relativeBranches} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default PitchBranchDetail
