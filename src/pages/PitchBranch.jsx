import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Input, AutoComplete, Select, Card } from 'antd'
import styled from 'styled-components'
import DefaultLayout from '../layout/DefaultLayout'
import background from '../assets/background-main.jpg'

const { Search } = Input
const { Option } = Select

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

const CardStyled = styled(Card)`
    text-align: center;
    border-radius: 10px;
    .ant-card-body {
        height: 250px;
        line-height: 202px;
    }
`

const branches = [
    {
        _id: '5',
        displayName: 'Sân bà Sáu',
    },
    {
        _id: '6',
        displayName: 'Sân bà Sáu',
    },
    {
        _id: '7',
        displayName: 'Sân bà Sáu',
    },
    {
        _id: '8',
        displayName: 'Sân bà Sáu',
    },
    {
        _id: '9',
        displayName: 'Sân bà Sáu',
    },
]

const district = ['Quận 1', 'Quận 3', 'TP. Thủ Đức']

function PitchBranch() {
    const handleSearch = () => {
        console.log(`handle search`)
    }
    return (
        <DefaultLayout>
            <Row>
                <Col span={24} style={{ minHeight: '60vh' }}>
                    <PanerStyled />
                </Col>
                <Col span={24}>
                    <Row
                        gutter={[0, 24]}
                        style={{ ...contentStyle, padding: '40px 0' }}
                    >
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <h2>Danh sách sân bóng</h2>
                        </Col>
                        <Col span={6}>
                            <AutoComplete onSearch={handleSearch}>
                                <Search placeholder="Tìm sân bóng..." />
                            </AutoComplete>
                        </Col>
                        <Col span={6}>
                            <span
                                style={{
                                    fontWeight: 'bold',
                                    marginRight: 20,
                                }}
                            >
                                Khu vực
                            </span>
                            <Select
                                defaultValue=""
                                style={{ width: 'auto', minWidth: 100 }}
                            >
                                {district.map((value) => (
                                    <Option value={value} key={value}>
                                        {value}
                                    </Option>
                                ))}
                            </Select>
                        </Col>
                        <Col span={24}>
                            <Row gutter={[24, 24]}>
                                {branches.map(({ _id, displayName }) => {
                                    const url = '/pitchbranch/' + _id
                                    return (
                                        <Col
                                            className="gutter-row"
                                            span={6}
                                            key={_id}
                                        >
                                            <Link to={url}>
                                                <CardStyled hoverable>
                                                    <h3>{displayName}</h3>
                                                </CardStyled>
                                            </Link>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default PitchBranch
