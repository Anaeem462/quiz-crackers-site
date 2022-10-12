import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { QuizContext, QuizesContext } from './Main';
import Navbar from './Navbar';
import Questions from './Questions';

const QuizDetails = () => {
    const { quize } = useLoaderData()
    const question = quize.data.questions;
    const [right, setRight] = useState(0)
    const [wrong,setWrong] = useState(0)
    
    return (<>
           
        <section className='grid grid-cols-5 '>
            <div className='grid col-span-4 lg:grid-cols-2 grid-cols-1 '>
            {
                question.map(arrquestion => <Questions
                    key={arrquestion.id}
                    arrquestion={arrquestion}
                    right={right}
                    setRight={setRight}
                    wrong={wrong}
                    setWrong={setWrong}
                ></Questions>)
            }
        </div>
            <div className=' m-2 bg-orange-400 rounded-md p-3 text-white sticky top-0'>
                <p className='text-2xl border border-orange-200 rounded-md p-2  sticky top-2'>Right Answer : <span className='text-black'>{right}</span></p>
                <p className='text-2xl border border-orange-200 rounded-md p-2 mt-3 sticky  top-32'>Wrong Answer:  <span className='text-black'>{wrong}</span></p>

            
            </div>
        </section>
    </>

    );
};

export default QuizDetails;