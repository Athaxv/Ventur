"use client"
import React from 'react'
import BlurText from '@/components/BlurText'
import Navbar from '@/components/Navbar';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { cn } from '@/lib/utils';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

function page() {
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
      
      {/* <div className="flex flex-col items-center justify-center absolute inset-0 -z-10 h-full w-full bg-black [mask-image:radial-gradient(circle,white_30%,transparent_90%)] bg-[radial-gradient(#e7e8ea4b_1px,transparent_1px)] [background-size:16px_16px] [background-position:center]"> */}
      <BlurText
        text="Isn't this so cool?!"
        delay={250}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-6xl font-bold mb-8"
        // animationFrom="blur(0px)"
        // animationTo="blur(10px)"
      />
      </div>
    // </div>
  )
}

export default page
