'use client'

import { useRef } from 'react'
import { Github, Linkedin, Instagram, Mail, ChevronRight, Code, Database, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  const aboutRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">Jane Doe</h1>
          <p className="text-2xl text-blue-300 mb-8 animate-fade-in-up animation-delay-300">Back-End Sorcerer</p>
          <div className="flex justify-center space-x-4 mb-8">
            <Card className="bg-white/10 backdrop-blur-md p-4 animate-fade-in-up animation-delay-600">
              <Code className="h-8 w-8 text-blue-400 mb-2" />
              <p className="text-sm">Code Architect</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md p-4 animate-fade-in-up animation-delay-700">
              <Database className="h-8 w-8 text-green-400 mb-2" />
              <p className="text-sm">Data Wizard</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md p-4 animate-fade-in-up animation-delay-800">
              <Server className="h-8 w-8 text-purple-400 mb-2" />
              <p className="text-sm">Server Sage</p>
            </Card>
          </div>
          <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-900">
            <Button 
              onClick={() => scrollToSection(aboutRef)}
              className="bg-white text-purple-800 hover:bg-blue-100"
            >
              About Me
            </Button>
            <Button 
              onClick={() => scrollToSection(contactRef)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                <p className="text-gray-300">
                  With 5 years of experience in the digital realm, I've mastered the art of crafting robust and scalable back-end solutions. 
                  My code doesn't just run; it dances elegantly through servers, optimizing performance and solving complex puzzles.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><ChevronRight className="mr-2 h-4 w-4 text-blue-400" /> Node.js Virtuoso</li>
                  <li className="flex items-center"><ChevronRight className="mr-2 h-4 w-4 text-blue-400" /> Python Enchanter</li>
                  <li className="flex items-center"><ChevronRight className="mr-2 h-4 w-4 text-blue-400" /> Database Architect</li>
                  <li className="flex items-center"><ChevronRight className="mr-2 h-4 w-4 text-blue-400" /> API Alchemist</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <Card className="bg-white/10 backdrop-blur-md">
            <CardContent className="p-6">
              <form className="space-y-4">
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-white/30 border-white/50 text-white placeholder-gray-200" 
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/30 border-white/50 text-white placeholder-gray-200" 
                />
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-white/30 border-white/50 text-white placeholder-gray-200" 
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
          <p className="mt-4 text-center text-gray-400">© 2024 Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}