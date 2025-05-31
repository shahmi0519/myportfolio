"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional experience and internships that shaped my technical journey
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-purple-600"></div>
              <CardHeader className="pl-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">Internship</CardTitle>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Building className="w-4 h-4" />
                      <span>Sri Lanka Rupavahini Corporation</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Oct 2023 – Jan 2024</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Sri Lanka</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-8">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Completed a 3-month internship focusing on Telecommunications, ICT, and Network infrastructure.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-sm">
                        Gained practical experience with network and system infrastructure, configurations, and
                        communication protocols.
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-sm">
                        Collaborated with engineering teams, enhancing professional communication and problem-solving
                        skills.
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-sm">
                        Strengthened technical foundations that now support my transition into AI/ML-focused projects.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-medium mb-2">Key Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Telecommunications</Badge>
                      <Badge variant="secondary">ICT</Badge>
                      <Badge variant="secondary">Network Infrastructure</Badge>
                      <Badge variant="secondary">System Configuration</Badge>
                      <Badge variant="secondary">Communication Protocols</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
