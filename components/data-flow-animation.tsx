"use client"

import { useEffect, useState } from "react"

export function DataFlowAnimation() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-surface-base border-y border-border-default">
      <div className="container-clade mx-auto px-6">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          {/* Input Documents */}
          <div className="flex flex-col gap-4">
            {/* Spreadsheet */}
            <div
              className={`w-48 h-56 bg-surface-elevated border border-border-default rounded-lg p-4 transition-all duration-500 ${
                activeStep >= 1 ? "opacity-50 scale-95" : "opacity-100"
              }`}
            >
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-border-subtle">
                <div className="h-2 w-16 bg-content-tertiary rounded" />
                <div className="h-2 w-2 bg-content-tertiary rounded" />
              </div>
              <div className="space-y-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex gap-2">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="h-2 flex-1 bg-muted rounded" />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Document */}
            <div
              className={`w-48 h-56 bg-surface-elevated border border-border-default rounded-lg p-4 transition-all duration-500 ${
                activeStep >= 1 ? "opacity-50 scale-95" : "opacity-100"
              }`}
            >
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-border-subtle">
                <div className="h-2 w-20 bg-content-tertiary rounded" />
              </div>
              <div className="space-y-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-1">
                    <div className="h-2 w-full bg-muted rounded" />
                    <div className="h-2 w-full bg-muted rounded" />
                    <div className="h-2 w-3/4 bg-muted rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Processing Arrow */}
          <div className="hidden md:flex flex-col items-center">
            <svg
              width="48"
              height="24"
              viewBox="0 0 48 24"
              fill="none"
              className={`transition-opacity duration-500 ${activeStep >= 1 ? "opacity-100" : "opacity-20"}`}
            >
              <path
                d="M1 12H47M47 12L36 1M47 12L36 23"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brand-primary"
              />
            </svg>
          </div>

          {/* Processing Center */}
          <div className="flex flex-col items-center">
            <div
              className={`w-32 h-32 bg-surface-elevated border-2 rounded-lg flex items-center justify-center transition-all duration-500 ${
                activeStep === 1 || activeStep === 2 ? "border-brand-primary scale-105" : "border-border-default"
              }`}
            >
              <div className="w-16 h-16 bg-brand-primary rounded-lg flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className={`transition-transform duration-500 ${
                    activeStep === 1 || activeStep === 2 ? "rotate-180" : ""
                  }`}
                >
                  <rect x="4" y="4" width="10" height="10" fill="white" />
                  <rect x="18" y="4" width="10" height="10" fill="white" opacity="0.6" />
                  <rect x="4" y="18" width="10" height="10" fill="white" opacity="0.6" />
                  <rect x="18" y="18" width="10" height="10" fill="white" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Output Arrow */}
          <div className="hidden md:flex flex-col items-center">
            <svg
              width="48"
              height="24"
              viewBox="0 0 48 24"
              fill="none"
              className={`transition-opacity duration-500 ${activeStep >= 2 ? "opacity-100" : "opacity-20"}`}
            >
              <path
                d="M1 12H47M47 12L36 1M47 12L36 23"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brand-primary"
              />
            </svg>
          </div>

          {/* Structured Output */}
          <div className="flex flex-col gap-3">
            {/* Figure Output */}
            <div
              className={`w-56 bg-surface-elevated border border-border-default rounded-lg p-3 transition-all duration-500 ${
                activeStep >= 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-brand-accent rounded flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                    <rect width="12" height="12" rx="1" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-white bg-brand-accent px-2 py-0.5 rounded">Figure</span>
              </div>
              <div className="h-16 bg-surface-muted border border-border-subtle rounded" />
            </div>

            {/* Table Output */}
            <div
              className={`w-56 bg-surface-elevated border border-border-default rounded-lg p-3 transition-all duration-500 delay-100 ${
                activeStep >= 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-chart-2 rounded flex items-center justify-center">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="white">
                    <rect width="12" height="2" />
                    <rect y="6" width="12" height="2" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-white bg-chart-2 px-2 py-0.5 rounded">table</span>
              </div>
              <div className="space-y-1">
                <div className="flex gap-1">
                  <div className="flex-1 h-3 bg-surface-muted border border-border-subtle rounded" />
                  <div className="flex-1 h-3 bg-surface-muted border border-border-subtle rounded" />
                  <div className="flex-1 h-3 bg-surface-muted border border-border-subtle rounded" />
                </div>
                <div className="flex gap-1">
                  <div className="flex-1 h-3 bg-surface-muted border border-border-subtle rounded" />
                  <div className="flex-1 h-3 bg-surface-muted border border-border-subtle rounded" />
                  <div className="flex-1 h-3 bg-surface-muted border border-border-subtle rounded" />
                </div>
              </div>
            </div>

            {/* Caption Output */}
            <div
              className={`w-56 bg-surface-elevated border border-border-default rounded-lg p-3 transition-all duration-500 delay-200 ${
                activeStep >= 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-chart-1 rounded flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                    <rect width="10" height="1" />
                    <rect y="3" width="10" height="1" />
                    <rect y="6" width="6" height="1" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-white bg-chart-1 px-2 py-0.5 rounded">caption</span>
              </div>
              <div className="space-y-1">
                <div className="h-2 w-full bg-surface-muted rounded" />
                <div className="h-2 w-full bg-surface-muted rounded" />
                <div className="h-2 w-3/4 bg-surface-muted rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
