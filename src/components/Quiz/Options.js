import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const Option = props => (
    <Container onClick={() => props.clickHandler(props.option)} >
        <input type="checkbox" />
        <div>{props.option}</div>
    </Container>
)

const Options = props => {
    console.log(props)
    return(
        <Container>
            {props.options.map((option, index) => <Option option={option} clickHandler={props.clickHandler} />)}
        </Container>
    )
}

export default Options;


