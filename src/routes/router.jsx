import { createBrowserRouter } from 'react-router-dom';

import Home from '../views/Home'
import Register from '../views/Register'
export default createBrowserRouter([
   {
    path: '/',
    element: <Home />,

   } ,

   {
    path: '/register',
    element: <Register />,
   }
])