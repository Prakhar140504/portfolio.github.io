"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Calendar, BadgeIcon as Certificate, CheckCircle, Medal, Star, Trophy } from "lucide-react"

type Achievement = {
  id: string
  title: string
  description: string
  date: string
  icon: JSX.Element
  category: "professional" | "academic" | "personal"
}

type Certification = {
  id: string
  name: string
  issuer: string
  date: string
  expiry?: string
  credentialId?: string
  skills: string[]
  icon: JSX.Element
}

export default function Achievements() {
  const [activeTab, setActiveTab] = useState("all")

  const achievements: Achievement[] = [
    {
      id: "ach1",
      title: "Team Leadership Award",
      description:
        "Led a team at Global Copper Pvt. Ltd that optimized web development processes, achieving high client satisfaction.",
      date: "July 2022",
      icon: <Trophy className="h-5 w-5" />,
      category: "professional",
    },
    {
      id: "ach2",
      title: "Web Development Excellence",
      description: "Successfully delivered 15+ responsive websites with improved UI/UX and performance optimization.",
      date: "2022 - Present",
      icon: <Award className="h-5 w-5" />,
      category: "professional",
    },
    {
      id: "ach3",
      title: "German Language Proficiency",
      description:
        "Completed German language studies at Parul University, enhancing ability to communicate in diverse environments.",
      date: "December 2023",
      icon: <BookOpen className="h-5 w-5" />,
      category: "academic",
    },
    {
      id: "ach4",
      title: "IT Troubleshooting Specialist",
      description: "Recognized for exceptional hardware troubleshooting skills during internship at RR Kabel Limited.",
      date: "August 2024",
      icon: <CheckCircle className="h-5 w-5" />,
      category: "professional",
    },
    {
      id: "ach5",
      title: "Computer Engineering Diploma",
      description: "Successfully completed Diploma in Computer Science and Technology from Parul University.",
      date: "August 2022",
      icon: <Medal className="h-5 w-5" />,
      category: "academic",
    },
  ]

  const certifications: Certification[] = [
    {
      id: "cert1",
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "January 2023",
      credentialId: "CERT-1234-ABCD",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      icon: <Certificate className="h-5 w-5" />,
    },
    {
      id: "cert2",
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "March 2023",
      credentialId: "CERT-5678-EFGH",
      skills: ["JavaScript", "ES6", "Algorithms", "Data Structures"],
      icon: <Certificate className="h-5 w-5" />,
    },
    {
      id: "cert3",
      name: "German Language A1 Level",
      issuer: "Parul University",
      date: "December 2023",
      skills: ["German", "Communication", "Language Proficiency"],
      icon: <Certificate className="h-5 w-5" />,
    },
    {
      id: "cert4",
      name: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      date: "May 2023",
      credentialId: "CERT-9012-IJKL",
      skills: ["React", "Redux", "Bootstrap", "SASS"],
      icon: <Certificate className="h-5 w-5" />,
    },
  ]

  const filteredAchievements =
    activeTab === "all"
      ? achievements
      : activeTab === "certifications"
        ? []
        : achievements.filter((achievement) => achievement.category === activeTab)

  const filteredCertifications = activeTab === "all" || activeTab === "certifications" ? certifications : []

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="all" className="px-4 py-2">
                  All
                </TabsTrigger>
                <TabsTrigger value="professional" className="px-4 py-2">
                  Professional
                </TabsTrigger>
                <TabsTrigger value="academic" className="px-4 py-2">
                  Academic
                </TabsTrigger>
                <TabsTrigger value="certifications" className="px-4 py-2">
                  Certifications
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              {filteredAchievements.length > 0 && (
                <div className="mb-12">
                  {activeTab !== "certifications" && (
                    <h3 className="text-2xl font-bold mb-8 text-center">Key Achievements</h3>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAchievements.map((achievement) => (
                      <div key={achievement.id} className="animate-fade-in">
                        <Card className="h-full hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div className="p-2 rounded-full bg-primary/10 text-primary">{achievement.icon}</div>
                              <Badge variant="outline" className="text-xs">
                                <Calendar className="h-3 w-3 mr-1" />
                                {achievement.date}
                              </Badge>
                            </div>
                            <CardTitle className="mt-4">{achievement.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-base">{achievement.description}</CardDescription>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredCertifications.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredCertifications.map((certification) => (
                      <div key={certification.id} className="animate-fade-in">
                        <Card className="h-full hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div className="flex items-center">
                                <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
                                  {certification.icon}
                                </div>
                                <div>
                                  <CardTitle className="text-lg">{certification.name}</CardTitle>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">{certification.issuer}</p>
                                </div>
                              </div>
                              <Badge variant="outline" className="text-xs whitespace-nowrap">
                                <Calendar className="h-3 w-3 mr-1" />
                                {certification.date}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            {certification.credentialId && (
                              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                Credential ID: {certification.credentialId}
                              </p>
                            )}
                            <div className="flex flex-wrap gap-2 mt-2">
                              {certification.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                  <Star className="h-3 w-3 mr-1" />
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
