import React from 'react'

import './style.css';

const uuidv4 = require('uuid/v4');

const symbols = ["A", "B", "C", "D"];

const Option = props => (
    <div className="option flex-wrap" onClick={() => props.clickHandler(props.option)} >
        <div className="symbol">{symbols[props.index]}</div>
        <div>{props.option}</div>
    </div>
)

const Options = props => {
    return(
        <div className="flex-row options">
            {props.options.map((option, index) => {
                let uniqueNumber = uuidv4();             
                return( <Option key={uniqueNumber} index={index} option={option} clickHandler={props.clickHandler} />)
            })
            }
        </div>
    )
}

export default Options;


