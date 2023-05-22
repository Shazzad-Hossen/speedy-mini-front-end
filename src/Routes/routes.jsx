import Main from "../Layout/Main";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddToy from "../pages/AddToy";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/AllToys";
import { getAllToy, getItem, getToysbycat } from "../utilities/apiCaller";
import Details from "../pages/Details";
import Mytoys from "../pages/Mytoys";
import Update from "../pages/Update";
import Errorpage from "../pages/Errorpage";
import Blogs from "../pages/Blogs";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>,
          loader: async()=>{ return getToysbycat('sportsCar')}
        },
        {
          path: '/signin',
          element: <SignIn/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
        {
          path: '/addtoy',
          element: <PrivateRoute><AddToy/></PrivateRoute>
        },
        {
          path: '/blogs',
          element: <Blogs/>
        },
        {
          path: '/alltoys',
          element: <AllToys/>,
          loader: async()=>{return getAllToy()}
        },
        {
          path: '/mytoys',
          element: <PrivateRoute><Mytoys/></PrivateRoute>
    
        },
        {
          path: '/details/:id',
          element: <PrivateRoute><Details/></PrivateRoute>,
          loader: async({params})=>{return getItem(params.id)}
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update/></PrivateRoute>,
          loader: async({params})=>{return getItem(params.id)}
        }
      ]
    },
    {
      path:'*',
      element: <Errorpage/>
    }
  ]);
  