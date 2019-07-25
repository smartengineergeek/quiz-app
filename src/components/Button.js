import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
    background-color: blue;
    color: #fff;
    height: 50px;
    width: 100px;
    border-radius: 10px;
    &:hover{
        background-color: #fff;
        color: blue;    
    }
` 

const Button = props => (
    <Container onClick={props.clicked}>
        Next
    </Container>
)

export default Button;