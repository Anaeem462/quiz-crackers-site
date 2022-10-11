import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { QuizesContext } from './Main';
import Questions from './Questions';

const QuizDetails = () => {
    const quizData = useLoaderData()
    const { data } = quizData
    const {questions}=data
    
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1'>
            {
                questions.map(arrquestion => <Questions
                    key={arrquestion.id}
                    arrquestion={arrquestion}
                ></Questions>)
            }
        </div>
    );
};

export default QuizDetails;