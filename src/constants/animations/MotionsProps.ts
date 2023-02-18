export const MOTION_FADEUP = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { ease: "easeInOut", duration: 0.9 },
};
export const MOTION_FADEDOWN = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { ease: "easeInOut", duration: 0.9 },
};

export const MOTION_FADEIN = {
  initial: { opacity: 0, scale: 1.1 },
  whileInView: { opacity: 1, scale: 1},
  transition: { ease: "easeInOut", duration: 1.1 },
};
export const MOTION_FADEOUT = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1},
  transition: { ease: "easeInOut", duration: 0.8 },
};
