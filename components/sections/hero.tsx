"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-40 h-40 mx-auto mb-8 relative">
            <motion.div
              className="w-full h-full rounded-full bg-gradient-to-br from-primary to-purple-600 p-1"
              // animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <Image
                  src="/images/profile.jpeg"
                  alt="Abdul Jabbar Ahamed Shahmi"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AHAMED SHAHMI
          </span>
          <br />
          <span className="text-muted-foreground text-2xl md:text-4xl lg:text-5xl">ABDUL JABBAR</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          AI/ML Engineer & Final-year Electrical Engineering Student
          <br />
          <span className="text-lg">Passionate about Machine Learning, Deep Learning & Computer Vision</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/shahmi0519" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/ahamed-shahmi-abduljabbar/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
