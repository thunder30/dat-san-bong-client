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
                    padding: '10px',
                    margin: '10px auto',
                    width: '100%',
                    maxWidth: '1100px',
                }}
            >
                {children}
            </Content>
            <FooterContent />
        </Layout>
    )
}

export default DefaultLayout
