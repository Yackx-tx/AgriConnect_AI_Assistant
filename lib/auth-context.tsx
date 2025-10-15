"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type UserRole = "farmer" | "agronomist" | "admin"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, role: UserRole) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("agriconnect_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string, role: UserRole) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: email.split("@")[0],
      email,
      role,
    }

    setUser(newUser)
    localStorage.setItem("agriconnect_user", JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("agriconnect_user")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
