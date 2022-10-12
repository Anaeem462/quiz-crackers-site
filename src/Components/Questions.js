import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Options from './Options';
import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({quizes,arrquestion,right,setRight,setWrong,wrong}) => {
    const { id, question, correctAnswer, options } = arrquestion

      
    const [click, setClick]= useState(false)
   
    const answerHandler = (option) => {
        if (option === correctAnswer) {
            toast.success('Great! You are Right.', {
position: "top-center",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
})
            setRight(right+1)
        } else {
            <div className='flex justify-center border border-gray-800'>
                {
                    toast.warn('You are wrong!', {
position: "top-center",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
})
                   
                
                }
                {
                   setWrong(wrong+1) 
                }
            </div>
        }
    }
   
    const correctHandler = () => {
            setClick(!click)
    }
    

    return (
        <>
            
        <div className='border border-blue-500 p-5 m-5 rounded-md'>
            
            <div className='flex justify-between'>
                <p className='text-xl text-center'>
                <span className='text-red-600'>
                    Questions:
                </span>
                <span className='text-blue-400'>{question}</span>
              
                </p>
            
                <button className='m-2 ' >
                    <EyeIcon onClick={correctHandler} className="h-6 w-6 text-blue-500 hover:text-yellow-400"></EyeIcon>
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
                <div className={`${click ? 'border border-green-400 rounded-lg p-5 flex items-center mt-10' : 'hidden'} hover:bg-yellow-500 hover:text-white`} >
                    <p>
                        Correct Answer Is:    <span className='text-red-500'>{correctAnswer}</span>
                    </p>
                    
                </div>
            </div>

            
            </div>
            </>
    );
};

export default Questions;