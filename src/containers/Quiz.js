import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';

import fetchService from '../services/fetchService'
import Options from '../components/Quiz/Options'
import Button from '../components/Button'
import * as Result from '../components/Result'
import './style.css';

function Quiz(props) {
  const [questionNum, setQuestionNum] = useState(0);
  const [responseData, setResponseData] = useState(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);

  // let searchParams = new URLSearchParams(props.location.search);  
  // let id = searchParams.get('id');
  useEffect(() => {
      async function fetchData(){
        let data = await fetchService(9);
        setResponseData(data)
      }
      fetchData();
  }, []);
  function clickHandler(option){
    if(option === responseData.data.results[questionNum].correct_answer)  {
      setResult(true);
      setScore(score+1);
    }
    else setResult(false);
  }
  function nextBtnClickHandler(){
    if(questionNum === 11)  window.location.href='/';
    else {
      setQuestionNum(questionNum+1);
      setResult('');
    }
  }
  let options = [];
  if(responseData !== null){
    options.push(responseData.data.results[questionNum].correct_answer);
    responseData.data.results[questionNum].incorrect_answers.forEach(datum => {
      options.push(datum);
    })
  }  
    console.log(options)
  return (
    <div className="quiz-app">
       { responseData === null ? <div>No data found</div>: 
      <div className="main-box">
        <div className="question-container">
          <div className="ques-num">Question {result/responseData.data.results.length}</div>
            {parse(responseData.data.results[questionNum].question)}            
        </div>  
        <Options 
          options={options} 
          clickHandler={clickHandler}    
          result={result}
        />
        {result !== '' ? result ? <Result.Success score={score} />: <Result.Failure score={score} />: null}
        <Button clicked={nextBtnClickHandler} />                          
      </div>
      }
    </div>
  );
}

export default Quiz;

    /* { responseData === null ? <div>No data found</div>: 
        <>
        <div>
        Q.{parse(responseData.data.results[questionNum].question)}
        </div>
        <div>
        <Options 
            options={options} 
            clickHandler={clickHandler}    
            result={result}
        />
        {result !== '' ? result ? <Result.Success score={score} />: <Result.Failure score={score} />: null}
        <Button clicked={nextBtnClickHandler} />                
        </div>
        </>
    } */