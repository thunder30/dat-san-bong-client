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
                    padding: 0,
                    backgroundColor: '#fafafa',
                }}
            >
                {children}
            </Content>
            <FooterContent />
        </Layout>
    )
}

export default DefaultLayout
