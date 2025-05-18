"use client"

import type React from "react"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github, ArrowLeft } from "lucide-react"
import { toast } from "sonner"
import Image from "next/image"
import { useTheme } from "next-themes"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export default function SignIn() {
  const router = useRouter()
  // const { toast } = useToast()
  const { theme, resolvedTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    try {
      loginSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      })

      if (result?.error) {
        toast(
          <div>
            <div className="font-bold">Authentication failed</div>
            <div>Invalid email or password. Please try again.</div>
          </div>
        )
      } else {
        toast(
          <div>
            <div className="font-bold">Success!</div>
            <div>You have been signed in.</div>
          </div>
        )
        router.push("/")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleGithubSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn("github", { callbackUrl: "/" })
    } catch (error) {
      toast(
        <div>
          <div className="font-bold text-red-500">Something went wrong</div>
          <div>Please try again later.</div>
        </div>
      )
    } finally {
      setIsLoading(false)
    }
  }

   const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

   const currentTheme = theme === 'system' ? resolvedTheme : theme
  const logoSrc = currentTheme === 'dark' ? '/logo.svg' : '/newlogo.svg'
  return (

    <div className="min-h-screen bg-white dark:bg-black text-black  dark:text-white flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-4 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => router.back()}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 flex items-center">
                          <Image src={logoSrc} width={60} height={60} alt="logo"></Image>
                        </div>
              <span className="text-xl font-bold text-black dark:text-white">Venture</span>
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-8">Sign in to your account</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="hello@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`bg-white dark:bg-black border border-gray-300 dark:border-white/20 text-black dark:text-white ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className={`bg-white dark:bg-black border border-black/20 dark:border-white/20 text-black dark:text-white ${errors.password ? "border-red-500" : ""}`}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-black/70 dark:text-white/70">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="text-black dark:text-white hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-black/20 dark:border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-black text-black/70 dark:text-white/70">Or continue with</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full mt-6 bg-transparent border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-white/10 dark:hover:bg-white/10"
            onClick={handleGithubSignIn}
            disabled={isLoading}
          >
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>

          <p className="mt-8 text-xs text-black/70 dark:text-white/70 text-center">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text-black dark:text-white hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-black dark:text-white hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 bg-black dark:bg-zinc-900 p-12 items-center justify-center">
        <div className="max-w-md text-center">
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-4">
              <AnimatedTooltip items={people} />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-200 dark:text-white">People love us</h2>
          <p className="text-white/70 dark:text-white/70">
            Venture is loved by thousands of people across the world, be part of the community and join us.
          </p>
        </div>
      </div>
    </div>
  )
}
