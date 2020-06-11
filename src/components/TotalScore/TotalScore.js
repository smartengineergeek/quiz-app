import React from 'react';
import { NavLink } from 'react-router-dom';

const TotalScore = () => {
    let score = localStorage.getItem("totalScore");
    return(
        <div>
            <h1>Congratulations for participation i quiz</h1>
            <h2>Your total Score is {score}</h2>
            <h4><NavLink to="/">Back to Home page</NavLink></h4>
        </div>
    )
}
export default TotalScore;