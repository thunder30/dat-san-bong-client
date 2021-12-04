import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Card } from 'antd'
import DefaultLayout from '../layout/DefaultLayout'
import background from '../assets/background-main.jpg'
import styled from 'styled-components'

const titleStyle = {
    color: '#fff',
    fontSize: '1.5rem',
    textShadow: '1px 1px #e3e3e3',
}

const descriptionStyle = {
    color: '#fff',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    marginBottom: 20,
}

const contentStyle = {
    maxWidth: 1100,
    margin: '0 auto',
    height: '100%',
}

const backgroundStyle = {
    backgroundImage: `url("${background}")`,
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}

const WrapperStyled = styled.div`
    h2 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    p {
        font-size: 1rem;
        letter-spacing: 0.2rem;
        margin-bottom: 0;
        text-transform: uppercase;
    }
`
const CardStyled = styled(Card)`
    text-align: center;
    border-radius: 10px;
    height: 200px;
`

const pitchBranches = [
    {
        _id: '1',
        displayName: 'Sân bà Tám',
        description: 'desc',
        avatar: null,
    },
    {
        _id: '2',
        displayName: 'Sân bà Tám',
        description: 'desc',
        avatar: null,
    },
    {
        _id: '3',
        displayName: 'Sân bà Tám',
        description: 'desc',
        avatar: null,
    },
    {
        _id: '4',
        displayName: 'Sân bà Tám',
        description: 'desc',
        avatar: null,
    },
]

function Home() {
    return (
        <DefaultLayout>
            <Row>
                <Col span={24} style={{ minHeight: '70vh' }}>
                    <div style={backgroundStyle}>
                        <Row align="middle" style={contentStyle}>
                            <Col span={20}>
                                <h1 style={titleStyle}>
                                    ĐẶT SÂN NHANH CHÓNG - DỄ DÀNG
                                </h1>
                                <h2 style={descriptionStyle}>
                                    Gặp Messi cùng các đồng đội
                                </h2>
                                <Link to="/pitchbranch">
                                    <Button type="primary">Đặt ngay</Button>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span={24}>
                    <Row
                        gutter={[0, 24]}
                        style={{
                            ...contentStyle,
                            padding: '40px 0',
                        }}
                    >
                        <Col
                            span={24}
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            <WrapperStyled>
                                <h2>Sân bóng nổi bật</h2>
                                <p>Hơn 200 sân bóng tại TP HCM</p>
                            </WrapperStyled>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Row gutter={[10]}>
                                {pitchBranches.map(({ _id, displayName }) => (
                                    <Col
                                        className="gutter-row"
                                        span={6}
                                        key={_id}
                                    >
                                        <CardStyled
                                            hoverable
                                            onClick={() => (
                                                <Link to="/pitchbranch/_id" />
                                            )}
                                        >
                                            <h3>{displayName}</h3>
                                        </CardStyled>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default Home
