import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from '../home/home'
import Shop from "../shop/Shop";
import About from "../components/About";
// import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/shop',
            element:<Shop/>
        },
        {
            path:"/about",
            element:<About/>
        },
        // {
        //     path:'/blog',
        //     element:<Blog/>
        // },
        {
          path:"/book/:id",
          element:<SingleBook/>,
          loader:({params})=>fetch(`https://bookbackend-wvco.onrender.com/book/${params.id}`)
        }
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBook/>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBook/>,
          loader:({params})=>fetch(`https://bookbackend-wvco.onrender.com/book/${params.id}`)
        }
      ]
    },
    {
      path:"sign-up",
      element:<Signup></Signup>
    },
    {
      path:"login",
      element:<Login/>,
        // children:[
        //   {
        //     path:"/shop",
        //     element:<Shop/>
        //   }
           
        // ]
    },
    {
      path:"logout",
      element:<Logout/>
    }
  ]);

  export default router