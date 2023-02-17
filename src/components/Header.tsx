/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import logo from '../assets/logo.svg'

export default function Header() {
    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
      
    const handleScroll = () => {
      setCollapse(window.scrollY > window.innerHeight/4);
    };
  return (
      <header className={"bg-white fixed top-0 left-0 z-50 w-full transition-all duration-500 "+ (collapse  ? 'py-4 shadow-sm' : 'bg-opacity-0  py-6')}>
        <nav className="px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b border-white-500 lg:border-none">
            {/* <div className="flex items-center"> */}
              <a href="#" className='flex gap-2'>
                <img src={logo}  className="h-7" alt="React logo" />
                <span className="sr-conly uppercase font-black text-slate-800">MAPDEV</span>
              </a>
              <div className="ml-4 hidden space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-sm font-medium text-slate-800 hover:text-white-50">
                    {link.name}
                  </a>
                ))}
              </div>
              <div>
                
              </div>
            {/* </div> */}
          </div>
        </nav>
      </header>
  )
}
/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Solutions', href: '#solution' },
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Our Team', href: '#team' },
]

