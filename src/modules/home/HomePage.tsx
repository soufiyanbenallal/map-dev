import React,{ useState, ReactElement } from 'react'
import reactLogo from '@/assets/react.svg'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Logos from '@/components/Logos'
import Newsletter from '@/components/Newsletter'
import Divider from '@/components/Divider'
import GithubProjectSection from './components/GithubProjectSection'
import HeaderSection from './components/HeaderSection'
import ProjectsShowCaseSection from './components/ProjectsShowCaseSection'
import FlowSection from './components/FlowSection'
import PageLayout from '@/layouts/PageLayout'

export default function HomePage(): ReactElement {
  return (
    <PageLayout>
      <HeaderSection />
      <ProjectsShowCaseSection />
      <Divider />
      <FlowSection />
      <Divider />
      <Logos />
      <Divider />
      <GithubProjectSection />
      <Divider />
      {/* <HeroSection /> */}
      {/* <Contact /> */}
      <Newsletter />
      <Divider />
    </PageLayout>
  )
}

