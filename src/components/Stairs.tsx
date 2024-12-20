import React from 'react';
import { animate, motion } from 'framer-motion';

const stairAnimation = {
  initial: {
    top: "0%"
  },
  animate: {
    top: "100%"
  },
  exit: {
    top: ["100%", "0"],
  },
}

const Stairs = () => {

  const reverseIndex = (index: number): number => {
    const totalSteps: number = 6;
    return totalSteps - index - 1;
  }

  return (
    <>
      {
        [...Array<number>(6)].map((_, index) => (
          <motion.div 
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className='h-full w-full bg-white relative'
          />
        ))
      }
    </>
  )
}

export default Stairs