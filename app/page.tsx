"use client"
import React, { useEffect, useState } from 'react'
import BlurText from '@/components/BlurText'
import Navbar from '@/components/Navbar';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { cn } from '@/lib/utils';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { Sparkles, Star } from 'lucide-react';
import { CompanyLogos } from '@/components/Company-logos';
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { useRouter } from 'next/navigation';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

function page() {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter()

  useEffect(() => {
  setHasMounted(true);
}, []);

if (!hasMounted) return null;
  return (
    <div className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background'>
      <DotPattern
  //     width={10}
  // height={10}
  glow
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
      />
      <Navbar/>
      {/* <div className="relative mb-15 border rounded-full px-3 py-1 z-10 inline-flex items-center gap-1">
  
  <AnimatedGradientText className="text-sm">
    Elevate your Coding Journey
  </AnimatedGradientText>
  
</div> */}
        

      {/* <div className="flex flex-col items-center justify-center absolute inset-0 -z-10 h-full w-full bg-black [mask-image:radial-gradient(circle,white_30%,transparent_90%)] bg-[radial-gradient(#e7e8ea4b_1px,transparent_1px)] [background-size:16px_16px] [background-position:center]"> */}
      <div className='flex flex-col justify-center items-center mb-28'>
      <BlurText
        text="Isn't this so cool?!"
        delay={250}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-7xl font-bold mb-8"
        // animationFrom="blur(0px)"
        // animationTo="blur(10px)"
      />
      <div className='flex justify-center mb-5'>
          <p className='text-light text-center dark:text-gray-300 text-neutral-700 w-1/2 flex justify-center items-center '>Compete with friends and devs worldwide using your GitHub, LeetCode, and Codeforces profiles. Build. Battle. Grow.</p>
        </div>
        <div className='flex gap-3 text-xl font-semibold'>
          <Button variant={'outline'} className='z-100 font-semibold' onClick={() => router.push('/auth/signin')}>Get Started</Button>
          <RainbowButton>Demo</RainbowButton>
        </div>
</div>
        
        <div className="container bottom-20 fixed mx-auto px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto font-bold mb-12 text-center transition-colors text-lg dark:text-white/70 text-neutral-700"
            >
               Join thousands using our platform to monitor growth and performance with leading tech brands and platforms.
            </motion.p>

            <CompanyLogos />
          </div>
      </div>
    // </div>
  )
}

export default page
