import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    background-color: lightgray;
    height: 50px;
    width: 90%;
    display: flex;
    flex-direction: row;
`
export default function NavigationBar(props){
    return(
        <Container>
            <span><Link to="/">Home</Link></span>
            <span>Login using Github</span>
        </Container>
    )
}