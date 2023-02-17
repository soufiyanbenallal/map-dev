import React, { useRef } from 'react'
import { motion, MotionValue, useMotionValue, useScroll, useTransform, useVelocity } from "framer-motion";
function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [window.innerHeight*.5, 100], [-distance, distance]);
  }
export default function ProjectsShowCaseSection() {
    const ref = useRef(null);
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll({ target: ref,offset:['end'], axis: 'y' });
    // const scrollVelocity = useVelocity(scrollY);
  const y = useParallax(scrollY, -500);
  return (
    <section
    ref={ref}
    className='bg-black h-[100vh] text-red-500'>
        <motion.div style={{ x:y }}>
            asgdasdnbn
        </motion.div>
    </section>
  )
}
