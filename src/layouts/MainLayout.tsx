import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { ReactNode } from 'react'

export default function MainLayout({children}: {children: ReactNode}) {
  return (
    <div className="App">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
