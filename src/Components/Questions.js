import React from 'react';
import Options from './Options';

const Questions = ({arrquestion}) => {
    const{id,question,correctAnswer,options} = arrquestion
   
    const answerHandler = (option) => {
        if (option === correctAnswer) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
    return (
        <div className='border border-blue-500 p-5 m-5 rounded-md'>
            <p className='text-xl text-center'>
                <span className='text-red-600'>
                    Questions:
                </span>
                <span className='text-blue-400'>{question}</span>
              
            </p>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-4'>
                 {
                    options.map(option => <Options
                        key={option}
                        option={option}
                        answerHandler={answerHandler}
                        
                    ></Options>)
                }
            </div>
            
        </div>
    );
};

export default Questions;