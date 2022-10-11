import React, { useContext } from 'react';
import { QuizContext, QuizesContext } from './Main';
import Quizes from './Quizes';


const Quiz = () => {
    const quizData = useContext(QuizesContext)
    return (
        <div className='flex justify-center mt-7'>
         <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
          {
          quizData.map(quiz => <Quizes
            quiz={quiz}
            key={quiz.id}
          ></Quizes>)
        }
        </div>
       </div>
    );
};

export default Quiz;