import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Layers, PenTool, Server, Settings, Smartphone, Terminal } from "lucide-react"

type Skill = {
  name: string
  level: number
  icon: React.ReactNode
  category: string
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "HTML5", level: 90, icon: <Globe className="h-6 w-6" />, category: "frontend" },
    { name: "CSS3", level: 85, icon: <Layout className="h-6 w-6" />, category: "frontend" },
    { name: "JavaScript", level: 80, icon: <Code className="h-6 w-6" />, category: "frontend" },
    { name: "React.js", level: 85, icon: <Layers className="h-6 w-6" />, category: "frontend" },
    { name: "Responsive Design", level: 90, icon: <Smartphone className="h-6 w-6" />, category: "frontend" },
    { name: "PHP", level: 75, icon: <Server className="h-6 w-6" />, category: "backend" },
    { name: "MySQL", level: 70, icon: <Database className="h-6 w-6" />, category: "backend" },
    { name: "Node.js", level: 65, icon: <Terminal className="h-6 w-6" />, category: "backend" },
    { name: "Graphic Design", level: 60, icon: <PenTool className="h-6 w-6" />, category: "design" },
    { name: "Troubleshooting", level: 80, icon: <Settings className="h-6 w-6" />, category: "other" },
  ]

  const categories = [
    { id: "frontend", name: "Frontend Development" },
    { id: "backend", name: "Backend Development" },
    { id: "design", name: "Design" },
    { id: "other", name: "Other Skills" },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="space-y-16">
            {categories.map((category) => {
              const categorySkills = skills.filter((skill) => skill.category === category.id)

              if (categorySkills.length === 0) return null

              return (
                <div key={category.id}>
                  <h3 className="text-2xl font-bold mb-8 text-center">{category.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="opacity-100 transform-none">
                        <Card className="h-full">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="p-2 rounded-full bg-primary/10 text-primary">{skill.icon}</div>
                              <h4 className="text-lg font-medium">{skill.name}</h4>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                              <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                            </div>
                            <div className="mt-2 text-right text-sm text-gray-600 dark:text-gray-400">
                              {skill.level}%
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
