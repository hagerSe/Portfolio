// Projects.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Import all images
import nh1 from '../assets/nh1.jpg'
import nh2 from '../assets/nh2.jpg'
import stu from '../assets/stu.jpg'
import ls from '../assets/ls.jpg'
import ai1 from '../assets/ai1.jpg'
import e2 from '../assets/e2.jpg'
import ag1 from '../assets/ag1.jpg'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'National Health Management System',
      description: 'Comprehensive healthcare platform for managing patient records, appointments, and medical history across multiple hospitals as well as works in the herrarcical system from kebele level to federal level.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      icon: '🏥',
      color: 'from-blue-500 to-cyan-500',
      category: 'web',
      details: 'A centralized system that connects hospitals, and healthcare providers to streamline patient care and medical data management.',
      images: [nh1, nh2],
      imageAlt: 'National Health Management System Dashboard',
      github: 'https://github.com/hagerSe/national-health-system'
    },
    {
      id: 2,
      title: 'Student Management System',
      description: 'Complete educational platform for managing student enrollment, grades, attendance, and academic performance tracking.',
      tech: ['React', 'Node.js', 'MySQL', 'Bootstrap'],
      icon: '🎓',
      color: 'from-purple-500 to-pink-500',
      category: 'web',
      details: 'An all-in-one solution for educational institutions to manage student data, course registration, and academic records.',
      images: [stu],
      imageAlt: 'Student Management System Dashboard',
      github: 'https://github.com/hagerSe/student-management-system'
    },
    {
      id: 3,
      title: 'AI Agricultural Detection System',
      description: 'AI-powered system for detecting crop diseases, pest infestations, and providing smart farming recommendations.',
      tech: ['React', 'Node.js', 'TensorFlow', 'Flask'],
      icon: '🌾',
      color: 'from-yellow-500 to-orange-500',
      category: 'web',
      details: 'Using machine learning and computer vision to help farmers identify crop diseases early and improve agricultural yield.',
      images: [ai1],
      imageAlt: 'AI Agricultural Detection System Interface',
      github: 'https://github.com/hagerSe/ai-agricultural-detection'
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration, cart management, and order tracking.',
      tech: ['React', 'Node.js', 'Prisma', 'Bootstrap'],
      icon: '🛒',
      color: 'from-red-500 to-rose-500',
      category: 'web',
      details: 'A complete e-commerce solution with product management, secure payment processing, and real-time inventory tracking.',
      images: [e2],
      imageAlt: 'E-Commerce Platform Dashboard',
      github: 'https://github.com/hagerSe/ecommerce-platform'
    },
    {
      id: 5,
      title: 'Lettering System',
      description: 'Advanced lettering and typography management system for designing and organizing creative text layouts.',
      tech: ['CSS', 'PHP', 'PHPAdmin'],
      icon: '✏️',
      color: 'from-green-500 to-emerald-500',
      category: 'web',
      details: 'A comprehensive lettering system that helps designers create, manage, and organize typography projects with ease.',
      images: [ls],
      imageAlt: 'Lettering System Interface',
      github: 'https://github.com/hagerSe/lettering-system'
    },
    {
      id: 6,
      title: 'Ethio University App',
      description: 'Mobile application for Ethiopian university students to access courses, grades, campus news, and academic resources.',
      tech: ['Flutter', 'Firebase', 'Dart'],
      icon: '🏫',
      color: 'from-indigo-500 to-violet-500',
      category: 'mobile',
      details: 'A comprehensive university app that connects students with academic resources, campus events, and real-time notifications.',
      images: [ag1],
      imageAlt: 'Ethio University App Interface',
      github: 'https://github.com/hagerSe/ethio-university-app'
    }
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  // Updated Contact Information
  const contactInfo = {
    email: 'tsegayechalachew0@gmail.com',
    phone: '+251 99 486 8854',
    linkedin: 'https://www.linkedin.com/in/agernesh-dereje-00783b377',
    github: 'https://github.com/hagerSe',
    githubUsername: 'hagerSe'
  }

  return (
    <div className="min-h-screen p-4 py-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            🚀 My Projects
          </h1>
          <p className="text-lg text-gray-600">
            Explore my portfolio of web and mobile applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transform scale-105'
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
              }`}
            >
              {filter.id === 'all' && '📋 All'}
              {filter.id === 'web' && '🌐 Web'}
              {filter.id === 'mobile' && '📱 Mobile'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              {/* Project Images */}
              {project.images && project.images.length > 0 ? (
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img 
                    src={project.images[0]} 
                    alt={project.imageAlt || project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/2563eb/ffffff?text=Project+Image'
                    }}
                  />
                  
                  {project.images.length > 1 && (
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                      {project.images.length} images
                    </div>
                  )}
                  
                  {project.images.length === 1 && (
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                      📸 1 image
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              ) : (
                <div className="h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="text-7xl opacity-50">{project.icon}</div>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    project.category === 'web' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-purple-100 text-purple-600'
                  }`}>
                    {project.category === 'web' ? '🌐 Web' : '📱 Mobile'}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  {project.description}
                </p>
                <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                  {project.details}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* GitHub Link */}
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fab fa-github"></i> View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found for this category.</p>
          </div>
        )}

        {/* === READY TO BUILD SECTION === */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Ready to Build Something Amazing? 🚀
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              These are just a few examples of the projects I've built. 
              Let's discuss how we can create something incredible together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Start Your Project Button - Navigates to Contact Page */}
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
              >
                <span>→</span> Start Your Project
              </Link>
              
              {/* View All Projects Button - Scrolls to Projects */}
              <button
                onClick={() => {
                  const projectsSection = document.querySelector('.grid')
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105"
              >
                View All Projects
              </button>
            </div>
          </div>
        </div>

        {/* === CONTACT SECTION === */}
      

        {/* Footer */}
        
      </div>

      {/* Image Modal */}
      {selectedProject && selectedProject.images && selectedProject.images.length > 0 && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedProject.title}
              </h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700 text-3xl transition-transform hover:rotate-90 duration-300"
              >
                ✕
              </button>
            </div>
            
            <div className={`grid gap-4 ${
              selectedProject.images.length === 1 
                ? 'grid-cols-1' 
                : 'grid-cols-1 md:grid-cols-2'
            }`}>
              {selectedProject.images.map((image, index) => (
                <div key={index} className="relative">
                  <img 
                    src={image} 
                    alt={`${selectedProject.title} - Image ${index + 1}`}
                    className={`w-full ${
                      selectedProject.images.length === 1 
                        ? 'h-[70vh] object-contain' 
                        : 'h-72 object-contain'
                    } rounded-lg shadow-md bg-gray-50`}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x500/cccccc/666666?text=Image+Not+Found'
                    }}
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    Image {index + 1} of {selectedProject.images.length}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects