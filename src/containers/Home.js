import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

import './style.css';
import data from '../data/Category';

const SubContainer = styled.div`
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

export default function Home(props){
    return(
        <div className="main-container">
            <SubContainer>
                <h1>Quiz App</h1>
                <Heading>Select One Category</Heading>
                {
                data.map((datum, index) => 
                <NavLink to={"/quiz?id="+datum.id} key={datum.id}>
                    <Box>
                        {datum.name}
                    </Box>
                </NavLink>
                )}            
           </SubContainer>
        </div>
    )
}

