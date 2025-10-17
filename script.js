// ===================================
// Navigation & Scroll Effects
// ===================================
const navbar = document.getElementById("navbar")
const navLinks = document.querySelectorAll(".nav-link")
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navLinksContainer = document.getElementById("navLinks")

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  // Update active nav link based on scroll position
  updateActiveNavLink()
})

// Mobile menu toggle
mobileMenuBtn.addEventListener("click", () => {
  navLinksContainer.classList.toggle("active")
  const icon = mobileMenuBtn.querySelector("i")
  icon.classList.toggle("fa-bars")
  icon.classList.toggle("fa-times")
})

// Close mobile menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    const targetSection = document.getElementById(targetId)

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" })
    }

    // Close mobile menu
    navLinksContainer.classList.remove("active")
    const icon = mobileMenuBtn.querySelector("i")
    icon.classList.remove("fa-times")
    icon.classList.add("fa-bars")
  })
})

// Update active nav link based on scroll position
function updateActiveNavLink() {
  const sections = ["home", "about", "skills", "experience", "projects", "certifications", "achievements", "contact"]

  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active")
          }
        })
      }
    }
  })
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// ===================================
// Contact Form with Formspree
// ===================================
const contactForm = document.getElementById("contactForm")
const formStatus = document.getElementById("formStatus")
const submitBtn = document.getElementById("submitBtn")
const btnText = document.getElementById("btnText")
const btnLoader = document.getElementById("btnLoader")

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }

  // Show loading state
  submitBtn.disabled = true
  btnText.style.display = "none"
  btnLoader.style.display = "flex"
  formStatus.style.display = "none"
  formStatus.classList.remove("success", "error")

  try {
    // Send to Formspree
    const response = await fetch("https://formspree.io/f/mjkajrpr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      // Success
      formStatus.textContent = "✓ Message sent successfully! I'll get back to you soon."
      formStatus.classList.add("success")
      formStatus.style.display = "block"

      // Reset form
      contactForm.reset()

      // Hide success message after 5 seconds
      setTimeout(() => {
        formStatus.style.display = "none"
      }, 5000)
    } else {
      // Error
      throw new Error("Failed to send message")
    }
  } catch (error) {
    console.error("Form submission error:", error)
    formStatus.textContent = "✗ Failed to send message. Please try again or email me directly."
    formStatus.classList.add("error")
    formStatus.style.display = "block"

    // Hide error message after 5 seconds
    setTimeout(() => {
      formStatus.style.display = "none"
    }, 5000)
  } finally {
    // Reset button state
    submitBtn.disabled = false
    btnText.style.display = "inline"
    btnLoader.style.display = "none"
  }
})

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all cards and sections
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".card, .project-card, .skill-card, .experience-card, .cert-card, .achievement-card",
  )
  animatedElements.forEach((el) => observer.observe(el))
})

// ===================================
// Smooth scroll for all anchor links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && href.length > 1) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  })
})
