import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'

import fetchService from '../services/fetchService'
import Options from '../components/Quiz/Options'

function Quiz(props) {
  const [questionNum, setQuestionNum] = useState(0);
  const [responseData, setResponseData] = useState(null);
  const [result, setResult] = useState('');
  let searchParams = new URLSearchParams(props.location.search);  
  let id = searchParams.get('id');
  useEffect(() => {
      async function fetchData(){
        let data = await fetchService(id);
        setResponseData(data)
      }
      fetchData();
  }, []);
  function clickHandler(option){
    if(option === responseData.data.results[questionNum].correct_answer)  setResult(true);
    else setResult(false);
    if(questionNum === 11)  window.location.href='/';
    else setQuestionNum(questionNum+1);
  }
  return (
    <div className="quiz-app">
    { responseData === null ? <div>No data found</div>: 
        <>
        <div>
        Q.{responseData.data.results[questionNum].question}
        </div>
        <div>
        <Options 
            options={[responseData.data.results[questionNum].correct_answer, ...responseData.data.results[questionNum].incorrect_answers]} 
            clickHandler={clickHandler}    
            result={result}
        />                
        </div>
        </>
    }
    </div>
  );
}

export default Quiz;