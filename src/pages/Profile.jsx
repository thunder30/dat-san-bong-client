import React, { useContext, useState } from 'react'
import { Row, Col, Form, Input, Button, Select } from 'antd'
import ProfileLayout from '../layout/ProfileLayout'
import { AuthContext } from '../contexts/AuthProvider'

const { Item } = Form
const { Option } = Select

// const calendar = [
//     [
//         {
//             startTime: "",
//             endTime: ""
//         },
//         {
//             //...
//         }
//     ],
//     [

//     ]
// ]

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
    value: { email, phone, firstName, lastName },
}) => (
    <>
        <Col span={12}>
            <Item label="Email" name="email" rules={[validateField]}>
                <Input
                    name="email"
                    size="large"
                    value={email}
                    onChange={onChange}
                    disabled
                />
            </Item>
        </Col>
        <Col span={12}>
            <Item label="Số điện thoại" name="phone" rules={[validateField]}>
                <Input
                    name="phone"
                    size="large"
                    value={phone}
                    onChange={onChange}
                />
            </Item>
        </Col>
        <Col span={12}>
            <Item label="Họ" name="firstName" rules={[validateField]}>
                <Input
                    name="firstName"
                    size="large"
                    value={firstName}
                    onChange={onChange}
                />
            </Item>
        </Col>
        <Col span={12}>
            <Item label="Tên" name="lastName" rules={[validateField]}>
                <Input
                    name="lastName"
                    size="large"
                    value={lastName}
                    onChange={onChange}
                />
            </Item>
        </Col>
    </>
)

const AddressItem = ({
    onChange,
    onChangeProvince,
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
        <Col span={8}>
            <Item label="Quận/Huyện" name="district">
                <Select value={district} size="large">
                    {districts.map(({ name, code }) => (
                        <Option value={name} key={code}>
                            {name}
                        </Option>
                    ))}
                </Select>
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
    </>
)

const provinces = [
    {
        code: '1',
        name: 'TP. Hà Nội',
        districts: [
            {
                code: 1,
                name: 'Quận Ba Đình',
            },
        ],
    },
    {
        code: '2',
        name: 'TP. HCM',
        districts: [
            {
                code: 1,
                name: 'Quận Gò Vấp',
            },
        ],
    },
]

function Profile() {
    const {
        authState: {
            user: {
                email,
                firstName,
                lastName,
                phone,
                address,
                ward,
                district,
                province,
            },
        },
    } = useContext(AuthContext)
    const [form] = Form.useForm()
    const [profile, setProfile] = useState({
        email,
        firstName,
        lastName,
        phone,
        address,
        ward,
        district,
        province,
    })

    const [apiProvince, setApiProvince] = useState({
        provinces,
        districts: [],
        wards: [],
    })

    console.log(apiProvince)
    console.log(profile)

    const handleChangeProvince = (value, { key }) => {
        const districts = provinces.find(({ code }) => code === key).districts
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

    const handleProfile = (e) => {
        e.preventDefault()
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        })
    }

    const handleOnFinish = (value) => {
        console.log(value)
        // send form
    }

    return (
        <ProfileLayout>
            <Row justify="center" style={contentStyle}>
                <Col span={18} style={{ textAlign: 'center' }}>
                    <h2>Thông tin tài khoản</h2>
                    <Form
                        name="normal_profile"
                        form={form}
                        layout="vertical"
                        initialValues={profile}
                        onFinish={handleOnFinish}
                    >
                        <Row gutter={[16, 0]}>
                            <ProfilePersonItem
                                onChange={handleProfile}
                                value={profile}
                            />
                            <AddressItem
                                onChange={handleProfile}
                                value={profile}
                                apiProvince={apiProvince}
                                onChangeProvince={handleChangeProvince}
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
                                        Cập nhật
                                    </Button>
                                </Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </ProfileLayout>
    )
}

export default Profile
