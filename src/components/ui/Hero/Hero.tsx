'use client'

import { motion, Variants } from 'framer-motion'
import { FC } from 'react'
import { cn } from '@/lib/utils'
import styles from './Hero.module.css'
import { TextEffect } from '@/components/effects/TextEffect'

interface HeroProps {
  imageUrl?: string
  className?: string
  title?: string
}

const heroVariants: Variants = {
  initial: {
    height: '100dvh'
  },
  animate: {
    height: 'calc(100dvh - max(10rem, 35dvh))',
    transition: {
      // when: 'afterChildren',
      delay: 1.5,
      duration: 1.2,
      ease: 'easeInOut'
    }
  }
}


const circleVariants: Variants = {
  initial: {
    r: 0,
    cx: '50%',
    cy: '50%'
  },
  animate: {
    r: 'max(100vw, 100dvh)',
    cx: '50%',
    cy: '50%',
    transition: {
      delay: 0.85,
      duration: 1.8,
      ease: [0.4, 0.0, 0.2, 1],
    }
  }
}

const Hero: FC<HeroProps> = ({
  imageUrl = '/placeholder.jpg', // Default image
  className,
  title = 'Digivore' // Default title
}) => {
  return (
    <motion.div
      className={cn('relative h-[calc(100dvh-1rem)] @container/hero w-full', styles.hero, className)}
      variants={heroVariants}
      initial="initial"
      animate="animate"
    >
      {/* Image layer with SVG mask */}
      <div className="absolute inset-0">
        <svg className={styles.hero__svgMask}>
          <defs>
            <mask id="circleMask">
              <rect width="100%" height="100%" fill="black" />
              <motion.circle
                cx="50%"
                cy="50%"
                fill="white"
                variants={circleVariants}
              />
            </mask>
          </defs>
          <foreignObject width="100%" height="100%" mask="url(#circleMask)">
            <div
              className={cn(styles.hero__imageContainer, `bg-cover bg-center bg-fixed`)}
              style={{backgroundImage: `url(${imageUrl})`}}
            >
            </div>
          </foreignObject>
        </svg>
      </div>

      {/* Text layer positioned above */}
      <div
        className={cn('mx-auto sticky top-1/2 -translate-y-1/2 flex items-center justify-center', styles.hero__textLayer)}
      >
        <h1 className={cn(styles.hero__title, 'm-0 py-24')}>
          <TextEffect preset='fade-in-blur'>
            {title}
          </TextEffect>
        </h1>
      </div>
    </motion.div>
  )
}

export default Hero
