import { NextResponse } from "next/server"
import { z } from "zod"

// For a real application, you would use a database
// This is a simple in-memory store for demonstration
const users = new Map()

// Validation schema
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate request body
    const validatedData = registerSchema.parse(body)

    // Check if user already exists
    if (users.has(validatedData.email)) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 409 })
    }

    // In a real app, you would hash the password before storing
    users.set(validatedData.email, {
      name: validatedData.name,
      email: validatedData.email,
      password: validatedData.password, // In a real app, this would be hashed
    })

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Validation error", errors: error.errors }, { status: 400 })
    }

    console.error("Registration error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
