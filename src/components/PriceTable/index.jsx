import React from 'react'
import DataTable from '../DataTable'
import toCommas from '../../helpers/toCommas'

const columns = [
    {
        title: 'Giờ bắt đầu',
        dataIndex: 'startTime',
        align: 'center',
    },
    {
        title: 'Giờ kết thúc',
        dataIndex: 'endTime',
        align: 'center',
    },
    {
        title: 'Đơn giá',
        dataIndex: 'price',
        align: 'center',
        render: (price) => {
            return <b>{toCommas(price)}</b>
        },
    },
]

function PriceTable({ title }) {
    const dataSource = [
        {
            startTime: '07:00',
            endTime: '16:00',
            price: 200000,
        },
        {
            startTime: '16:00',
            endTime: '22:00',
            price: 300000,
        },
    ]
    return <DataTable title={title} columns={columns} dataSource={dataSource} />
}

export default PriceTable
