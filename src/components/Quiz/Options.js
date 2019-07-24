import React from 'react'
// import styled from 'styled-components'

const Option = props => (
    <div onClick={() => props.clickHandler(props.option)}>
        <input type="checkbox" />
        <div>{props.option}</div>
    </div>
)

const Options = props => (
    <div>
        {
            props.options.map((option, index) => <Option option={option} clickHandler={props.clickHandler} />)
        }
    </div>
)

export default Options;