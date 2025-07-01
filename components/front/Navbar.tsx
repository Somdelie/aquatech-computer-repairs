"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, UserIcon, SettingsIcon, LogOutIcon, PackageIcon, ShoppingCartIcon, HeartIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface SessionUser {
  id: string
  name: string
  email: string
  image?: string // Optional, if you want to display user image
}

export default function Navbar({ session }: { session?: SessionUser }) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Products", href: "/products" },
  ]

  const userMenuItems = [
    { name: "Profile", href: "/profile", icon: UserIcon },
    { name: "Dashboard", href: "/dashboard", icon: PackageIcon },
    { name: "My Orders", href: "/orders", icon: ShoppingCartIcon },
    { name: "Wishlist", href: "/wishlist", icon: HeartIcon },
    { name: "Settings", href: "/settings", icon: SettingsIcon },
  ]

  const handleLogin = () => {
    router.push("/login")
  }

  const handleLogout = () => {
    console.log("Logging out...")
    // You might want to call your logout function here
    // signOut() or similar
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/aqua-logo.png"
              alt="Aquatech Computers Logo"
              width={100}
              height={100}
              className="h-36 w-36 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Section */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 bg-teal-600">
                      <AvatarImage src={session.image || "/placeholder.svg"} alt={session.name || "User Avatar"} />
                      <AvatarFallback className="bg-teal-600 text-white">{getInitials(session.name)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{session.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{session.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {userMenuItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link href={item.href} className="cursor-pointer">
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-red-600" onClick={handleLogout}>
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button className="bg-teal-600 hover:bg-teal-700 text-white" onClick={handleLogin}>
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] p-0">
              <SheetHeader className="p-6 pb-4 border-b">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6 p-0">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </SheetHeader>

              <div className="flex flex-col h-full">
                {/* User Section */}
                {session && (
                  <div className="p-6 pb-4">
                    <div className="flex items-center space-x-3 p-4 bg-teal-50 rounded-lg">
                      <Avatar className="h-12 w-12 bg-teal-600">
                        <AvatarImage src={session.image || "/placeholder.svg"} alt={session.name || "User Avatar"} />
                        <AvatarFallback className="bg-teal-600 text-white">{getInitials(session.name)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">{session.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{session.email}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Links */}
                <div className="flex-1 px-6">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">Navigation</h3>
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* User Menu Items - Only show if session exists */}
                  {session && (
                    <>
                      <Separator className="my-4" />
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-muted-foreground mb-3">Account</h3>
                        {userMenuItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon className="mr-3 h-4 w-4" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="p-6 pt-4 border-t mt-auto">
                  {session ? (
                    <Button
                      variant="outline"
                      className="w-full text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 bg-transparent"
                      onClick={() => {
                        handleLogout()
                        setIsOpen(false)
                      }}
                    >
                      <LogOutIcon className="mr-2 h-4 w-4" />
                      Log out
                    </Button>
                  ) : (
                    <Button
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                      onClick={() => {
                        handleLogin()
                        setIsOpen(false)
                      }}
                    >
                      Login
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
