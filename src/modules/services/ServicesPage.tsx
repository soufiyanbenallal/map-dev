import PageLayout from '@/layouts/PageLayout'
import Box from '@components/Box'
import React from 'react'
import BugsServiceSection from './components/BugsServiceSection'
import WebServiceSection from './components/WebServiceSection'

export default function ServicesPage() {
  return (
    <PageLayout className=''>
      <Box as='article' variant='faderight' className='m-container mt-40'>
        <article className='max-w-2xl'>
          <h1 className='text-5xl font-semibold text-gray-800'>Defining categories + helping ambitious orgs move at the speed of culture.</h1>
        </article>
      </Box>
      <WebServiceSection />
      <BugsServiceSection />
    </PageLayout>
  )
}
