import Image from "next/image"
import ResumeDownloadButton from "./resume-download-button"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Prakharkumar Parmar"
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Prakharkumar Parmar</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Web Developer with experience in creating responsive websites and applications.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                At Global Copper Pvt. Ltd, I led a team that optimized web development processes, achieving high client
                satisfaction through strategic leadership and collaboration. Currently, as a freelancer and at Knowledge
                Square LLP, I am committed to providing innovative web solutions by leveraging my skills in JavaScript,
                React.js, and responsive web design.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                My pursuit of German language studies at Parul University enhances my ability to communicate in diverse
                environments, complementing my technical expertise. With a strong foundation in computer engineering, I
                am dedicated to driving digital transformations that deliver growth and client success.
              </p>

              <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6">
                <h3 className="text-xl font-bold mb-4">Resume</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Download my resume to learn more about my education, work experience, and skills.
                </p>
                <ResumeDownloadButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
