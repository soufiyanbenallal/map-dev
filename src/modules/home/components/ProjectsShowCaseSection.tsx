import React, { useEffect, useRef } from 'react'
import { motion, MotionValue, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import weventeMobileSrc from "@assets/images/wevente-mobile.png";
import portalSrc from "@assets/images/portal.png";
import aarmy from "@assets/images/aarmy.png";
import aarmyMobile from "@assets/images/aarmy-mobile.png";
import useWindowSize from '@/hooks/useWindowSize';
function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [window.innerHeight*.5, window.innerHeight], [-distance, distance]);
}

const ProjectContent = ({url,className}: {url:string, className?: string})=> {
    return (
        <li className={className || 'min-w-[18vw]'}>
            <img src={url} alt="" className={'hover:scale-125 transition-transform duration-500 object-contain rounded-2xl border-2 border-gray-400 border-opacity-50 '+ className || 'min-w-[18vw]'} />
        </li>
    )
}
export default function ProjectsShowCaseSection() {
    const ref = useRef<HTMLUListElement>(null);
    const {height, width} = useWindowSize()
    const h = height * 1.5
    const { scrollY } = useScroll({target: ref });
    const x = useTransform(scrollY, [height/2, h], [0, -width*0.7]);
  return (
    <section ref={ref} className='flex flex-col relative z-10 snap-x snap-mandatory snap-end overflow-x-scroll scrollbar-hide -mt-52'>
        {/* <div className=' text-white h-[25vh] flex items-center justify-center'>
            <h3 className='text-3xl text-center w-full'>Projects Showcase</h3>
        </div> */}
        <motion.ul style={{x}} className='w-full h-full flex items-center gap-20 flex-nowrap px-10 py-40 '>
            <li className="min-w-[2vw]"></li>
            <ProjectContent url={weventeMobileSrc} />
            <ProjectContent className='min-w-[30vw]' url={aarmy} />
            <ProjectContent url={aarmyMobile} />
            <ProjectContent className='min-w-[50vw]' url={portalSrc} />
            <li className="min-w-[10vw]"></li>
        </motion.ul>
    </section>
  )
}
