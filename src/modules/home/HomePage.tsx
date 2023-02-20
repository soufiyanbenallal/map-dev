import React,{ useState, ReactElement } from 'react'
import reactLogo from '@/assets/react.svg'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Logos from '@/components/Logos'
import Newsletter from '@/components/Newsletter'
import OurTeam from '@/components/OurTeam'
import GithubProjectSection from './components/GithubProjectSection'
import HeaderSection from './components/HeaderSection'
import ProjectsShowCaseSection from './components/ProjectsShowCaseSection'

export default function HomePage(): ReactElement {
  return (
    <>
      <HeaderSection />
      <ProjectsShowCaseSection />
      {/* <Logos /> */}
      <GithubProjectSection />
      <HeroSection />
      <OurTeam />
      <Contact />
      <Newsletter />
    </>
  )
}

