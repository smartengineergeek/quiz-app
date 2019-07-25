import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import parse from 'html-react-parser';

import fetchService from '../services/fetchService'
import Options from '../components/Quiz/Options'
import Button from '../components/Button'
import * as Result from '../components/Result'

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
    console.log(option)
    if(option === responseData.data.results[questionNum].correct_answer)  {
      setResult(true);
      setScore(score+1);
    }
    else setResult(false);
  }
  function nextBtnClickHandler(){
    if(questionNum === 11)  window.location.href='/';
    else setQuestionNum(questionNum+1);
  }
  return (
    <div className="quiz-app">
    { responseData === null ? <div>No data found</div>: 
        <>
        <div>
        Q.{parse(responseData.data.results[questionNum].question)}
        </div>
        <div>
        <Options 
            options={[responseData.data.results[questionNum].correct_answer, ...responseData.data.results[questionNum].incorrect_answers]} 
            clickHandler={clickHandler}    
            result={result}
        />
        {result ? <Result.Success score={score} />: <Result.Failure score={score} />}
        <Button clicked={nextBtnClickHandler} />                
        </div>
        </>
    }
    </div>
  );
}

export default Quiz;