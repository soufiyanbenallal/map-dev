import React,{ useState, ReactElement } from 'react'
import MainLayout from './layouts/MainLayout'
import HomePage from './modules/home/HomePage'

function App(): ReactElement {
  return (
      <MainLayout>
        <HomePage />
      </MainLayout>
  )
}

export default App
