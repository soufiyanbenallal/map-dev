import React, { useRef } from 'react'
import { motion, MotionValue, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [window.innerHeight*.5, window.innerHeight], [-distance, distance]);
  }
export default function ProjectsShowCaseSection() {
    const ref = useRef(null);
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollX = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      })
    // const scrollVelocity = useVelocity(scrollY);
  const y = useTransform(scrollX, [window.innerHeight*.5, window.innerHeight], [0, 500]);
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
