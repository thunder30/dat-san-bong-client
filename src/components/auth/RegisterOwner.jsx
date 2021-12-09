import React from 'react'
import { Row, Col, Button, Input, Form, Select } from 'antd'

const { Item } = Form
const { Option } = Select

const rowStyle = {
    // marginTop: "10px",
    // marginLeft:"10px"
}
const formStyle = {
    marginLeft: '30%',
    marginRight: '30%',
    marginTop: '5%',
}

const province = [
    {
        displayName: 'Hà Nội',
    },
    {
        displayName: 'Hồ Chí Minh',
    },
    {
        displayName: 'Đà Nẵng',
    },
]

const SelectComponent = ({ title, options, ...props }) => (
    <>
        <div
            style={
                {
                    // display: 'inline-block',
                    // fontWeight: 'bold',
                    // width: 100,
                }
            }
        >
            <h3>{title}</h3>
        </div>
        <div>
            <Select
                defaultValue={''}
                // style={{ width: 'auto', minWidth: 200, }}
                {...props}
            >
                {options.map(({ _id, displayName }, index) => (
                    <Option value={displayName} key={_id || index}>
                        {displayName}
                    </Option>
                ))}
            </Select>
        </div>
    </>
)

function RegisterOwner() {
    const [form] = Form.useForm()
    const handleOnFinish = () => {}
    return (
        <Form
            name="normal_booking"
            form={form}
            onFinish={handleOnFinish}
            style={formStyle}
        >
            <Row style={{ ...rowStyle }}>
                <Col
                    span={24}
                    style={{ textAlign: 'center', marginBottom: '20px' }}
                >
                    <h1>Đăng ký chủ sân</h1>
                </Col>
                <Col span={14}>
                    <Item name="pitchName">
                        <h3>Tên sân</h3>
                        <Input name="pitchName" placeholder="Tên Sân" />
                    </Item>
                </Col>
                <Col span={8} offset={1}>
                    <Item name="phoneNumber">
                        <h3>Số điện thoại</h3>
                        <Input name="phoneNumber" placeholder="Số điện thoại" />
                    </Item>
                </Col>
            </Row>
            <Row style={{ ...rowStyle }}>
                <Col span={11}>
                    <Item name="startTime">
                        <h3>Thời gian bắt đầu</h3>
                        <Input
                            name="startTime"
                            placeholder="thời gian bắt đầu"
                        />
                    </Item>
                </Col>
                <Col span={11} offset={1}>
                    <Item name="endTime">
                        <h3>Thời gian kết thúc</h3>
                        <Input
                            name="endTime"
                            placeholder="thời gian kết thúc"
                        />
                    </Item>
                </Col>
            </Row>

            <Row style={{ ...rowStyle }}>
                <Col span={7}>
                    <Item name="province">
                        <SelectComponent
                            title="Tỉnh/Thành phố"
                            options={province}
                        />
                    </Item>
                </Col>
                <Col span={7} offset={1}>
                    <Item name="districe">
                        <SelectComponent
                            title="Quận/Huyện"
                            options={province}
                        />
                    </Item>
                </Col>
                <Col span={7} offset={1}>
                    <Item name="ward">
                        <SelectComponent title="Phường/Xã" options={province} />
                    </Item>
                </Col>
            </Row>
            <Row>
                <Col span={23}>
                    <Item name="address" style={{ ...rowStyle }}>
                        <h3>Địa chỉ</h3>
                        <Input name="address" placeholder="Địa chỉ" />
                    </Item>
                </Col>
            </Row>
            <Row>
                <Col span={23}>
                    <Item name="descriptiom" style={{ ...rowStyle }}>
                        <h3>Mô tả</h3>
                        <Input name="descriptiom" placeholder="Mô tả" />
                    </Item>
                    <Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="registerOwner-btn registerOwner-form-button"
                            size="middle"
                        >
                            Xác nhận đăng ký
                        </Button>
                    </Item>
                </Col>
            </Row>
        </Form>
    )
}

export default RegisterOwner
