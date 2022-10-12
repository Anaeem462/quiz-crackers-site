import React from 'react';

const Options = ({option,answerHandler}) => {
    return (
        <div>
            <div className='border border-green-400 rounded-lg p-5 flex items-center hover:bg-yellow-500 hover:text-white' onClick={() => answerHandler(option)}>
                <input className='h-5 w-5 rounded-full border border-blue-400 m-2' type="radio" value={option} name="Correct" />
                {option}
            </div>
            
        </div>
    );
};

export default Options;