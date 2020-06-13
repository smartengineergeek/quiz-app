import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import jQuery from 'jquery'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import fetchService from '../services/fetchService'
import Options from '../components/Quiz/Options'
import Button from '../components/Button'
import * as Result from '../components/Result'
import './style.css';
import getShuffledArr from '../commonFunctions/shuffle';
import { Validate } from '../utils';

function Quiz(props) {
  const [questionNum, setQuestionNum] = useState(0);
  const [responseData, setResponseData] = useState([]);
  const [options, setOptions] = useState([]);
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
      let responseDataArr = [];
      async function fetchData(){
        let searchParams = new URLSearchParams(props.location.search);  
        let id = searchParams.get('id');      
        let data = await fetchService(id);
        responseDataArr = data.data.results;
        setResponseData(responseDataArr)
        getOptions(responseDataArr);
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
    jQuery('.options').addClass('no-click');
  } 

  function nextBtnClickHandler(){
    jQuery('#id1, #id2, #id0').find('.symbol').removeClass('success failure');
    jQuery('#id1, #id2, #id0').find('.option-text').removeClass('success failure');
    jQuery('#id3').find('.symbol').removeClass('success failure');
    jQuery('#id3').find('.option-text').removeClass('success failure');
    jQuery('.options').removeClass('no-click');

    //jQuery('.options').removeClass('no-click');
    if(questionNum === 9){
      localStorage.setItem("totalScore", score);
      props.history.push("/total-score");
    }else {
      setQuestionNum(questionNum+1);
      setResult('');
      getOptions(responseData);
    }
  }
  
  function getOptions(responseData){
    let optionsArr = [];
    if(Validate(responseData)){
        optionsArr.push({"id":"id3", "isCorrect": true, "value": responseData[questionNum].correct_answer});
      responseData[questionNum].incorrect_answers.forEach((datum, index) => {
        optionsArr.push({ "id": "id"+index, "isCorrect": false, "value": datum });
      })
      optionsArr = getShuffledArr(optionsArr);
      setOptions(optionsArr);
    }        
  }

  return (
    <div className="quiz-app">
       { (Validate(responseData)) ?  
      <div className="main-box">
        <div className="question-container">
          <div className="ques-score-board">
            <ul>
              <li>Attempted: {questionNum}</li>
              <li>Unattempted: {10-questionNum}</li>
              <li>Score: {score}</li>
            </ul>
          </div>
          <div className="ques-num">Question {questionNum+1} / {responseData.length}</div>
          <div className="ques-text">
            {parse(responseData[questionNum].question)}            
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
    :      
    <div className="quiz-loader">
    <Loader
     type="Puff"
     color="#00BFFF"
     height={100}
     width={100}
  />
  </div>  
    }
    </div>
  );
}

export default Quiz;

