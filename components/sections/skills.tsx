"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Database, Wrench, Users, Lightbulb } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C/C++", "JavaScript", "HTML", "CSS"],
      color: "text-blue-500",
    },
    {
      title: "AI/ML Libraries & Frameworks",
      icon: Brain,
      skills: ["PyTorch", "TensorFlow", "OpenCV", "Scikit-learn", "Streamlit"],
      color: "text-purple-500",
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Google Colab", "VS Code", "Hugging Face", "Jupyter Notebook"],
      color: "text-green-500",
    },
    {
      title: "AI/ML Concepts",
      icon: Database,
      skills: ["Machine Learning", "Convolutional Neural Networks", "Transfer Learning", "Model Deployment"],
      color: "text-orange-500",
    },
    {
      title: "Professional Skills",
      icon: Users,
      skills: ["Team Player", "Communication", "Interpersonal Skills", "Project Management", "Self-Motivated"],
      color: "text-pink-500",
    },
    {
      title: "Creative Skills",
      icon: Lightbulb,
      skills: ["Creative Problem Solving", "Creative Writing", "Prototyping", "Workload Balancing"],
      color: "text-cyan-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technical skills and professional competencies I've developed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="secondary"
                              className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
