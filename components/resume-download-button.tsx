"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { getAssetPath } from "@/lib/github-pages"

export default function ResumeDownloadButton() {
  const { toast } = useToast()
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

    // Show toast notification
    toast({
      title: "Resume download started",
      description: "Your download should begin automatically.",
    })

    // Reset the downloading state after a short delay
    setTimeout(() => {
      setIsDownloading(false)
    }, 2000)
  }

  const resumePath = getAssetPath("/resume-prakharkumar-parmar.pdf")

  return (
    <Button asChild variant="outline" className="gap-2" onClick={handleDownload} disabled={isDownloading}>
      <Link href={resumePath} download="Prakharkumar_Parmar_Resume.pdf" target="_blank" rel="noopener noreferrer">
        {isDownloading ? (
          <>
            <Check className="h-4 w-4" /> Downloading...
          </>
        ) : (
          <>
            <FileText className="h-4 w-4" /> Download Resume
          </>
        )}
      </Link>
    </Button>
  )
}
