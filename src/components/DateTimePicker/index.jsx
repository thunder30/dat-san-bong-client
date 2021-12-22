import React from 'react'
import { DatePicker } from 'antd'

const { RangePicker } = DatePicker

function DateTimePicker({ onChange }) {
    return (
        <RangePicker
            // value={[startDate, endDate]}
            defaultValue={[null, null]}
            format="DD/MM/YYYY"
            onChange={onChange}
            size="middle"
        />
    )
}

export default DateTimePicker
