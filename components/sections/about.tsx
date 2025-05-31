"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

export function About() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about leveraging AI and Machine Learning to solve real-world problems
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="w-48 h-48 mx-auto mb-6 relative">
                    <Image
                      src="/images/profile.jpeg"
                      alt="Abdul Jabbar Ahamed Shahmi"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Abdul Jabbar Ahamed Shahmi</h3>
                  <p className="text-muted-foreground mb-4">AI/ML Engineer & Electrical Engineering Student</p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Phone:</span> (+94) 77 4783 168
                    </p>
                    <p>
                      <span className="font-medium">Email:</span> shahmiahamed0519@gmail.com
                    </p>
                    <p>
                      <span className="font-medium">Location:</span> Sri Lanka
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Profile Description */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="p-6 h-full">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-4">Profile</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Final-year undergraduate in Electrical and Information Engineering, proficient in Artificial
                    Intelligence and Machine Learning, with hands-on experience in supervised learning, deep learning,
                    and traditional ML models. Skilled in using Python, TensorFlow, and scikit-learn to develop and
                    optimize AI models.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Currently working on freshness and ripeness detection and prediction of produce using traditional
                    models. Interested in applying skills through an AI/ML internship focused on real-world impact and
                    research-driven innovation.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <h4 className="text-lg font-semibold">Education</h4>
                      </div>
                      <div>
                        <h5 className="font-medium">Bachelor of Science (Honors)</h5>
                        <p className="text-sm text-muted-foreground">Electrical and Information Engineering</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">University of Ruhuna</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Mar 2021 - Present</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4">Certifications</h4>
                      <div className="space-y-2">
                        <Badge variant="secondary" className="mr-2 mb-2">
                          AI Foundations - LinkedIn Learning
                        </Badge>
                        <Badge variant="secondary" className="mr-2 mb-2">
                          Neural Networks - Analytics Vidhya
                        </Badge>
                        <Badge variant="secondary" className="mr-2 mb-2">
                          Supervised ML - Coursera
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
