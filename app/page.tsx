"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Database,
  BarChart3,
  Code2,
  Award,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Menu,
  X,
  TrendingUp,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "certifications",
        "achievements",
        "contact",
      ]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://formspree.io/f/mjkajrpr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ]

  const skills = {
    technical: ["SQL", "Python", "Statistics", "ETL", "Data Cleaning", "Preprocessing", "Basic ML"],
    tools: ["Power BI", "Tableau", "Excel", "PostgreSQL", "MySQL"],
    soft: ["Communication", "Problem Solving", "Analytical Thinking", "Teamwork"],
  }

  const projects = [
    {
      title: "Global Travel and Holiday Trends",
      description:
        "Built Power BI dashboards with Streamlit integration analyzing global travel data, reducing reporting time by 50%.",
      tools: ["Power BI", "Streamlit", "Python"],
      link: "https://github.com/PranavRaskar/Global-Food-Production-Trends-and-Analysis-A-Comprehensive-Study-from-1961-to-2023-Using-Power-BI", // Replace with your actual project link
      image: "/travel-dashboard-analytics.jpg",
    },
    {
      title: "Olympics SQL Analysis",
      description:
        "Comprehensive SQL-based analysis of Olympic medal data and athlete performance metrics across multiple years.",
      tools: ["SQL", "PostgreSQL", "Data Analysis"],
      link: "https://github.com/PranavRaskar/Olympic-SQL-", // Replace with your actual project link
      image: "/olympics-data-visualization.jpg",
    },
    {
      title: "Uber Trip Analysis Dashboard",
      description:
        "Interactive Power BI dashboard tracking trip patterns, peak hours, and revenue KPIs for ride-sharing data.",
      tools: ["Power BI", "DAX", "Data Modeling"],
      link: "https://pranavraskar.github.io/Uber-Trip-Analysis-Power-Bi/", // Replace with your actual project link
      image: "/uber-trip-dashboard.jpg",
    },
    {
      title: "HR Analytics Dashboard",
      description: "DAX-driven insights dashboard for employee retention analysis and workforce planning.",
      tools: ["Power BI", "DAX", "HR Analytics"],
      link: "https://github.com/PranavRaskar/HR-Analysis-", // Replace with your actual project link
      image: "/hr-analytics-dashboard.jpg",
    },
    {
      title: "Global Food Production Trends",
      description:
        "Time-series visualization analyzing global food production patterns using advanced Power BI techniques.",
      tools: ["Power BI", "Time Series", "Data Visualization"],
      link: "https://github.com/PranavRaskar", // Replace with your actual project link
      image: "/food-production-trends.jpg",
    },
    // TO ADD MORE PROJECTS: Copy the object above and paste here, then update the values:
    // {
    //   title: "Your New Project Title",
    //   description: "Description of your project and key insights",
    //   tools: ["Tool1", "Tool2", "Tool3"],
    //   link: "https://github.com/YourUsername/project-link",
    //   image: "/your-project-image.jpg",
    // },
  ]

  const certifications = [
    {
      name: "Python for Data Science",
      issuer: "NPTEL - IIT Madras",
      icon: Code2,
      link: "", // PASTE YOUR GOOGLE DRIVE LINK HERE (e.g., "https://drive.google.com/file/d/YOUR_FILE_ID/view")
    },
    {
      name: "Power BI - DAX & Data Modeling",
      issuer: "NASSCOM FuturePrime",
      icon: BarChart3,
      link: "", // PASTE YOUR GOOGLE DRIVE LINK HERE
    },
    {
      name: "Azure AI Fundamentals",
      issuer: "Microsoft Certified",
      icon: Award,
      link: "", // PASTE YOUR GOOGLE DRIVE LINK HERE
    },
    {
      name: "Data Analytics Certification",
      issuer: "Google Cloud",
      icon: Database,
      link: "", // PASTE YOUR GOOGLE DRIVE LINK HERE
    },
    {
      name: "Data Visualization",
      issuer: "Infosys Springboard",
      icon: BarChart3,
      link: "", // PASTE YOUR GOOGLE DRIVE LINK HERE
    },
    {
      name: "Data Analytics Training",
      issuer: "Techtip24",
      icon: Award,
      link: "", // PASTE YOUR GOOGLE DRIVE LINK HERE
    },
    // TO ADD MORE CERTIFICATIONS: Copy the object above and paste here, then update the values:
    // {
    //   name: "Your Certification Name",
    //   issuer: "Issuing Organization",
    //   icon: Award, // Choose from: Code2, BarChart3, Award, Database, PieChart, LineChart
    //   link: "", // PASTE YOUR GOOGLE DRIVE LINK HERE
    // },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-sky-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-lg border-b border-cyan-500/20" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                PR
              </div>
              <div className="hidden sm:flex items-center gap-1 text-cyan-400/60 text-xs">
                <BarChart3 size={14} />
                <span>Data Analyst</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-cyan-400">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
            <TrendingUp size={16} />
            <span>Data-Driven Insights & Analytics</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent animate-gradient text-balance">
            Hi, I'm Pranav Raskar
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
            Data Analyst | Transforming Data into Insights
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about uncovering patterns in data and building interactive dashboards that drive business
            decisions. Specialized in SQL, Python, Power BI, and Tableau to transform complex datasets into actionable
            insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <BarChart3 className="mr-2" size={20} />
              View My Projects
            </Button>
            <Button
              variant="outline"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-xl transition-all duration-300 bg-transparent"
              asChild
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1rN2Dt077qyA99W11d1jYzCVUwWrRFCKk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="bg-slate-900/50 backdrop-blur-sm border-cyan-500/20 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="aspect-square rounded-2xl overflow-hidden relative group">
                <img
                  src="/profile-pranav.jpg"
                  alt="Pranav Raskar - Data Analyst"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I’m a data-driven problem solver passionate about transforming complex data into meaningful insights. 
                With hands-on experience in data visualization, statistical analysis, and business intelligence, 
                I specialize in creating interactive dashboards that turn raw data into actionable stories.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Currently pursuing a BTech. in Computer Engineering at Dr. D.Y. Patil University, Pune, and 
                have gained international exposure through a student mobility program at INTI International University, Malaysia.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-cyan-500/20">
                  <GraduationCap className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-cyan-400 mb-1">Dr. D.Y. Patil University</h3>
                    <p className="text-slate-400 text-sm">BTech. in Computer Engineering (2021–2026)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-sky-500/20">
                  <GraduationCap className="text-sky-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-sky-400 mb-1">INTI International University, Malaysia</h3>
                    <p className="text-slate-400 text-sm">Student Mobility Program (Aug 2025– Dec 2025 )</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-900/50 backdrop-blur-sm border-cyan-500/20 p-6 rounded-2xl hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Code2 className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-sm border-sky-500/20 p-6 rounded-2xl hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-sky-500/20 rounded-lg">
                  <Database className="text-sky-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-sky-400">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-sky-500/10 text-sky-400 border-sky-500/30 hover:bg-sky-500/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-sm border-cyan-500/20 p-6 rounded-2xl hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <BarChart3 className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            <Card className="bg-slate-900/50 backdrop-blur-sm border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg flex-shrink-0">
                  <Briefcase className="text-cyan-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-cyan-400">Data Visualization Intern</h3>
                    <span className="text-sm text-slate-400">Aug 2025 – Oct 2025 </span>
                  </div>
                  <p className="text-sky-400 mb-3">Infosys Springboard</p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                      <span>Built Power BI dashboards analyzing global travel and holiday data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                      <span>Extracted insights for strategic business decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                      <span>Collaborated cross-functionally, showcasing teamwork and analytical thinking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-sm border-sky-500/20 p-8 rounded-2xl hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-500/20 rounded-lg flex-shrink-0">
                  <Briefcase className="text-sky-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-sky-400 mb-2">Data & Business Analytics Trainee</h3>
                  <p className="text-cyan-400 mb-3">Techtip24</p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-sky-400 mt-1 flex-shrink-0" size={16} />
                      <span>Completed 40+ hrs Power BI, 30+ hrs SQL & Tableau training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-sky-400 mt-1 flex-shrink-0" size={16} />
                      <span>Delivered 3 end-to-end projects covering data cleaning, modeling, and visualization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 group"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-sky-500/20 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2 text-balance">{project.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="secondary"
                        className="bg-sky-500/10 text-sky-400 border-sky-500/30 text-xs"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="ml-2" size={16} />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const CertCard = (
                <Card
                  key={index}
                  className={`bg-slate-900/50 backdrop-blur-sm border-cyan-500/20 p-6 rounded-2xl hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 group ${cert.link ? "cursor-pointer" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-sky-500/20 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="text-cyan-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-cyan-400 mb-1 text-balance group-hover:text-sky-400 transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-slate-400">{cert.issuer}</p>
                      {cert.link && (
                        <div className="mt-2 flex items-center gap-1 text-xs text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
                          <ExternalLink size={12} />
                          <span>View Certificate</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              )

              // If link exists, wrap in anchor tag
              return cert.link ? (
                <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                  {CertCard}
                </a>
              ) : (
                CertCard
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="space-y-6">
            <Card className="bg-slate-900/50 backdrop-blur-sm border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🥈</div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                    2nd Prize - NASA Space Apps Challenge PCMC 2024
                  </h3>
                  <p className="text-slate-300">
                    Team Exo-Explore - Recognized for innovative exoplanet exploration project
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-sm border-sky-500/20 p-8 rounded-2xl hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🌍</div>
                <div>
                  <h3 className="text-xl font-semibold text-sky-400 mb-2">Shortlisted for Global-Level Recognition</h3>
                  <p className="text-slate-300">
                    Selected for international recognition in exoplanet exploration research
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-sm border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🎯</div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">Multiple Analytics Projects</h3>
                  <p className="text-slate-300">
                    Completed multiple analytics projects with measurable business insights and impact
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-900/50 backdrop-blur-sm border-cyan-500/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:pranavraskar02@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <span>pranavraskar02@gmail.com</span>
                </a>
                <a
                  href="tel:+918767838326"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                    <Phone className="text-cyan-400" size={20} />
                  </div>
                  <span>+91 87678 38326</span>
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-cyan-500/20 rounded-lg">
                    <MapPin className="text-cyan-400" size={20} />
                  </div>
                  <span>Pimpri Chinchwad Pune, India </span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-sky-400 mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/pranav-raskar-60337525a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-500/20 rounded-lg hover:bg-cyan-500/30 transition-colors"
                  >
                    <Linkedin className="text-cyan-400" size={24} />
                  </a>
                  <a
                    href="https://github.com/PranavRaskar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-500/20 rounded-lg hover:bg-cyan-500/30 transition-colors"
                  >
                    <Github className="text-cyan-400" size={24} />
                  </a>
                  <a
                    href="mailto:pranavraskar02@gmail.com"
                    className="p-3 bg-cyan-500/20 rounded-lg hover:bg-cyan-500/30 transition-colors"
                  >
                    <Mail className="text-cyan-400" size={24} />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-sm border-cyan-500/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Send a Message</h3>
              <p className="text-sm text-slate-400 mb-6">I'll receive your message directly via email</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={4}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                    ✗ Failed to send message. Please try again or email me directly.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-white py-3 rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>

              <div className="mt-4 p-3 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
                <p className="text-xs text-slate-400">
                  <strong className="text-cyan-400">Powered by Formspree</strong> - Messages are delivered directly to
                  my inbox
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-cyan-500/20">
        <div className="container mx-auto text-center">
          <p className="text-slate-400 mb-4">© 2025 Pranav Raskar | All Rights Reserved</p>
          <button
            onClick={() => scrollToSection("home")}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </footer>
    </div>
  )
}
