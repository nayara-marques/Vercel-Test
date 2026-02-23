"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [fundManagersExpanded, setFundManagersExpanded] = useState(false)
  const [desktopFundManagersExpanded, setDesktopFundManagersExpanded] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-surface-base/95 backdrop-blur supports-[backdrop-filter]:bg-surface-base/60">
      <div className="max-w-[1456px] mx-auto px-5 sm:px-10 2xl:px-0 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary">
            <span className="text-lg font-semibold text-white">C</span>
          </div>
          <span className="text-xl font-semibold text-content-primary">Clade</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-surface-base px-4 py-2 text-sm font-medium text-content-primary transition-colors hover:text-brand-primary focus:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/product" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-surface-base px-4 py-2 text-sm font-medium text-content-primary transition-colors hover:text-brand-primary focus:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50">
                  Product
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[240px] p-2">
                  <li>
                    <Link
                      href="/solutions/allocators"
                      className="block rounded-md px-3 py-2 text-sm font-medium text-content-primary hover:bg-surface-muted transition-colors"
                    >
                      Allocators
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => setDesktopFundManagersExpanded(!desktopFundManagersExpanded)}
                      className="w-full flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-content-primary hover:bg-surface-muted transition-colors"
                    >
                      Fund Managers
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", desktopFundManagersExpanded && "rotate-180")}
                      />
                    </button>
                    {desktopFundManagersExpanded && (
                      <ul className="mt-1 space-y-1 pl-3">
                        <li>
                          <Link
                            href="/solutions/fund-managers/worktools"
                            className="block rounded-md px-3 py-2 text-sm text-content-secondary hover:bg-surface-muted hover:text-content-primary transition-colors"
                          >
                            Worktools
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/fund-managers/marketplace"
                            className="block rounded-md px-3 py-2 text-sm text-content-secondary hover:bg-surface-muted hover:text-content-primary transition-colors"
                          >
                            Marketplace
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link
                      href="/solutions/investment-banks"
                      className="block rounded-md px-3 py-2 text-sm font-medium text-content-primary hover:bg-surface-muted transition-colors"
                    >
                      Investment Banks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/communities"
                      className="block rounded-md px-3 py-2 text-sm font-medium text-content-primary hover:bg-surface-muted transition-colors"
                    >
                      Communities
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] p-2">
                  <li>
                    <Link
                      href="/company/about"
                      className="block rounded-md px-3 py-2 text-sm font-medium text-content-primary hover:bg-surface-muted transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company/blog"
                      className="block rounded-md px-3 py-2 text-sm font-medium text-content-primary hover:bg-surface-muted transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company/faq"
                      className="block rounded-md px-3 py-2 text-sm font-medium text-content-primary hover:bg-surface-muted transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-content-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border-subtle bg-surface-base lg:hidden">
          <nav className="max-w-[1456px] mx-auto px-5 sm:px-10 2xl:px-0 space-y-4 py-4">
            <Link
              href="/"
              className="block rounded-lg px-3 py-2 text-base font-medium text-content-primary hover:bg-surface-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/product"
              className="block rounded-lg px-3 py-2 text-base font-medium text-content-primary hover:bg-surface-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </Link>

            <div className="space-y-2">
              <div className="px-3 text-sm font-semibold text-content-tertiary">Solutions</div>
              <Link
                href="/solutions/allocators"
                className="block rounded-lg px-6 py-2 text-base text-content-secondary hover:bg-surface-muted hover:text-content-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Allocators
              </Link>
              <div>
                <button
                  onClick={() => setFundManagersExpanded(!fundManagersExpanded)}
                  className="w-full flex items-center justify-between rounded-lg px-6 py-2 text-base text-content-secondary hover:bg-surface-muted hover:text-content-primary transition-colors"
                >
                  Fund Managers
                  <ChevronRight className={cn("h-4 w-4 transition-transform", fundManagersExpanded && "rotate-90")} />
                </button>
                {fundManagersExpanded && (
                  <div className="space-y-1 mt-1">
                    <Link
                      href="/solutions/fund-managers/worktools"
                      className="block rounded-lg px-12 py-2 text-sm text-content-tertiary hover:bg-surface-muted hover:text-content-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Worktools
                    </Link>
                    <Link
                      href="/solutions/fund-managers/marketplace"
                      className="block rounded-lg px-12 py-2 text-sm text-content-tertiary hover:bg-surface-muted hover:text-content-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Marketplace
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/solutions/investment-banks"
                className="block rounded-lg px-6 py-2 text-base text-content-secondary hover:bg-surface-muted hover:text-content-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Investment Banks
              </Link>
              <Link
                href="/solutions/communities"
                className="block rounded-lg px-6 py-2 text-base text-content-secondary hover:bg-surface-muted hover:text-content-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Communities
              </Link>
            </div>

            <div className="space-y-2">
              <div className="px-3 text-sm font-semibold text-content-tertiary">Company</div>
              <Link
                href="/company/about"
                className="block rounded-lg px-6 py-2 text-base text-content-secondary hover:bg-surface-muted hover:text-content-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/company/blog"
                className="block rounded-lg px-6 py-2 text-base text-content-secondary hover:bg-surface-muted hover:text-content-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/company/faq"
                className="block rounded-lg px-6 py-2 text-base text-content-secondary hover:bg-surface-muted hover:text-content-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>

            <div className="flex flex-col gap-2 border-t border-border-subtle pt-4">
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-surface-muted focus:bg-surface-muted focus-visible:ring-2 focus-visible:ring-brand-primary",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-content-primary">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-content-secondary">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default Header
