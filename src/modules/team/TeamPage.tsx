import React,{ useState, ReactElement, useEffect } from 'react'
import Newsletter from '@/components/Newsletter'
import OurTeam from '@/components/OurTeam'
import Divider from '@/components/Divider'
import axios from 'axios'
import PageLayout from '@/layouts/PageLayout'

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
    <PageLayout className='mt-10'>
      <OurTeam profiles={profiles} />
      <Divider />
      <Newsletter />
      <Divider />
    </PageLayout>
  )
}

