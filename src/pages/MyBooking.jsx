import React, { useContext, useEffect } from 'react'
import { Row, Col, Table, Spin } from 'antd'
import ProfileLayout from '../layout/ProfileLayout'
import { AuthContext } from '../contexts/AuthProvider'
import { BookingContext } from '../contexts/BookingProvider'

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
    const {
        authState: { user, isLoading },
    } = useContext(AuthContext)
    const {
        bookingState: { bookings, isLoading: isLoadingBooking },
        getHistoryBooking,
    } = useContext(BookingContext)

    console.log(`history booking: `, bookings)

    useEffect(() => {
        getHistoryBooking(user._id)
    }, [])

    if (isLoading) return <Spin />

    return (
        <ProfileLayout>
            <Row style={contentStyle}>
                <Col span={24} style={{ textAlign: 'center' }}>
                    <h3>Lịch sử đặt sân</h3>
                    <Table
                        columns={columns}
                        dataSource={bookings}
                        pagination={pagination}
                        loading={isLoadingBooking}
                    />
                </Col>
            </Row>
        </ProfileLayout>
    )
}

export default MyBooking
