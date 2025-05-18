"use client"
import BentoGrid from '@/components/BentoGrid'
import CategorySelector from '@/components/CategorySelector'
import Input_01 from '@/components/Input'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import ThemeToggle from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { Building, Compass, Heart, Home, HomeIcon, MapPin, Sparkles } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function page() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [category, setCategory] = useState("tech");
  const { theme, resolvedTheme } = useTheme()

  const itemSample = [
    {
        title: "Luxury Beachfront Villa",
        meta: "4.9 (128 reviews)",
        description:
            "Stunning oceanfront property with private pool, modern amenities, and breathtaking sunset views. Perfect for family getaways.",
        icon: <Home className="w-4 h-4 text-blue-500" />,
        status: "Superhost",
        tags: ["Beachfront", "Pool", "Luxury"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Downtown Loft",
        meta: "$199/night",
        description:
            "Modern urban living in the heart of the city. Walking distance to restaurants and attractions.",
        icon: <Building className="w-4 h-4 text-emerald-500" />,
        status: "Instant Book",
        tags: ["Urban", "Modern"],
    },
    {
        title: "Popular Areas",
        description:
            "Discover trending neighborhoods with the highest guest satisfaction",
        icon: <MapPin className="w-4 h-4 text-red-500" />,
        status: "New",
    },
    {
        title: "Bali Villa",
        description:
            "A luxurious villa in Bali with a private pool and stunning views of the ocean",
        icon: <HomeIcon className="w-4 h-4 text-amber-500" />,
        meta: "12 houses",
        tags: ["Housing", "Tools"],
    },
    {
        title: "Travel Collections",
        description: "Curated lists of unique stays and experiences worldwide",
        icon: <Heart className="w-4 h-4 text-purple-500" />,
        meta: "Updated weekly",
        tags: ["Featured", "Curated"],
    },
    {
        title: "Local Guide",
        meta: "6 cities",
        description:
            "Expert recommendations for local attractions and hidden gems",
        icon: <Compass className="w-4 h-4 text-sky-500" />,
        status: "Featured",
        tags: ["Local", "Guide"],
    },
]
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

      const categories = [
  { id: "tech", label: "Technology" },
  { id: "health", label: "Health & Wellness" },
  { id: "finance", label: "Finance & Budgeting" },
  { id: "education", label: "Learning & Education" },
  { id: "sports", label: "Sports & Fitness" },
  { id: "creative", label: "Arts & Crafts" },
  { id: "cooking", label: "Cooking & Baking" },
  { id: "music", label: "Music & Instruments" },
  { id: "travel", label: "Travel & Exploration" },
  { id: "games", label: "Games & Trivia" },
  { id: "social", label: "Social & Friends" },
  { id: "productivity", label: "Productivity" },
  { id: "reading", label: "Books & Reading" },
  { id: "outdoors", label: "Outdoor Adventures" },
  { id: "mindfulness", label: "Mindfulness & Meditation" },
  { id: "diy", label: "DIY Projects" },
  { id: "volunteer", label: "Volunteering" },
  { id: "challenges", label: "Daily Challenges" },
  { id: "movies", label: "Movies & TV Shows" },
  { id: "writing", label: "Writing & Journaling" },
  { id: "photography", label: "Photography" },
  { id: "pets", label: "Pet Time" },
  { id: "cleaning", label: "Organize & Clean" },
];
    
      if (!mounted) return null
    
       const currentTheme = theme === 'system' ? resolvedTheme : theme
      const logoSrc = currentTheme === 'dark' ? '/logo.svg' : '/newlogo.svg'
    
  return (
    <>
  {/* Header */}
  <header
    className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
      scrolled
        ? "dark:bg-black/90 bg-white/70 backdrop-blur-sm py-2 shadow-sm"
        : "bg-transparent py-4"
    )}
  >
    <div className="container mx-auto px-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="h-8 w-8 flex items-center">
          <Image src={logoSrc} width={60} height={60} alt="logo" />
        </div>
        <span className="text-xl font-bold">Venture</span>
      </Link>

      <div className="flex gap-3">
        <div className="flex items-center justify-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>

  {/* Main Content */}
  <main className="mt-24 px-4 md:px-10">
    <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

    {/* Category Selector */}
    <div className="rounded-lg border bg-card p-6">
      {/* <h2 className="text-2xl font-semibold mb-4">Find Something To Do</h2>
      <div className="space-y-6">
        <CategorySelector
          categories={categories}
          selectedCategory={category}
          onCategoryChange={setCategory}
        />
      </div> */}
      <h2 className='mb-3'>Enter your Custom message</h2>
      <Input placeholder='Tell me about...'/>
      <h2 className='mt-5'>Select your Category</h2>
      <div className='mt-3 flex justify-between'>
      <Select>
      <SelectTrigger className="w-[380px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <RainbowButton><Sparkles/>Generate</RainbowButton>
    </div>
    </div>

    {/* Grid */}
    <div className="mt-10 ">
        <h1 className='text-3xl font-bold text-gradient'>Your Activity</h1>
      <BentoGrid items={itemSample} />
    </div>
  </main>
</>

  )
}

export default page