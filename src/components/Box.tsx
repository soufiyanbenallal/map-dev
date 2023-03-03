import React, { ReactNode } from "react";
import { motion , EasingDefinition} from "framer-motion";

const elemets = [
  {
    type: motion.div,
    key: "div",
  },
  { type: motion.ul, key: "ul" },
  { type: motion.li, key: "li" },
  { type: motion.span, key: "span" },
  { type: motion.section, key: "section" },
  { type: motion.article, key: "article" },
  { type: motion.p, key: "p" },
  { type: motion.h1, key: "h1" },
  { type: motion.h2, key: "h2" },
  { type: motion.h3, key: "h3" },
  { type: motion.h4, key: "h4" },
  { type: motion.h5, key: "h5" },
  { type: motion.img, key: "img" },
]; 
type ElementsType = "div" | "ul" | "li" | "span" | "section" | "article" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | 'img';
type VariantType = "fadeup" | "fadein" | "fadeout" | "fadedown" | "fadeleft" | "faderight" | "fade" ;

export interface IBox {
  as?: ElementsType; // element tag
  children?: ReactNode;
  variant?: VariantType, // variant of fades
  duration?: number, // By ms
  ease?: EasingDefinition, // transition tipe
  delay?: number,
  x?: number,
  y?: number,
  [x:string]: any,
}
export default function Box(props: IBox) {
    const { as, children, variant = 'fadeup', x=100, y=100, duration = 1500, ease="easeInOut",delay=0, ...restOfProps } = props
    const CustomMotionTag = elemets.find(({ key }) => key === as)?.type || motion.div;
  const MOTION_FADE = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1},
    transition: { ease: "easeInOut",delay, duration: duration / 1000 },
  };  
  const MOTION_FADEUP = {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    transition: { ease: "easeInOut",delay,type: "spring", bounce: 0.3, duration: duration / 1000 },
  };  
  const MOTION_FADEIN = {
    initial: { opacity: 0, scale: 1.1 },
    whileInView: { opacity: 1, scale: 1},
    transition: { ease: "easeInOut",delay,type: "spring", bounce: 0.3, duration: duration / 1000 },
  };
  const MOTION_FADEOUT = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1},
    transition: { ease: "easeInOut",delay,type: "spring", bounce: 0.3, duration: duration / 1000 },
  };
  const MOTION_FADEDOWN = {
    initial: { opacity: 0, y: -y },
    exit: { opacity: 0, y: -y },
    animate: { opacity: 1, y: 0 },
    transition: { ease: "easeInOut",delay,type: "spring", bounce: 0.3, duration: duration / 1000 },
  };
  const MOTION_FADELEFT = {
    initial: { opacity: 0, x: x },
    whileInView: { opacity: 1, y: 0 },
    transition: { ease: "easeInOut",delay,type: "spring", bounce: 0.3, duration: duration / 1000 },
  };
  const MOTION_FADERIGHT = {
    initial: { opacity: 0, x: -x },
    whileInView: { opacity: 1, x: 0 },
    transition: { ease: "easeInOut",delay,type: "spring", bounce: 0.3, duration: duration / 1000 },
  };
  const variants = {
    fade: MOTION_FADE,
    fadeup: MOTION_FADEUP,
    fadein: MOTION_FADEIN,
    fadeout: MOTION_FADEOUT,
    fadedown: MOTION_FADEDOWN,
    fadeleft: MOTION_FADELEFT,
    faderight: MOTION_FADERIGHT,
  }
  return <CustomMotionTag {...variants[variant]} {...restOfProps}>{children}</CustomMotionTag>;
}
