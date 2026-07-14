// Contact.jsx
import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      alert('✅ Message sent successfully! Thank you for contacting us.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = {
    email: 'agerneshdereje8@gmail.com',
    phone: '+251 984-93-56-77',
    linkedin: 'https://www.linkedin.com/in/agernesh-dereje-00783b377',
    github: 'https://github.com/hagerSe',
    location: 'Addis Ababa, Ethiopia'
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let's Build Something Amazing 🚀
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your next project? Whether it's web development, mobile apps, 
            or full-stack solutions, I'm here to help turn your ideas into reality.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Contact Information Cards - Top Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">📬</span> Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Email Card - Verified */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <FaEnvelope className="text-2xl text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-lg flex items-center gap-2">
                    Email <FaCheckCircle className="text-green-500 text-sm" />
                  </h3>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition text-sm break-all"
                  >
                    {contactInfo.email}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Drop me a line anytime</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <FaPhone className="text-2xl text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-lg">Phone</h3>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-green-600 hover:text-green-800 hover:underline transition"
                  >
                    {contactInfo.phone}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Quick chat or call</p>
                </div>
              </div>
            </div>

            {/* LinkedIn Card - Verified */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-blue-700">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <FaLinkedin className="text-2xl text-blue-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-lg flex items-center gap-2">
                    LinkedIn <FaCheckCircle className="text-green-500 text-sm" />
                  </h3>
                  <a 
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 hover:underline transition"
                  >
                    Connect with me
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Professional networking</p>
                </div>
              </div>
            </div>

            {/* GitHub Card - Verified */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-gray-700">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <FaGithub className="text-2xl text-gray-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-lg flex items-center gap-2">
                    GitHub <FaCheckCircle className="text-green-500 text-sm" />
                  </h3>
                  <a 
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 hover:underline transition"
                  >
                    View my code
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Check out my projects</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-purple-500 md:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <FaMapMarkerAlt className="text-2xl text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-lg">Location</h3>
                  <p className="text-gray-700">{contactInfo.location}</p>
                  <p className="text-xs text-gray-500 mt-1">Available for remote work</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - Bottom Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Send Me a Message ✉️
            </h2>
            <p className="text-gray-600 text-sm">
              Fill in the form and I'll get back to you as soon as possible
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 hover:bg-white"
                  placeholder="Agernesh Dereje"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 hover:bg-white"
                  placeholder="agerneshdereje@gmail.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 hover:bg-white"
                placeholder="Project inquiry"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none bg-gray-50 hover:bg-white"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition shadow-md hover:shadow-lg flex items-center justify-center gap-2 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span> Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-4">
            I'll respond within 24-48 hours
          </p>
        </div>

        {/* Social Footer */}
      
      </div>
    </div>
  )
}

export default Contact