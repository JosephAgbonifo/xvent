"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Monitor } from "lucide-react"

type Theme = "light" | "middle" | "dark"

export default function Home() {
  const [selected, setSelected] = useState<number>(10)
  const [loading, setLoading] = useState(false)
  const [theme, setTheme] = useState<Theme>("light")

  const donationTiers = [10, 50, 100]

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.remove("light", "middle", "dark")
      document.documentElement.classList.add(savedTheme)
    }
  }, [])

  const setThemeValue = (newTheme: Theme) => {
    setTheme(newTheme)
    document.documentElement.classList.remove("light", "middle", "dark")
    document.documentElement.classList.add(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  async function handleDonate() {
    try {
      setLoading(true)

      const res = await fetch("/api/auth/xaman/create-payload/xahau-payload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: selected }),
      })

      if (!res.ok) {
        console.error("Failed to create payload:", await res.text())
        alert("Error preparing transaction.")
        return
      }

      const data = await res.json()
      console.log("Payload created:", data)

      const nextUrl = data?.nextUrl
      if (nextUrl) {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        if (isMobile) window.location.href = nextUrl
        else window.open(nextUrl, "_blank")
      } else {
        alert("Missing Xaman redirect URL")
      }
    } catch (err) {
      console.error("Donation error:", err)
      alert("Donation failed. Check console.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-background transition-colors duration-200">
      {/* Theme Switcher */}
      <div className="fixed top-6 right-6 flex gap-1 rounded-lg border border-border bg-card p-1">
        <button
          onClick={() => setThemeValue("light")}
          className={`rounded-md p-2 transition-colors ${
            theme === "light" ? "bg-foreground text-background" : "hover:bg-muted"
          }`}
          aria-label="Light theme"
        >
          <Sun className="h-4 w-4" />
        </button>
        <button
          onClick={() => setThemeValue("middle")}
          className={`rounded-md p-2 transition-colors ${
            theme === "middle" ? "bg-foreground text-background" : "hover:bg-muted"
          }`}
          aria-label="Middle theme"
        >
          <Monitor className="h-4 w-4" />
        </button>
        <button
          onClick={() => setThemeValue("dark")}
          className={`rounded-md p-2 transition-colors ${
            theme === "dark" ? "bg-foreground text-background" : "hover:bg-muted"
          }`}
          aria-label="Dark theme"
        >
          <Moon className="h-4 w-4" />
        </button>
      </div>

      {/* Donate Form Card */}
      <div className="w-full max-w-sm rounded-xl border border-border bg-card p-8">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-semibold text-foreground">Donate to xBase</h1>
          <p className="mt-1 text-sm text-muted-foreground">Support open-source on Xahau</p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Donation tiers */}
          <div className="flex gap-2">
            {donationTiers.map((tier) => (
              <motion.button
                key={tier}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(tier)}
                className={`flex-1 rounded-lg border py-2 text-sm font-medium transition-colors ${
                  selected === tier
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-foreground hover:bg-muted"
                }`}
              >
                {tier} XAH
              </motion.button>
            ))}
          </div>

          {/* Action */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            onClick={handleDonate}
            className="mt-2 w-full rounded-lg bg-foreground py-2.5 font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Preparing..." : `Donate ${selected} XAH via Xaman`}
          </motion.button>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Powered by{" "}
          <a href="https://xmerch.app" target="_blank" rel="noopener noreferrer" className="underline">
            xMerch
          </a>
        </p>

        {/* Partner Icons */}
        <div className="mt-4 flex items-center justify-center gap-6">
          <a
            href="https://xaman.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Xaman Wallet"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="6" width="18" height="13" rx="2" />
              <path d="M3 10h18" />
              <circle cx="7" cy="14" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://xahau.network"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Xahau Network"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="5" r="2" />
              <circle cx="5" cy="19" r="2" />
              <circle cx="19" cy="19" r="2" />
              <path d="M12 7v4m0 0l-5 6m5-6l5 6" />
            </svg>
          </a>
          <a
            href="https://evernode.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Evernode"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M8 8h2m4 0h2M8 12h2m4 0h2M8 16h2m4 0h2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
