import React, { createContext, useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';

export const QuizContext = createContext([])
export const QuizesContext = createContext([])
const Main = () => {
    const { dataQuizes} = useLoaderData()
      
    return (
        <div>
            
            <QuizesContext.Provider value={dataQuizes}>
            <Navbar></Navbar>
            <Outlet></Outlet>

                </QuizesContext.Provider>
              
            
        </div>
    );
};

export default Main;