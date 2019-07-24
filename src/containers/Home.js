import React, { useState } from 'react';
import styled from 'styled-components'

import Category from '../components/Category'
import data from '../data/Category';
import NavigationBar from '../components/NavigationBar'

const Container = styled.div`
    background-color: lightgray;
    height: 300px;
    width: 30%;
    margin: 10%;
`

export default function Home(props){
    return(
        <>
            <NavigationBar />
            <Container>
                {/* <h3>Welcome to Quiz App</h3> */}
                <Category category={data} />
            </Container>
        </>
    )
}

