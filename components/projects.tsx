"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

type Project = {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
  category: string
}

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce platform with product catalog, shopping cart, and secure checkout functionality.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React.js", "Node.js", "MongoDB", "Express"],
      demoUrl: "#",
      githubUrl: "#",
      category: "web",
    },
    {
      id: 2,
      title: "Corporate Website Redesign",
      description:
        "Complete redesign of a corporate website with improved UI/UX, responsive design, and performance optimization.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      demoUrl: "#",
      githubUrl: "#",
      category: "web",
    },
    {
      id: 3,
      title: "Inventory Management System",
      description: "A web-based inventory management system for tracking products, orders, and generating reports.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React.js", "MySQL", "Express", "Node.js"],
      demoUrl: "#",
      githubUrl: "#",
      category: "app",
    },
    {
      id: 4,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creative professionals to showcase their work.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "#",
      githubUrl: "#",
      category: "web",
    },
    {
      id: 5,
      title: "Task Management App",
      description:
        "A task management application with features like task creation, assignment, progress tracking, and notifications.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React.js", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
      category: "app",
    },
    {
      id: 6,
      title: "Restaurant Booking System",
      description: "An online reservation system for restaurants with table management and customer notifications.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      demoUrl: "#",
      githubUrl: "#",
      category: "web",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Websites" },
    { value: "app", label: "Applications" },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={filter === category.value ? "default" : "outline"}
                  onClick={() => setFilter(category.value)}
                  className="rounded-full"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="opacity-100 transform-none">
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
