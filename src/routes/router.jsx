import { createBrowserRouter } from 'react-router-dom';

import Home from '../views/Home'
import Register from '../views/Register'
import Login from '../views/Login';

export default createBrowserRouter([
   {
    path: '/',
    element: <Home />,

   } ,

   {
    path: '/register',
    element: <Register />,
   },

   {
      path: '/login',
      element: <Login />,
   }
])