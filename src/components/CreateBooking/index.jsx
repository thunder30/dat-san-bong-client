import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Select, Button, Divider, Image } from 'antd'
import { getDateOfWeek } from '../../helpers'
import mbappe from '../../assets/PitchBranchDetail/mbappe.jpg'
import Feedback from '../Feedback'

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

const selectDate = getDateOfWeek().map(({ day, date }) => {
    return {
        displayName: `${day === 1 ? 'Chủ nhật' : 'Thứ ' + day} ngày ${date}`,
    }
})

const SelectComponent = ({ title, options, ...rest }) => (
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
        <Select
            defaultValue=""
            style={{ width: 'auto', minWidth: 100, ...rest }}
        >
            {options.map(({ _id, displayName }, index) => (
                <Option value={displayName} key={_id || index}>
                    {displayName}
                </Option>
            ))}
        </Select>
    </>
)

function BookingInfo() {
    const isAuthenticated = true
    return (
        <>
            <Row gutter={[0, 16]}>
                <Col span={8}>
                    <SelectComponent title="Loại sân" options={pitchTypes} />
                </Col>
                <Col span={8}>
                    <SelectComponent title="Giờ bắt đầu" options={startTimes} />
                </Col>
                <Col span={8}>
                    <SelectComponent title="Sử dụng" options={useTimes} />
                </Col>
                <Col span={8}>
                    <SelectComponent title="Sân" options={pitches} />
                </Col>
                <Col span={16}>
                    <SelectComponent
                        title="Chọn ngày"
                        options={selectDate}
                        minWidth={170}
                    />
                </Col>
                <Col span={8}>
                    <Link to={isAuthenticated ? '/checkout' : '/login'}>
                        <Button
                            type="primary"
                            style={{
                                minWidth: 200,
                            }}
                        >
                            Đặt sân
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row style={{ margin: '50px 0' }}>
                <Col span={24}>
                    <h2>Thông tin sân bóng</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita ratione hic vitae id laborum perspiciatis
                        mollitia aliquid perferendis inventore et! Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Suscipit
                        officiis consequuntur ipsam dignissimos molestias eum?
                    </p>
                    <Divider />
                </Col>

                <Col span={24}>
                    <h2>Hình ảnh</h2>
                    <Image width={200} src={mbappe} />
                    <Divider />
                </Col>

                <Col span={24}>
                    <h2>Đánh giá</h2>
                    <Feedback />
                    <Divider />
                </Col>
            </Row>
        </>
    )
}

export default BookingInfo
