import React, { useContext } from 'react';
import Quiz from './Quiz';



const Home = () => {


    return (
       <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
      <div className='flex flex-col items-center justify-between lg:flex-row'>
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-yellow-400'>
               Quizes!
              </p>
            </div>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
             Quizes should do our Brain Memory  Are Strongs{' '}
              <span className='inline-block text-blue-400'>before dies</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              It's not that i'm so Smart, it's just that i stay with problems longer. --- Albert Einstein
            </p>
          </div>
          </div>
        
        </div>
        
         <Quiz></Quiz>
     
        
    </div>
    );
};

export default Home;