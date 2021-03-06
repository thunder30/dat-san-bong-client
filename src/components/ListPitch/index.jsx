import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'antd'
import styled from 'styled-components'

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

function ListPitch({ listPitch }) {
    return (
        <Row gutter={[24, 24]}>
            {listPitch.map(({ _id, displayName, avatar }) => {
                const url = '/pitchbranch/' + _id
                return (
                    <Col className="gutter-row" span={6} key={_id}>
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
            })}
        </Row>
    )
}

export default ListPitch
