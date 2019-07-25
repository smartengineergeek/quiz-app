import React from 'react'
import styled from 'styled-components'

const Pass = styled.div`
    background-color: green;
    color: #fff;
    height: 50px;
    width: 200px;
    border: solid 1px #fff;
    border-radius: 10px;
` 
const Fail = styled.div`
    background-color: red;
    color: #fff;
    height: 50px;
    width: 200px;
    border: solid 1px #fff;
    border-radius: 10px;
` 
const Success = props => <Pass>Answer is correct, your score is {props.score}</Pass>

const Failure = props => <Fail>Sorry, Answer is incorrect, your score is {props.score}</Fail>

export { Success, Failure };