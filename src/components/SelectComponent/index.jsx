import React from 'react'
import { Select } from 'antd'

const { Option } = Select

function SelectComponent({ title, options, style, ...props }) {
    console.log(`call select component`)

    return (
        <>
            <div
                style={{
                    display: 'inline-block',
                    fontWeight: 'bold',
                    width: 90,
                }}
            >
                {title}
            </div>
            <Select
                defaultValue=""
                style={{ width: 'auto', minWidth: 120, ...style }}
                {...props}
            >
                {options.map(({ _id, displayName }, index) => (
                    <Option value={displayName} key={_id || index}>
                        {displayName}
                    </Option>
                ))}
            </Select>
        </>
    )
}

export default SelectComponent
