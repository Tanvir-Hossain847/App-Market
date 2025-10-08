import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../pages/Root/Root';
import Error from '../pages/Error/Error';
import App from '../pages/app/App';
import Installed from '../pages/installations/Installed';
import Home from '../pages/Home/Home';
import AppDetails from '../pages/appDetails/AppDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[{
        path: '*',
        Component: Error
    },
    {
      path:'/',
      Component:Home,
    },
       {
    path: '/app',
    Component: App,
  },
  {
    path: '/installed',
    Component: Installed,
  },
  {
    path: '/appDetails/:id',
    Component: AppDetails,
  }
]
  },
]);