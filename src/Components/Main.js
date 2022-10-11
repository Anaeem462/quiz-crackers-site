import React, { createContext, useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';

export const QuizContext = createContext([])
export const QuizesContext = createContext([])
const Main = () => {
    const { dataQuizes } = useLoaderData()
    const dataQuiz = useLoaderData()
    // console.log(data);
    return (
        <div>
            <QuizesContext.Provider value={dataQuiz}>
            <QuizContext.Provider value={dataQuizes}>
            <Navbar></Navbar>
            <Outlet></Outlet>

                </QuizContext.Provider>
                </QuizesContext.Provider>
            
        </div>
    );
};

export default Main;