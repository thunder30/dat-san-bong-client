import React from 'react'
import { Row, Col, Table } from 'antd'
import ProfileLayout from '../layout/ProfileLayout'

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
    },
    {
        title: 'Mã phiếu',
        dataIndex: 'code',
    },
    {
        title: 'Giá',
        dataSource: 'price',
    },
    {
        title: 'Sân',
        dataIndex: 'pitch',
    },
    {
        title: 'Thời gian đặt chỗ',
        dataIndex: 'bookingTime',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
    },
    {
        title: 'Ngày đặt',
        dataIndex: 'bookingDate',
    },
]
const dataSource = []
const pagination = {
    defaultCurrent: 1,
    defaultPageSize: 5,
    total: dataSource.length,
    showSizeChanger: true,
    pageSizeOptions: ['5', '10', '20'],
    showTotal: (total, range) => `${range[0]}-${range[1]} trên ${total} phiếu`,
}

const contentStyle = {
    border: '1px solid #eee',
    borderRadius: '6px',
    padding: 20,
}

function MyBooking() {
    const isLoading = true
    return (
        <ProfileLayout>
            <Row style={contentStyle}>
                <Col span={24} style={{ textAlign: 'center' }}>
                    <h3>Lịch sử đặt sân</h3>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        pagination={pagination}
                        loading={isLoading}
                    />
                </Col>
            </Row>
        </ProfileLayout>
    )
}

export default MyBooking
