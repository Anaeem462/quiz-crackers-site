import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon} from '@heroicons/react/24/solid'

const Quizes = ({ quiz }) => {
    const {id,name,logo}=quiz
    return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                </div>
                <Link to={`/quiz/${id}`} className=''>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                        Go to Quiz
                        <ArrowRightIcon className='h-4 ml-1 text-center'></ArrowRightIcon>
                    </button>
                </Link>
		
	</div>
</div>
    );
};

export default Quizes;