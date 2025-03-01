'use client';

// import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, Moon,Sun, User } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  Sheet,
  // SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {

    const { setTheme } = useTheme()

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white dark:bg-gray-900 relative">
      {/* Logo and Hamburger Menu */}


      <Sheet key="top">
      <SheetTrigger asChild>
      <Button variant="ghost" className='md:hidden'>
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>ZYNEX</SheetTitle>
          <SheetDescription>
           {" Shipping at it's finest "}
          </SheetDescription>
        </SheetHeader>
          {/* Mobile Navigation Menu */}
      <div className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center py-4 space-y-4 transition-transform duration-300`}>
        <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" >Home</Link>
        <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" >About</Link>
        <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" >Services</Link>
        <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" >Contact</Link>
      </div>
       <SheetFooter>
          hello
        </SheetFooter>
      </SheetContent>
    </Sheet>







      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold text-gray-900 dark:text-white">ZYNEX</div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">Home</Link>
        <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">About</Link>
        <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">Services</Link>
        <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">Contact</Link>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-4">
        {/* dark mode toggle */}
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </nav>
  );
}
