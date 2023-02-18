import React,{ useState, ReactElement } from 'react'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/modules/home/HomePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error404Page from '@/modules/errors/404Page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error404Page />,
  },
]);
function App(): ReactElement {
  return (
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
  )
}

export default App
