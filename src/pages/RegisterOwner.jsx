import React, { useState, useContext } from 'react'
import { Row, Col, Form, Input, Select, Button, notification } from 'antd'
import DefaultLayout from '../layout/DefaultLayout'
import { AuthContext } from '../contexts/AuthProvider'
import * as apiUser from '../core/services/user'
import { getRangeTime } from '../helpers'
import { useNavigate } from 'react-router-dom'

const { Item } = Form
const { Option } = Select

const contentStyle = {
    border: '1px solid #eee',
    borderRadius: '6px',
    padding: 20,
}
const validateField = ({ getFieldValue }) => ({
    validator(_, value) {
        if (value) {
            return Promise.resolve()
        }

        return Promise.reject(new Error('Vui lòng nhập thông tin này!'))
    },
})

const ProfilePersonItem = ({
    onChange,
    onChangeStartTime,
    onChangeEndTime,
    rangeTimes,
    value: { displayName, phoneNumber, startTime, endTime, description },
}) => (
    <>
        <Col span={15}>
            <Item label="Tên sân" name="displayName" rules={[validateField]}>
                <Input
                    name="displayName"
                    size="large"
                    value={displayName}
                    onChange={onChange}
                />
            </Item>
        </Col>
        <Col span={9}>
            <Item
                label="Số điện thoại"
                name="phoneNumber"
                rules={[validateField]}
            >
                <Input
                    name="phoneNumber"
                    size="large"
                    value={phoneNumber}
                    onChange={onChange}
                />
            </Item>
        </Col>
        <Col span={12}>
            <Item label="Giờ bắt đầu" name="startTime" rules={[validateField]}>
                <Select
                    value={startTime}
                    size="large"
                    onChange={onChangeStartTime}
                >
                    {rangeTimes.map((time, index) => (
                        <Option value={time} key={index}>
                            {time}
                        </Option>
                    ))}
                </Select>
            </Item>
        </Col>
        <Col span={12}>
            <Item label="Giờ kết thúc" name="endTime" rules={[validateField]}>
                <Select value={endTime} size="large" onChange={onChangeEndTime}>
                    {rangeTimes.map((time, index) => (
                        <Option value={time} key={index}>
                            {time}
                        </Option>
                    ))}
                </Select>
            </Item>
        </Col>
        <Col span={24}>
            <Item label="Mô tả" name="description">
                <Input
                    name="description"
                    size="large"
                    value={description}
                    onChange={onChange}
                />
            </Item>
        </Col>
    </>
)

const AddressItem = ({
    onChange,
    onChangeProvince,
    onChangeDistrict,
    value: { address, district, ward, province },

    apiProvince: { provinces, districts, wards },
}) => (
    <>
        <Col span={24}>
            <Item label="Địa chỉ" name="address">
                <Input
                    name="address"
                    size="large"
                    value={address}
                    onChange={onChange}
                />
            </Item>
        </Col>

        <Col span={8}>
            <Item label="Tỉnh/Thành phố" name="province">
                <Select
                    value={province}
                    size="large"
                    onChange={onChangeProvince}
                >
                    {provinces.map(({ name, code }) => (
                        <Option value={name} key={code}>
                            {name}
                        </Option>
                    ))}
                </Select>
            </Item>
        </Col>
        <Col span={8}>
            <Item label="Quận/Huyện" name="district">
                <Select
                    value={district}
                    size="large"
                    onChange={onChangeDistrict}
                >
                    {districts.map(({ name, code }) => (
                        <Option value={name} key={code}>
                            {name}
                        </Option>
                    ))}
                </Select>
            </Item>
        </Col>

        <Col span={8}>
            <Item label="Xã/Phường" name="ward">
                <Select value={ward} size="large">
                    {wards.map(({ name, code }) => (
                        <Option value={name} key={code}>
                            {name}
                        </Option>
                    ))}
                </Select>
            </Item>
        </Col>
    </>
)

const provinces = [
    {
        code: 1,
        name: 'Hà Nội',
        districts: [
            {
                code: 1,
                name: 'Ba Đình',
                codeProvince: 1,
                wards: [
                    {
                        code: 1,
                        name: 'Giảng Võ',
                        codeDistrict: 1,
                    },
                    {
                        code: 2,
                        name: 'Cầu giấy',
                        codeDistrict: 1,
                    },
                ],
            },
        ],
    },
    {
        code: 2,
        name: 'Hồ Chí Minh',
        districts: [
            {
                code: 1,
                name: 'Gò Vấp',
                codeProvince: 2,
                wards: [
                    {
                        code: 1,
                        name: 'Phường 14',
                        codeDistrict: 1,
                    },
                    {
                        code: 2,
                        name: 'Phường 15',
                        codeDistrict: 1,
                    },
                ],
            },
        ],
    },
]

function RegisterOwner() {
    const {
        authState: { user },
    } = useContext(AuthContext)
    const [form] = Form.useForm()
    const [profile, setProfile] = useState({
        displayName: '',
        phoneNumber: '',
        address: '',
        ward: '',
        district: '',
        province: '',
        startTime: '',
        endTime: '',
    })
    const rangeTimes = getRangeTime('00:00', '24:00')
    // console.log(profile)
    const [apiProvince, setApiProvince] = useState({
        provinces,
        districts: [],
        wards: [],
    })
    // console.log(apiProvince)
    const handleChangeProvince = (value, { key }) => {
        const districts = apiProvince.provinces.find(
            ({ code }) => code === key * 1
        ).districts

        setApiProvince({
            ...apiProvince,
            districts,
        })
        setProfile({
            ...profile,
            province: value,
            district: districts[0]?.name,
        })
    }
    const handleChangeDistrict = (value, { key }) => {
        // console.log(`district ${key} ${value}`)
        const wards = apiProvince.districts.find(
            ({ code }) => code === key * 1
        ).wards
        // console.log(wards)
        setApiProvince({
            ...apiProvince,
            wards,
        })
        setProfile({
            ...profile,
            district: value,
            wards: wards[0]?.name,
        })
    }
    const handleOnChangeStartTime = (value, ob) => {
        setProfile({
            ...profile,
            startTime: value,
        })
    }
    const handleOnChangeEndTime = (value, ob) => {
        setProfile({
            ...profile,
            endTime: value,
        })
    }
    const handleProfile = (e) => {
        e.preventDefault()
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        })
    }
    const handleOnFinish = async (values) => {
        form.resetFields()
        const pitchBranch = {
            ...values,
            owner: user._id,
        }
        console.log(pitchBranch)
        const data = await apiUser.createOwner(pitchBranch)
        console.log(data)
        if (data.success) {
            notification.success({
                duration: 5,
                message: 'Đăng ký thành công!',
                description: 'Quản trị viên sẽ liên hệ với bạn trong giây lát.',
            })
            // setTimeout(() => {
            //     window.location.href = 'https://quanly-datsanbong.netlify.app/'
            // }, 5000)
        }
        // call api
    }
    return (
        <DefaultLayout>
            <Row justify="center" style={contentStyle}>
                <Col span={12} style={{ textAlign: 'center' }}>
                    <h2>Thông tin tài khoản</h2>
                    <Form
                        name="normal_profile"
                        form={form}
                        layout="vertical"
                        onFinish={handleOnFinish}
                    >
                        <Row gutter={[16, 0]}>
                            <ProfilePersonItem
                                onChange={handleProfile}
                                value={profile}
                                rangeTimes={rangeTimes}
                                onChangeStartTime={handleOnChangeStartTime}
                                onChangeEndTime={handleOnChangeEndTime}
                            />
                            <AddressItem
                                onChange={handleProfile}
                                value={profile}
                                apiProvince={apiProvince}
                                onChangeProvince={handleChangeProvince}
                                onChangeDistrict={handleChangeDistrict}
                            />
                        </Row>
                        <Row gutter={[16, 0]} style={{ marginTop: 20 }}>
                            <Col span={8}>
                                <Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        size="large"
                                        style={{
                                            borderRadius: 6,
                                            width: '100%',
                                        }}
                                    >
                                        Xác nhận đăng ký
                                    </Button>
                                </Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default RegisterOwner
