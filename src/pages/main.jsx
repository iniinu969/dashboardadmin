import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Header from '../components/Header.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import Reports from '../components/Reports.jsx';
import Articles from '../components/Articles.jsx';
import Users from '../components/Users.jsx';

const Layout =()=>{
  return (
    <div>
      <Outlet/>
    </div>
  );
};


const router = createBrowserRouter([{
  path:'/',
  element:<Layout />,
  children: [
    {
      path:'/',
      element: <App />,
    },
    {
      path:'/reports',
      element: <Reports />,
    },
    {
      path:'/articles',
      element: <Articles />,
    },
    {
      path:'/users',
      element: <Users />,
    },
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
