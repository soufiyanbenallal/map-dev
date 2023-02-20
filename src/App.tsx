import React,{ useState, ReactElement } from 'react'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/modules/home/HomePage'
import TeamPage from '@/modules/team/TeamPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error404Page from '@/modules/errors/404Page';
import { routesEnum } from '@/enums';
import router from './routes';


function App(): ReactElement {
  return (
        <RouterProvider router={router} />
  )
}

export default App
