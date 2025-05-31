"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Facial Expression Recognition (CNN)",
      date: "Apr 2025",
      description:
        "Developed a deep learning model to classify facial expressions into categories like happy, sad, angry, etc. Used image preprocessing, class balancing, and convolutional architecture.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
      category: "Deep Learning",
    },
    {
      title: "ASL Gesture Recognition",
      date: "Apr 2025",
      description:
        "Implemented a CNN model to recognize ASL alphabets from RGB images. Enabled real-time ASL recognition from webcam feed using OpenCV for hands-on gesture interaction.",
      technologies: ["Python", "PyTorch", "OpenCV"],
      category: "Computer Vision",
    },
    {
      title: "YOLOv5 Object Detection: Apple Detection",
      date: "Mar 2025",
      description:
        "Trained a YOLOv5 model on a custom apple dataset for object detection. Deployed model locally and visualized predictions using Streamlit.",
      technologies: ["Python", "YOLOv5", "OpenCV", "Streamlit"],
      category: "Object Detection",
    },
    {
      title: "Customer Credit Scoring and Loan Default Predictions",
      date: "Feb 2025",
      description:
        "Developed an ML system to predict credit scores (regression) and loan default risk (classification).",
      technologies: ["Python", "scikit-learn", "pandas", "Matplotlib"],
      category: "Machine Learning",
    },
    {
      title: "Cat and Dog Classification",
      date: "Sep 2024",
      description:
        "Developed classification model to differentiate between cats and dogs using the Cats vs Dogs dataset. Applied convolutional neural networks (CNNs) for feature extraction and image classification.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
      category: "Image Classification",
    },
    {
      title: "Spam Email Detection",
      date: "Sep 2024",
      description:
        "Developed a classification model to distinguish between spam and non-spam emails. Utilized Natural Language Processing (NLP) techniques for feature extraction and text preprocessing.",
      technologies: ["Python", "scikit-learn", "pandas", "WordCloud"],
      category: "NLP",
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
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my AI/ML projects and technical implementations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="mb-2">
                        {project.category}
                      </Badge>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* <div className="flex space-x-2 pt-2"> */}
                        {/* <Button variant="outline" size="sm" className="flex-1">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </Button> */}
                      {/* </div> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
