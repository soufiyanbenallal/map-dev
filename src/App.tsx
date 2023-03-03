import React,{ ReactElement } from 'react'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes';
import { AnimatePresence } from 'framer-motion';


function App(): ReactElement {
  return (
    <AnimatePresence mode="wait">
        <RouterProvider router={router} />
    </AnimatePresence>
  )
}

export default App
