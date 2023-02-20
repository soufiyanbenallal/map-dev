/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
const navigation = [
  { name: 'Solutions', href: '#solution' },
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Our Team', href: '#team' },
]

export default function Header() {
    const [collapse, setCollapse] = useState(false);
    const [currentRoute, setCurrentRoute] = useState(navigation[0]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
      
    const handleScroll = () => {
      setCollapse(window.scrollY > window.innerHeight/4);
    };
  return (
      <header className={"bg-white fixed top-0 left-0 z-50 w-full transition-all duration-500 "+ (collapse  ? 'py-2 shadow-sm' : 'bg-opacity-0  py-6')}>
        <nav className="px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between">
            {/* <div className="flex items-center"> */}
              <a href="#" className='flex gap-2 outline-none'>
                <img src={logo}  className="h-7" alt="React logo" />
                {/* <span className="-tracking-[0.04rem] mt-0.5  font-black bg-gradient-to-r to-slate-600 from-gray-800 bg-clip-text text-transparent">mapdev</span> */}
              </a>
              <div className="ml-4 hidden gap-8 md:flex">
                {navigation.map((link) => (
                  <Fragment key={link.name}>
                  <a href={link.href}  onClick={()=> setCurrentRoute(link)} className={"text-sm font-normal leading-6 hover:text-white-50 "+ (link.href === currentRoute.href? 'text-slate-800':'text-gray-400')}>
                    {link.name}
                  </a>
                  {link.href !== '#team' && <span className='text-gray-400 text-xs pt-1'>•</span>}
                  </Fragment>
                ))}
              </div>
              <div>
                <button 
                 
                  style={{textShadow:'text-shadow: 0 1px 2px #00000063'}}
                  className='rounded-full h-9 drop-shadow-md px-8 py-1 text-sm bg-gradient-to-l from-slate-900 to-gray-700 hover:scale-105 hover:opacity-90 transition-all text-white font-semibold'>Let's talk</button>
              </div>
            {/* </div> */}
          </div>
        </nav>
      </header>
  )
}

