import React, { useEffect, useRef } from 'react'
import { motion, MotionValue, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import weventeMobileSrc from "@assets/images/wevente-mobile.png";
import portalSrc from "@assets/images/portal.png";
import aarmy from "@assets/images/aarmy.png";
import aarmyMobile from "@assets/images/aarmy-mobile.png";
function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [window.innerHeight*.5, window.innerHeight], [-distance, distance]);
}

const ProjectContent = ({url,className}: {url:string, className?: string})=> {
    return (
        <li className={className || 'min-w-[18vw]'}>
            <img src={url} alt="" className={'hover:scale-125 transition-transform duration-500 object-contain rounded-2xl border-2 border-orange-400 border-opacity-50 '+ className || 'min-w-[18vw]'} />
        </li>
    )
}
export default function ProjectsShowCaseSection() {
    const ref = useRef<HTMLUListElement>(null);
    const { scrollY } = useScroll({target: ref });

    let scrollX = 0
    // const scrollX = useSpring(scrollY, {
    //     stiffness: 90,
    //     damping: 15,
    //     restDelta: 0.001
    //   })
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
      
    const handleScroll = () => {
        if (window.scrollY > 300 && window.scrollY < 2000) {
            scrollX+=.1
            ref.current?.scrollBy(scrollX , 0);
        } else{
            // scrollX = 0
            // ref.current?.scrollBy(-scrollX *2 , 0);
        } 
    } 
  return (
    <section
    
        className='bg-wh ite text-red-500 flex flex-col relative z-10'>
        {/* <div className=' text-white h-[25vh] flex items-center justify-center'>
            <h3 className='text-3xl text-center w-full'>Projects Showcase</h3>
        </div> */}
        <ul ref={ref} className=' h-full flex items-center gap-20 flex-nowrap px-10 py-40 -mt-56  snap-x snap-mandatory snap-end overflow-x-scroll scrollbar-hide'>
            {/* <li className="min-w-[18vw]"></li> */}
            <ProjectContent url={weventeMobileSrc} />
            <ProjectContent className='min-w-[30vw]' url={aarmy} />
            <ProjectContent url={aarmyMobile} />
            <ProjectContent className='min-w-[50vw]' url={portalSrc} />
            <li className="min-w-[18vw]"></li>
            {/* <ProjectContent  url={weventeMobileSrc} />
            <ProjectContent  url={portalSrc} />
            <ProjectContent  url={weventeMobileSrc} />
            <ProjectContent url={weventeMobileSrc} /> */}
        </ul>
    </section>
  )
}
