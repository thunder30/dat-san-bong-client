import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Card } from 'antd'
import styled from 'styled-components'
import { PitchBranchContext } from '../contexts/PitchBranchProvider'

import DefaultLayout from '../layout/DefaultLayout'
import background from '../assets/background-main.jpg'

const contentStyle = {
    maxWidth: 1100,
    margin: '0 auto',
    height: '100%',
}

const SloganStyled = styled.div`
    background-image: url('${background}');
    background-position: center;
    background-size: cover;
    height: 100%;
    h1 {
        color: #fff;
        font-size: 1.5rem;
        text-shadow: 0.3px 1px #e3e3e3;
    }
    h2 {
        color: #fff;
        font-size: 1.2rem;
        font-style: italic;
        margin-bottom: 20px;
        letter-spacing: 1px;
    }
`

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
    background-position: center center;
    background-size: cover;
    h3 {
        color: #fff;
    }
    .ant-card-body {
        height: 250px;
        line-height: 202px;
    }
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
    const {
        branchState: { features },
    } = useContext(PitchBranchContext)

    return (
        <DefaultLayout>
            <Row>
                <Col span={24} style={{ minHeight: '70vh' }}>
                    <SloganStyled>
                        <Row
                            justify="center"
                            align="middle"
                            style={{ height: '100%' }}
                        >
                            <Col span={20}>
                                <h1>ĐẶT SÂN NHANH CHÓNG - DỄ DÀNG</h1>
                                <h2>Gặp Messi cùng các đồng đội</h2>
                                <Link to="/pitchbranch">
                                    <Button type="primary">Đặt ngay</Button>
                                </Link>
                            </Col>
                        </Row>
                    </SloganStyled>
                </Col>
                <Col span={24}>
                    <Row
                        gutter={[0, 24]}
                        justify="center"
                        style={{
                            ...contentStyle,
                            padding: '40px 0',
                        }}
                    >
                        <Col
                            span={20}
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            <WrapperStyled>
                                <h2>Sân bóng nổi bật</h2>
                                <p>Hơn 200 sân bóng tại TP HCM</p>
                            </WrapperStyled>
                        </Col>
                        <Col className="gutter-row" span={20}>
                            <Row gutter={[24]}>
                                {features.map(
                                    ({ _id, displayName, avatar }) => {
                                        const url = '/pitchbranch/' + _id
                                        return (
                                            <Col
                                                className="gutter-row"
                                                span={6}
                                                key={_id}
                                            >
                                                <Link to={url}>
                                                    <CardStyled
                                                        hoverable
                                                        style={{
                                                            backgroundImage: `url('${avatar}')`,
                                                        }}
                                                    >
                                                        <h3>{displayName}</h3>
                                                    </CardStyled>
                                                </Link>
                                            </Col>
                                        )
                                    }
                                )}
                            </Row>
                        </Col>
                        <Col
                            className="gutter-row"
                            span={24}
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            <Link to="/pitchbranch">
                                Xem tất cả sân bóng &#8811;
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default Home
