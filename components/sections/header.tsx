"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Download } from "lucide-react"
import { useTheme } from "next-themes"
import { useToast } from "@/hooks/use-toast"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const downloadCV = () => {
    // Your actual Google Drive direct download link
    const cvUrl = "https://drive.google.com/uc?export=download&id=1hi9DuMIm3gZMR-soWT65VN3PKCHmLTUP"

    // Create a temporary link and trigger download
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = "Abdul_Jabbar_Ahamed_Shahmi_CV.pdf"
    link.target = "_blank"
    link.rel = "noopener noreferrer"

    // Add to DOM, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      title: "CV Download Started!",
      description: "Your professional PDF CV is being downloaded.",
    })
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Ahamed Shahmi
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={downloadCV}
              className="hidden sm:flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </Button>

            <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-border"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMobileMenuOpen(false)
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={downloadCV}
                className="flex items-center space-x-2 w-fit hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
