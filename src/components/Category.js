import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.div`
    text-align: center;
`
const Box = styled.div`
    background-color: #fff;
    color: #000;
    height: 50px;
    width: inherit;
    margin: 20px;
    border-radius: 15px;
    &:hover{
        background-color: #322f31;
        color: #fff;    
    }
`

const Heading = styled.h2`
    color: navy;
`

export default function Category(props){
    return(
        <Container>
            <Heading>Select One Category</Heading>
            {
            props.category.map((datum, index) => 
            <NavLink to={"/quiz?id="+datum.id}>
                <Box key={index}>
                    {datum.name}
                </Box>
            </NavLink>
            )}            
        </Container>
    )
}