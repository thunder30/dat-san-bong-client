import React from 'react'
import { Spin } from 'antd'
import styled from 'styled-components'

const WrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

function Spinner() {
    return (
        <WrapperStyled>
            {' '}
            <Spin size="large" tip="Loading..." />{' '}
        </WrapperStyled>
    )
}

export default Spinner
