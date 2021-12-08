import React, { useContext, useEffect } from 'react'
import { Row, Col, Table, Spin } from 'antd'
import ProfileLayout from '../layout/ProfileLayout'
import { AuthContext } from '../contexts/AuthProvider'
import { BookingContext } from '../contexts/BookingProvider'

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
    },
    {
        title: 'Mã phiếu',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Giá',
        dataSource: 'price',
        key: 'price',
    },
    {
        title: 'Sân',
        dataIndex: 'pitch',
        key: 'pitch',
    },
    {
        title: 'Thời gian đặt chỗ',
        dataIndex: 'bookingTime',
        key: 'bookingTime',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Ngày đặt',
        dataIndex: 'bookingDate',
        key: 'bookingDate',
    },
]


const data = [
    {
        key: '1',
        code: '1',
        price: '1',
        pitch: '1',
        bookingTime: '1',
        status: '1',
        bookingDate: '1',
    },
    {
        key: '2',
        code: '2',
        price: '1',
        pitch: '1',
        bookingTime: '1',
        status: '1',
        bookingDate: '1',
    },
    
]

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

    const dataSource = bookings.map(({bookingDetails}, index) => {
        return bookingDetails.map(({pitch, booking, price, status,createdAt}, index) => {
            return {
                key: index,
                stt: index + 1,
                code: '',
                price,
                pitch: pitch.displayName,
                bookingTime: '',
                status: status.description,
                bookingDate: createdAt,
            }
        })

    })
    console.log(`dataSource: `, dataSource)

    const pagination = {
        defaultCurrent: 1,
        defaultPageSize: 5,
        total: dataSource.length,
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '20'],
        showTotal: (total, range) => `${range[0]}-${range[1]} trên ${total} phiếu`,
    }

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
                        dataSource={dataSource}
                        pagination={pagination}
                        loading={isLoadingBooking}
                    />
                </Col>
            </Row>
        </ProfileLayout>
    )
}

export default MyBooking
