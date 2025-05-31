"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>© 2024 Abdul Jabbar Ahamed Shahmi.</span>
            {/* <Heart className="w-4 h-4 text-red-500 fill-current" /> */}
            {/* <span>and Next.js</span> */}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
