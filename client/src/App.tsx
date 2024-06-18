import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";



import About from "./pages/About"
import Home from "./pages/Home"
import SIgnUp from "./pages/SIgnOut"
import SignIn from "./pages/SignIn"
import React from "react";

const router = createBrowserRouter([
  {
    path:'/',
     element:<Home />,
  },
  {
    path:'/sign-in',
     element:<SignIn />
  },
  {
    path:'/sign-up',
     element:<SIgnUp />
  },
  {
    path:'/about',
     element:<About />
  },
  {
   
  },
]);


function App() {

  return ( 
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
   )
}

export default App
