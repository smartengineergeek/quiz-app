import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
    background-color: blueviolet;
    color: #fff;
    height: 40px;
    width: 200px;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
    &:hover{
        background-color: #fff;
        color: blueviolet;    
    }
` 

const Button = props => (
    <Container onClick={props.clicked}>
        Next
    </Container>
)

export default Button;