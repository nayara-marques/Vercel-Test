import Link from "next/link"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background">
      <div className="max-w-[1456px] mx-auto px-5 sm:px-10 2xl:px-0">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo and tagline section */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary transition-transform group-hover:scale-105">
                <span className="text-lg font-semibold text-white">C</span>
              </div>
              <span className="text-xl font-semibold text-content-primary">Clade</span>
            </Link>
            <p className="text-sm text-content-secondary leading-relaxed max-w-xs">
              The operating system for investment work.
            </p>
          </div>

          {/* Product */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-content-primary tracking-wide">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/product"
                  className="text-sm text-content-secondary hover:text-content-primary transition-colors inline-block"
                >
                  Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-content-primary tracking-wide">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/solutions/allocators"
                  className="text-sm text-content-secondary hover:text-content-primary transition-colors inline-block"
                >
                  Allocators
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/fund-managers"
                  className="text-sm text-content-secondary hover:text-content-primary transition-colors inline-block"
                >
                  Fund Managers
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/investment-banks"
                  className="text-sm text-content-secondary hover:text-content-primary transition-colors inline-block"
                >
                  Investment Banks
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/communities"
                  className="text-sm text-content-secondary hover:text-content-primary transition-colors inline-block"
                >
                  Communities
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-content-primary tracking-wide">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/platform/privacy-policy"
                  className="text-sm text-content-secondary hover:text-content-primary transition-colors inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/platform/terms-of-service"
                  className="text-sm text-content-secondary hover:text-content-primary transition-colors inline-block"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/platform/accessibility"
                  className="text-sm text-content-secondary hover:text-content-primary transition-colors inline-block"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/platform/security"
                  className="text-sm text-content-secondary hover:text-content-primary transition-colors inline-block"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-content-primary tracking-wide">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/company/about"
                  className="text-sm text-content-secondary hover:text-content-primary transition-colors inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/company/blog"
                  className="text-sm text-content-secondary hover:text-content-primary transition-colors inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/company/faq"
                  className="text-sm text-content-secondary hover:text-content-primary transition-colors inline-block"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/company/contact"
                  className="text-sm text-content-secondary hover:text-content-primary transition-colors inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with improved layout */}
        <div className="border-t border-border-subtle py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Link
                href="https://www.linkedin.com/company/clade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-content-secondary hover:text-content-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <p className="text-sm text-content-secondary">
                &copy; {new Date().getFullYear()} Clade, Inc. All rights reserved.
              </p>
            </div>

            <div className="flex items-center justify-center h-11 w-11 rounded-full bg-blue-600 shadow-sm">
              <div className="text-white text-[9px] font-bold text-center leading-tight">
                AICPA
                <br />
                SOC
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
