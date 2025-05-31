"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface CVDownloadProps {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "lg" | "default"
  className?: string
}

export function CVDownload({ variant = "outline", size = "sm", className = "" }: CVDownloadProps) {
  const { toast } = useToast()

  const downloadCV = async () => {
    try {
      // Method 1: Direct download from public folder
      const response = await fetch("/cv/Abdul_Jabbar_CV.pdf")

      if (!response.ok) {
        throw new Error("CV file not found")
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Abdul_Jabbar_Ahamed_Shahmi_CV.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      toast({
        title: "CV Downloaded!",
        description: "Thank you for downloading my CV.",
      })
    } catch (error) {
      toast({
        title: "Download Error",
        description: "Sorry, there was an issue downloading the CV. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={downloadCV}
      className={`flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground transition-colors ${className}`}
    >
      <Download className="w-4 h-4" />
      <span>Download CV</span>
    </Button>
  )
}
