"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"
import ThemeToggle from "./ThemeToggle"
import { useTheme } from "next-themes"
import { InteractiveHoverButton } from "./magicui/interactive-hover-button"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  const handleClick = () => {
    if (session?.user){
      router.push('/dashboard')
    }
    else {
      router.push('/auth/signin')
    }
  }

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  if (!mounted) return null

   const currentTheme = theme === 'system' ? resolvedTheme : theme
  const logoSrc = currentTheme === 'dark' ? '/logo.svg' : '/newlogo.svg'

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled ? "dark:bg-black/20 backdrop-blur-sm py-2 shadow-xs" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 flex items-center">
            <Image src={logoSrc} width={60} height={60} alt="logo"></Image>
          </div>
          <span className="text-xl font-bold">Venture</span>
        </Link>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="#activities" className="text-white hover:text-gray-300 transition">
            Activities
          </Link>
          <Link href="#features" className="text-white hover:text-gray-300 transition">
            Features
          </Link>
        </nav> */}
        
        <div className="flex gap-3">
          <div className="flex items-center justify-center">
          <ThemeToggle />
          </div>
          <div className="hidden md:block">
          
          <InteractiveHoverButton onClick={handleClick}>Get Started</InteractiveHoverButton>
          </div>
        </div>

        {/* Mobile Navigation
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900 text-white">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-xl hover:text-gray-300 transition">
                Home
              </Link>
              <Link href="#activities" className="text-xl hover:text-gray-300 transition">
                Activities
              </Link>
              <Link href="#features" className="text-xl hover:text-gray-300 transition">
                Features
              </Link>
              <Button className="mt-4 bg-white text-black hover:bg-gray-200">Get Started Now</Button>
            </nav>
          </SheetContent>
        </Sheet> */}
      </div>
    </header>
  )
}
