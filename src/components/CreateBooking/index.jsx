import React from 'react'
import { Row, Col, Select } from 'antd'

const { Option } = Select

const pitchTypes = [
    {
        _id: 'ls5',
        displayName: 'Sân 5',
    },
    {
        _id: 'ls7',
        displayName: 'Sân 7',
    },
]

const pitches = [
    {
        _id: 'ss1',
        displayName: 'Sân số 1',
    },
    {
        _id: 'ss2',
        displayName: 'Sân số 2',
    },
]

const startTimes = [
    {
        displayName: '06:00',
    },
    {
        displayName: '06:30',
    },
    {
        displayName: '07:00',
    },
    {
        displayName: '07:30',
    },
]

const useTimes = [
    {
        displayName: '60 phút',
    },
    {
        displayName: '90 phút',
    },
    {
        displayName: '120 phút',
    },
]

const SelectComponent = ({ title, options }) => (
    <>
        <div
            style={{
                display: 'inline-block',
                fontWeight: 'bold',
                width: 100,
            }}
        >
            {title}
        </div>
        <Select defaultValue="" style={{ width: 'auto', minWidth: 100 }}>
            {options.map(({ _id, displayName }, index) => (
                <Option value={displayName} key={_id || index}>
                    {displayName}
                </Option>
            ))}
        </Select>
    </>
)

function BookingInfo() {
    return (
        <Row gutter={[0, 16]}>
            <Col span={8}>
                <SelectComponent title="Loại sân" options={pitchTypes} />
            </Col>
            <Col span={16}>
                <SelectComponent title="Chọn ngày" options={pitches} />
            </Col>
            <Col span={8}>
                <SelectComponent title="Sân" options={pitches} />
            </Col>
            <Col span={8}>
                <SelectComponent title="Giờ bắt đầu" options={startTimes} />
            </Col>
            <Col span={8}>
                <SelectComponent title="Sử dụng" options={useTimes} />
            </Col>
        </Row>
    )
}

export default BookingInfo
