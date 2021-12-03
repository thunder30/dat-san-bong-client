import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout

function HeaderContent() {
    return (
        <Header
            className="site-layout"
            style={{
                padding: 0,
                background: 'none',
            }}
        >
            Header Content
        </Header>
    )
}

export default HeaderContent
