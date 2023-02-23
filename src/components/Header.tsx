import { Fragment, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { NAVIGATION } from '@/constants';
import { routesEnum } from '@/enums';
import logo from '@assets/logo.svg'
import classNames from 'classnames';
import Button from './Button';



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
      <header className={"bg-white fixed top-0 left-0 z-50 w-full transition-all duration-500 "+ (collapse  ? 'py-2 shadow-sm' : 'bg-opacity-0  py-6')}>
        <nav className="px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between">
              <Link to={routesEnum.home} className='flex gap-2 outline-none'>
                <img src={logo}  className="h-7" alt="React logo" />
              </Link>
              <div className="ml-4 hidden gap-8 md:flex">
                {NAVIGATION.map((link) => (
                  <Fragment key={link.name}>
                    <NavLink to={link.href}
                    className={({ isActive }) =>
                      classNames(isActive ? 'text-slate-800' : 'text-gray-400','text-sm font-normal leading-6 hover:text-white-50')
                    }>
                      {link.name}
                    </NavLink>
                    {link.href !== routesEnum.team && <span className='text-gray-400 text-xs pt-1'>•</span>}
                  </Fragment>
                ))}
              </div>
              <Button to={routesEnum.contact} variant='secondary'>
                    Let's talk
              </Button>
          </div>
        </nav>
      </header>
  )
}

