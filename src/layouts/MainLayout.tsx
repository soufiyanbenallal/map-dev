import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="App">
      <div
        className="opacity-10 blur-3xl fixed w-full h-full z-[-1] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(https://www.nicepng.com/png/full/51-512313_abstract-colors-png-file-abstract-colorful-dots-background.png)`,
        }}
      ></div>
      <Header />
      {/* {children} */}
      <Outlet />
      <Footer />
    </div>
  )
}
