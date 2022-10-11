import { createBrowserRouter } from "react-router-dom";
import Main from '../components/Main'
import ErrorPage from '../components/ErrorPage'
import Home from "../components/Home";
import About from '../components/About'
import Shop from '../components/Shop'
import Cart from '../components/Cart'
import { loaderData } from "./Loaders";


export const router = createBrowserRouter([
    {
      path:'/',
      loader:loaderData,
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
            path:'/shop',
            element:<Shop></Shop>
        },
        {
            path:'/cart',
            element:<Cart></Cart>
        },
        {
            path:'/about',
            element:<About></About>
        },
    ]
    }
  ])