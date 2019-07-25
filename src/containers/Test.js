import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'

import fetchService from '../services/fetchService'
import Options from '../components/Quiz/Options'

function Quiz(props) {
  const [questionNum, setQuestionNum] = useState(0);
  const [responseData, setResponseData] = useState(null);
  let searchParams = new URLSearchParams(props.location.search);  
  let id = searchParams.get('id');
  useEffect(() => {
      async function fetchData(){
        let data = await fetchService(id);
        setResponseData(data)
      }
      fetchData();
  }, [responseData]);
  if(responseData !== null) console.log(responseData.data.results)
  return (
    <div className="test-test">
    { responseData === null ? <div>No data found</div>: responseData.data.results.map((datum, index) => (<div>{datum.category}</div>))}
    </div>
  );
}

export default Quiz;