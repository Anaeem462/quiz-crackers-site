import React from 'react';

const Blog = () => {
    return (
        <div className=' p-4 '>
            <div className='border border-green-300 p-4 m-5 rounded-md'>
                <h2 className='text-2xl'>1. What is purpose of React Router?</h2>
                <p className=''> => React Router is a Library for  React. React Router is a state container for the current location , or URL. It keeps track of the location and renders different route s as it changes, and it also gives you tools to update the location using Link s and the history API.</p>
            </div>
            <div className='border border-green-300 p-4 m-5 rounded-md'>
                <h2 className='text-2xl'>2.How Does Context Api Work?</h2>
                <p>=> React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='border border-green-300 p-4 m-5 rounded-md'>
                <h2 className='text-2xl'>3.What is UseRef()?</h2>
                <p>=>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly..</p>
            </div>
        </div>
    );
};

export default Blog;