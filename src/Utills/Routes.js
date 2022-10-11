import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main";
import Home from '../Components/Home'
import ErrorPage from "../Components/ErrorPage";
import Quiz from '../Components/Quiz'
import Statistics from "../Components/Statistics";
import Blog from '../Components/Blog'
import { loaderData } from "./Loader";
import QuizDetails from "../Components/QuizDetails";
import Quizes from "../Components/Quizes";


export const routers = createBrowserRouter([
    {
        path: '/',
        loader:loaderData,
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/home',
                element:<Home></Home>
            },
            {
                 path: '/quiz',
                 element:<Quiz></Quiz>
            },
            {
                path: '/quiz/:id',
                loader: ({params})=> loaderData(params.id) ,
                element:<QuizDetails></QuizDetails>
            },
            {
                path: '/statistics',
                element:<Statistics></Statistics>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }
        ]
    }
])