import { Fragment, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { NAVIGATION } from '@/constants';
import { routesEnum } from '@/enums';
import logo from '@assets/logo.svg'
import classNames from 'classnames';
import Button from './Button';
import Box from './Box';
import Logo from './Logo';



export function Header() {
    const [collapse, setCollapse] = useState(false);
    useEffect(() => {
        setCollapse(window.scrollY > 50);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
      
    const handleScroll = () => {
      setCollapse(window.scrollY > 50);
    };
  return (
      <header className={"bg-black fixed top-0 left-0 z-50 w-full transition-all duration-[400ms] "+ (collapse  ? 'py-3 shadow-md dark' : 'bg-opacity-0  py-6')}>
        <nav className="m-container" aria-label="Top">
          <div className="flex w-full items-center justify-between">
              <Link to={routesEnum.home} className='flex gap-2 outline-none' >
                <Box as='div' variant='fadeout' src={logo}   alt="React logo">
                  <Logo className="h-7" />
                </Box>
              </Link>
              <ul className="ml-4 hidden gap-5 md:flex">
                {NAVIGATION.map((link, index) => (
                  <Box as='li' variant='fadedown' y={20} delay={index * .2} key={link.name}>
                    <NavLink to={link.href}
                      className={({ isActive }) =>
                        classNames(isActive ? 'text-slate-800 dark:text-white' : 'text-gray-400','text-[13px] font-normal leading-5 dark:hover:text-white hover:text-black', link.className)
                      }>
                      {link.name}
                    </NavLink>
                    {link.href !== routesEnum.contact && <span className='text-gray-400 text-xs pt-1 ml-5'>•</span>}
                  </Box>
                ))}
              </ul>
              {/* <Box variant='fadeout' >
                <Button to={routesEnum.contact} variant='secondary'>
                      Let's talk
                </Button>
              </Box> */}
          </div>
        </nav>
      </header>
  )
}

