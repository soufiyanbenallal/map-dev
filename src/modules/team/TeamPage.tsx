import React,{ useState, ReactElement, useEffect } from 'react'
import reactLogo from '@/assets/react.svg'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Logos from '@/components/Logos'
import Newsletter from '@/components/Newsletter'
import OurTeam from '@/components/OurTeam'
import Divider from '@/components/Divider'
import axios from 'axios'

export default function HomePage(): ReactElement {
  const [profiles, setProfiles] = useState<any>([])
  useEffect(() => {
    axios.get('https://api.github.com/users/soufiyanbenallal')
      .then(({data})=> {
        setProfiles((v:any) => [...v, data])
      })
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className='mt-10'>
      <OurTeam profiles={profiles} />
      {/* <Contact /> */}
      <Divider />
      <Newsletter />
      <Divider />
    </div>
  )
}

