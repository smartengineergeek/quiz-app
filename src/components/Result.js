import React from 'react'
import styled from 'styled-components'

const Pass = styled.div`
    background-color: green;
    color: #fff;
    height: 30px;
    width: 500px;
    border: solid 1px #fff;
    border-radius: 10px;
    margin-top: 20px;
    text-align: center;
    padding-top: 10px;
` 
const Fail = styled.div`
    background-color: indianred;
    color: #fff;
    height: 30px;
    width: 500px;
    border: solid 1px #fff;
    border-radius: 10px;
    margin-top: 20px;
    text-align: center;
    padding-top: 10px;
` 
const Success = props => <Pass>Answer is correct, your score is {props.score}</Pass>

const Failure = props => <Fail>Sorry, Answer is incorrect, your score is {props.score}</Fail>

export { Success, Failure };