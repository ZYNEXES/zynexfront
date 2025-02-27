'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, Moon, Sun, User } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white dark:bg-gray-900 relative">
      {/* Logo and Hamburger Menu */}


      <Sheet key="top">
      <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(prev => !prev)}>
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
          {/* Mobile Navigation Menu */}
      <div className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden flex flex-col items-center py-4 space-y-4 transition-transform duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>







      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold text-gray-900 dark:text-white">MyBrand</div>
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
        {/* Dark Mode Toggle */}
        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>

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
