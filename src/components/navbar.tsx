"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Truck } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Truck className="h-6 w-6" />
            <span className="font-bold text-xl">ZYNEX</span>
          </Link>
        </div>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/"}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/about"}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/services"
                        >
                          <Truck className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">Shipping Services</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explore our comprehensive range of shipping and logistics solutions.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/services#domestic"
                        >
                          <div className="text-sm font-medium leading-none">Domestic Shipping</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Fast and reliable shipping within the country.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/services#international"
                        >
                          <div className="text-sm font-medium leading-none">International Shipping</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Global shipping solutions to over 200 countries.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/services#specialized"
                        >
                          <div className="text-sm font-medium leading-none">Specialized Services</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Custom solutions for unique shipping needs.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/track" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/tracking"}>
                    Tracking
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/contact"}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 py-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  <Truck className="h-6 w-6" />
                  <span>GlobalShip</span>
                </Link>
                <div className="grid gap-3">
                  <Link
                    href="/"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/tracking"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Tracking
                  </Link>
                  <Link
                    href="/contact"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
                <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                  <Link href="/quote">Get a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

