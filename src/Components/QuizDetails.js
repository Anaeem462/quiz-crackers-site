import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { QuizContext, QuizesContext } from './Main';
import Questions from './Questions';

const QuizDetails = () => {
    const {question}=useLoaderData()
    
    return (
        <section className='grid grid-cols-5'>
            <div className='grid col-span-4 lg:grid-cols-2 grid-cols-1 '>
            {
                question.map(arrquestion => <Questions
                    key={arrquestion.id}
                    arrquestion={arrquestion}
                ></Questions>)
            }
        </div>
            <div className=' m-2'>

            </div>
        </section>

    );
};

export default QuizDetails;