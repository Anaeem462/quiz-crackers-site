import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import ErrorPage from './ErrorPage'
import Home from './Home'
import About from './About'
import Books from './Books'
import BookDetails from "./BookDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage> ,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/books',
                element:<Books></Books>,
                loader:()=>fetch('https://api.itbook.store/1.0/new')
            },
            {
                path:'/books/:id',
                loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`),
                element:<BookDetails></BookDetails>
            }
            
            
        ]
    }
])