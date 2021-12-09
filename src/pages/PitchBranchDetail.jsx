import React, { useContext, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Spin } from 'antd'
import styled from 'styled-components'
import DefaultLayout from '../layout/DefaultLayout'
import background from '../assets/background-main.jpg'
import ListPitch from '../components/ListPitch'
import CreateBooking from '../components/CreateBooking'

import { PitchBranchContext } from '../contexts/PitchBranchProvider'

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
    h1 {
        color: #fff;
        font-size: 1.5rem;
        text-shadow: 0.3px 1px #e3e3e3;
    }
`

const getRelativeBranches = (branches) => {
    // sắp xếp giảm dần, và lấy 4 phần tử đầu tiên
    const rs = [...branches]
    rs.sort((a, b) => {
        const _a = new Date(a.createdAt)
        const _b = new Date(b.createdAt)
        return _b - _a
    })
    if (rs.length > 4) rs.length = 4
    return rs
}

function PitchBranchDetail() {
    const {
        branchState: {
            isLoading,
            branches,
            current: { branch },
        },
        getBranchById,
    } = useContext(PitchBranchContext)
    const { id } = useParams()
    useLayoutEffect(() => {
        getBranchById(id)
    }, [id])

    if (isLoading || !branch) return <Spin />

    return (
        <DefaultLayout>
            <Row justify="center">
                <Col span={24} style={{ minHeight: '60vh' }}>
                    <PanerStyled>
                        <Row
                            justify="center"
                            align="middle"
                            style={{ height: '100%' }}
                        >
                            <Col span={20}>
                                <h1>{branch?.displayName || ''}</h1>
                            </Col>
                        </Row>
                    </PanerStyled>
                </Col>
                <Col span={24}>
                    <Row justify="center" style={{ padding: '40px 0' }}>
                        <Col className="gutter-row" span={20}>
                            {/* Thông tin sân bóng */}
                            <CreateBooking />
                        </Col>
                        <Col span={20}>
                            <h1>Các sân bóng gần đây</h1>
                            <ListPitch
                                listPitch={getRelativeBranches(branches)}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default PitchBranchDetail
