import React from 'react'
import { withRouter } from 'react-router-dom'

import fetchService from '../services/fetchService'
import Options from '../components/Quiz/Options'

function Quiz(props){
    let searchParams = new URLSearchParams(props.location.search);
    let responseData = fetchService(searchParams.id);
    const [questionNum, setQuestionNum] = React.useState(0);
    function clickHandler(option){
        if(option === responseData.results[questionNum].correct_answer){
            setQuestionNum = questionNum++;
            if(questionNum === 11){
                window.location.href='/';
            }    
        }
    }
    return(
        <>
            <div>
            Q.{responseData.results[questionNum].question}
            </div>
            <div>
                <Options 
                    options={[responseData.results[questionNum].correct_answer, responseData.results[questionNum].incorrect_answer]} 
                    clickHandler={clickHandler}    
                />                
            </div>
        </>
    )
}

export default withRouter(Quiz);