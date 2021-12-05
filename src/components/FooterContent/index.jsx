import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

function FooterContent() {
    return (
        <Footer
            className="site-layout"
            style={{
                padding: 0,
                background: 'none',
            }}
        >
            Footer Content
        </Footer>
    )
}

export default FooterContent
