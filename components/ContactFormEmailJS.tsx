"use client"

import type React from "react"

// ALTERNATIVE CONTACT FORM USING EMAILJS
// This is a commented-out alternative to Formspree using EmailJS
// To use this instead of Formspree:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service and template
// 3. Get your Service ID, Template ID, and Public Key
// 4. Replace the placeholders below
// 5. Install EmailJS: npm install @emailjs/browser
// 6. Replace the contact form in app/page.tsx with this component

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
// import emailjs from '@emailjs/browser' // Uncomment when ready to use

export default function ContactFormEmailJS() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // UNCOMMENT AND CONFIGURE THESE VALUES:
      // const result = await emailjs.send(
      //   'your_service_id',      // Replace with your EmailJS Service ID
      //   'your_template_id',     // Replace with your EmailJS Template ID
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     message: formData.message,
      //     to_email: 'pranavraskar02@gmail.com',
      //   },
      //   'your_public_key'       // Replace with your EmailJS Public Key
      // )

      // if (result.text === 'OK') {
      //   setSubmitStatus('success')
      //   setFormData({ name: '', email: '', message: '' })
      //   setTimeout(() => setSubmitStatus('idle'), 5000)
      // } else {
      //   setSubmitStatus('error')
      //   setTimeout(() => setSubmitStatus('idle'), 5000)
      // }

      // TEMPORARY: Remove this when EmailJS is configured
      console.log("EmailJS not configured yet. Form data:", formData)
      alert("EmailJS is not configured. Please follow the setup instructions in the code.")
    } catch (error) {
      console.error("EmailJS error:", error)
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

  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border-cyan-500/20 p-8 rounded-2xl">
      <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Send a Message</h3>
      <p className="text-sm text-slate-400 mb-6">I'll receive your message directly via EmailJS</p>
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

        {submitStatus === "success" && (
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
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
          <strong className="text-cyan-400">Setup Required:</strong> Configure EmailJS credentials in the code to enable
          this form
        </p>
      </div>
    </Card>
  )
}
