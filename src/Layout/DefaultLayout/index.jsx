import React from 'react'
import { Layout } from 'antd'
import HeaderContent from '../../components/HeaderContent'
import FooterContent from '../../components/FooterContent'

const { Content } = Layout

function DefaultLayout({ children }) {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <HeaderContent />
            <Content
                style={{
                    width: '100%',
                    margin: 0,
                    padding: 0,
                }}
            >
                {children}
            </Content>
            <FooterContent />
        </Layout>
    )
}

export default DefaultLayout
