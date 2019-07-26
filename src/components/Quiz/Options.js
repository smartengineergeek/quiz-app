import React from 'react'
import styled from 'styled-components'

const uuidv4 = require('uuid/v4');

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const Option = props => (
    <Container onClick={() => props.clickHandler(props.option)} >
        <input type="checkbox"  />
        <div>{props.option}</div>
    </Container>
)

const Options = props => {
    return(
        <Container>
            {props.options.map(option => {
                let uniqueNumber = uuidv4();             
                return( <Option key={uniqueNumber} option={option} clickHandler={props.clickHandler} />)
            })
            }
        </Container>
    )
}

export default Options;


