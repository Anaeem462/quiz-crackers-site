import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Options from './Options';
import { BeakerIcon,EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({arrquestion}) => {
    const { id, question, correctAnswer, options } = arrquestion
    const [click, setClick]= useState(false)
   
    const answerHandler = (option) => {
        if (option === correctAnswer) {
           toast('Nice! You are Right')
        } else {
            <div className='flex justify-center border border-gray-800'>
                {
                    toast('Ooh!You are wrong')
                }
            </div>
        }
    }
    
    const correctHandler = () => {
            setClick(!click)
    }
    

    return (
        <div className='border border-blue-500 p-5 m-5 rounded-md'>
            <div className='flex justify-between'>
                <p className='text-xl text-center'>
                <span className='text-red-600'>
                    Questions:
                </span>
                <span className='text-blue-400'>{question}</span>
              
                </p>
            
                <button className='m-2 ' >
                    <EyeIcon onClick={correctHandler} className="h-6 w-6 text-blue-500"></EyeIcon>
                </button>
            </div>
            <div>
                <div className={`${click?'hidden':'grid md:grid-cols-2 grid-cols-1 gap-5 mt-4'}`}>
                    {
                    options.map(option => <Options
                        key={option}
                        option={option}
                        answerHandler={answerHandler}
                        
                    ></Options>)
                }
                 </div>
                <div className={`${click ? 'border border-green-400 rounded-lg p-5 flex items-center mt-10' : 'hidden'} `} >

                    <input className='h-5 w-5 rounded-full border border-blue-400 m-2'  type="radio" value={correctAnswer } name="Correct" />
                    { correctAnswer}
                </div>
            </div>

            
        </div>
    );
};

export default Questions;