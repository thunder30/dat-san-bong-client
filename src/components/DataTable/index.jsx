import React from 'react'
import { Table } from 'antd'

function DataTable({ title, columns, dataSource, pagination = false }) {
    return (
        <>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={pagination}
            />
        </>
    )
}

export default DataTable
