import React from 'react'

import './style.css';

const symbols = ["A", "B", "C", "D"];

const Option = props => (
    <div className="option" id={props.option.id} 
        onClick={() => props.clickHandler(props.option.isCorrect)} >
        <div className="symbol">{symbols[props.index]}</div>
        <div className="option-text">{props.option.value}</div>
    </div>
)

const Options = props => (
    <div className="options">
        {props.options.map((option, index) => (
            <Option key={option.id} index={index} option={option} clickHandler={props.clickHandler} />
            ))
        }
    </div>
)
export default Options;


