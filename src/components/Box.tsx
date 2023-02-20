import React, { ReactNode } from "react";
import { motion , EasingDefinition} from "framer-motion";

const elemets = [
  {
    type: motion.div,
    key: "div",
  },
  { type: motion.li, key: "li" },
  { type: motion.span, key: "span" },
  { type: motion.article, key: "article" },
];

type ElementsType = "div" | "li" | "span" | "article";
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
    const { as, children, variant = 'fadeup', x=100, y=100, duration = 1000, ease="easeInOut",delay=0, ...restOfProps } = props
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
    whileInView: { opacity: 1, y: 0 },
    transition: { ease: "easeInOut",delay,type: "spring", bounce: 0.3, duration: duration / 1000 },
  };
  const variants = {
    fade: MOTION_FADE,
    fadeup: MOTION_FADEUP,
    fadein: MOTION_FADEIN,
    fadeout: MOTION_FADEOUT,
    fadedown: MOTION_FADEDOWN,
    fadeleft: MOTION_FADEDOWN,
    faderight: MOTION_FADEDOWN,
  }
  return <CustomMotionTag {...variants[variant]} {...restOfProps}>{children}</CustomMotionTag>;
}
