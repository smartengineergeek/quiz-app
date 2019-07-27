import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import jQuery from 'jquery'

import fetchService from '../services/fetchService'
import Options from '../components/Quiz/Options'
import Button from '../components/Button'
import * as Result from '../components/Result'
import './style.css';
import getShuffledArr from '../commonFunctions/shuffle';

function Quiz(props) {
  const [questionNum, setQuestionNum] = useState(0);
  const [responseData, setResponseData] = useState(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  useEffect(() => {
      async function fetchData(){
        let searchParams = new URLSearchParams(props.location.search);  
        let id = searchParams.get('id');      
        let data = await fetchService(id);
        setResponseData(data)
      }
      fetchData();
  }, []);
  function clickHandler(isCorrect){
    if(isCorrect)  {
      setResult(true);
      setScore(score+1);
    }
    else setResult(false);
    jQuery('#id1, #id2, #id0').find('.symbol').addClass('failure');
    jQuery('#id3').find('.symbol').addClass('success');
    jQuery('#id1, #id2, #id0').find('.option-text').addClass('failure');
    jQuery('#id3').find('.option-text').addClass('success');
    //jQuery('.options').addClass('no-click');
  } 
  function nextBtnClickHandler(){
    //jQuery('.options').removeClass('no-click');
    if(questionNum === 11)  window.location.href='/';
    else {
      setQuestionNum(questionNum+1);
      setResult('');
    }
  }
  let options = [];
  if(responseData !== null){
    debugger;
    console.log(responseData.data.results.length)
    options.push({"id":"id3", "isCorrect": true, "value": responseData.data.results[questionNum].correct_answer});
    responseData.data.results[questionNum].incorrect_answers.forEach((datum, index) => {
      let option = { "id": "id"+index, "isCorrect": false, "value": datum}
      options.push(option);
    })
    options = getShuffledArr(options)
    console.log(options)
  }  
  return (
    <div className="quiz-app">
       { responseData === null ? <div>No data found</div>: 
      <div className="main-box">
        <div className="question-container">
          <div className="ques-num">Question {questionNum+1} / {responseData.data.results.length}</div>
          <div className="ques-text">
            {parse(responseData.data.results[questionNum].question)}            
          </div>
        </div>  
        <Options 
          options={options} 
          clickHandler={clickHandler}    
          result={result}
        />
        <div className="result-next-div">
          {result !== '' ? 
          result ? <>
          <Result.Success score={score} />
          <Button clicked={nextBtnClickHandler} />
          </>
          : 
          <>
            <Result.Failure score={score} />
            <Button clicked={nextBtnClickHandler} />
          </>
          : null}                                    
        </div>
      </div>
      }
    </div>
  );
}

export default Quiz;

