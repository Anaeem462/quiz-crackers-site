import React, { useContext } from 'react';
import { QuizesContext } from './Main';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';



const Statistics = () => {
    const quizData = useContext(QuizesContext)
   
    const data = []
    
    for (const id of quizData) {
        const { name, total } = id
        data.push({ name: name, uv: total })
    }
   
    return (
        <div className='flex  justify-center items-center w-full h-screen'>
            <LineChart width={600} height={300} data={data} margin={{ top: 1, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#aaa" strokeDasharray="7 7" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
            {
                
   }
                
        </div>
    );
};

export default Statistics;