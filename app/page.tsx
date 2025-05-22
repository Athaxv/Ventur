"use client"
import React, { useEffect, useState } from 'react'
import BlurText from '@/components/BlurText'
import Navbar from '@/components/Navbar'
import { DotPattern } from '@/components/magicui/dot-pattern'
import { cn } from '@/lib/utils'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { Sparkles, Star } from 'lucide-react'
import { CompanyLogos } from '@/components/Company-logos'
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import { useRouter } from 'next/navigation'
import Faq02 from '@/components/Faq'
import MarqueeDemo from '@/components/marquee-data'
import { Marquee } from '@/components/magicui/marquee'

// Animation variants for enhanced user experience
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const scaleOnHover = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  },
  whileTap: { scale: 0.95 }
}

function Page() {
  const [hasMounted, setHasMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const handleAnimationComplete = () => {
    console.log('Animation completed!')
  }

  if (!hasMounted) return null

  return (
    <>
      {/* Hero Section */}
      <div className='relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background'>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          )}
        />
        
        <Navbar />
        
        {/* Enhanced Badge with Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-8 border rounded-full px-4 py-2 z-10 inline-flex items-center gap-2"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            {/* <Sparkles className="h-4 w-4 text-blue-500" /> */}
          </motion.div>
          {/* <AnimatedGradientText className="text-sm font-medium">
            Elevate your Coding Journey
          </AnimatedGradientText> */}
        </motion.div>

        {/* Main Content */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className='flex flex-col justify-center items-center mb-16 sm:mb-20 lg:mb-28 px-4 text-center'
        >
          <motion.div variants={fadeInUp}>
            <BlurText
              text="Isn't this so cool?!"
              delay={250}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8"
            />
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className='flex justify-center mb-6 sm:mb-8'
          >
            <p className='text-base sm:text-lg text-center dark:text-gray-300 text-neutral-700 max-w-xs sm:max-w-md lg:max-w-2xl px-4'>
              Compete with friends and devs worldwide using your GitHub, LeetCode, and Codeforces profiles. Build. Battle. Grow.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center w-full'
          >
            <motion.div variants={scaleOnHover} className="flex justify-center">
              <Button 
                variant={'outline'} 
                className='font-semibold w-full sm:w-auto px-9 py-4' 
                onClick={() => router.push('/auth/signin')}
              >
                Get Started
              </Button>
            </motion.div>
            <motion.div variants={scaleOnHover} className="flex justify-center">
               <RainbowButton className="w-full sm:w-auto px-9 py-4">
                Demo
              </RainbowButton>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      {/* Company Logos Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='mt-8 sm:mt-12 lg:mt-16 mb-16 sm:mb-20 lg:mb-24'
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mx-auto font-bold mb-8 sm:mb-12 text-center transition-colors text-base sm:text-lg dark:text-white/70 text-neutral-700 max-w-4xl"
          >
            Join thousands using our platform to monitor growth and performance with leading tech brands and platforms.
          </motion.p>

          <CompanyLogos />
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='mt-20 sm:mt-32 lg:mt-40 mb-20 sm:mb-32 lg:mb-40 flex flex-col justify-center items-center gap-4 sm:gap-6 px-4'
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent text-center"
        >
          Loved By Developers
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <MarqueeDemo />
        </motion.div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-4 sm:px-6 lg:px-8"
      >
        <Faq02 />
      </motion.div>
    </>
  )
}

export default Page