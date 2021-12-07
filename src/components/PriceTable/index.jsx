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

function PriceTable({ ...props }) {
    return <DataTable columns={columns} {...props} />
}

export default PriceTable
