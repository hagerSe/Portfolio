// pages/Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    {
      icon: '< />',
      title: 'Frontend',
      description: 'React, Tailwind CSS, Next.js, TypeScript',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '{ }',
      title: 'Backend',
      description: 'Node.js, Express, PHP',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '#DB',
      title: 'Database',
      description: 'MongoDB, PostgreSQL, MySQL',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '⚡',
      title: 'DevOps',
      description: 'AWS, Docker, Kubernetes',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🔐',
      title: 'Auth & Authz',
      description: 'JWT, OAuth2, RBAC, SSO',
      gradient: 'from-red-500 to-rose-500'
    },
    {
      icon: '🐙',
      title: 'Version Control',
      description: 'Git, GitHub, GitLab, Bitbucket',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: '📋',
      title: 'Task Management',
      description: 'Jira, Trello, Asana, Notion',
      gradient: 'from-indigo-500 to-violet-500'
    }
  ]

  // Colored circles for decoration
  const circles = [
    { color: 'bg-blue-500', size: 'w-32 h-32', top: '-10%', left: '-5%', opacity: 'opacity-10', animation: 'animate-float' },
    { color: 'bg-purple-500', size: 'w-24 h-24', top: '20%', right: '-3%', opacity: 'opacity-10', animation: 'animate-float-delay' },
    { color: 'bg-pink-500', size: 'w-40 h-40', bottom: '-10%', left: '10%', opacity: 'opacity-10', animation: 'animate-float' },
    { color: 'bg-green-500', size: 'w-20 h-20', bottom: '30%', right: '5%', opacity: 'opacity-10', animation: 'animate-float-delay' },
    { color: 'bg-yellow-500', size: 'w-16 h-16', top: '50%', left: '-2%', opacity: 'opacity-8', animation: 'animate-float' },
  ]

  return (
    <div className="min-h-[80vh] relative overflow-hidden">
      {/* Background Animated Circles */}
      <div className="absolute inset-0 pointer-events-none">
        {circles.map((circle, index) => (
          <div
            key={index}
            className={`absolute rounded-full ${circle.color} ${circle.size} ${circle.opacity} ${circle.animation}`}
            style={{
              top: circle.top,
              left: circle.left,
              right: circle.right,
              bottom: circle.bottom,
              animationDuration: `${6 + index * 2}s`,
            }}
          />
        ))}
        
        {/* Small floating dots */}
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-green-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-10 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <div className="flex items-center justify-center p-4 pt-12 relative z-10">
        <div className="text-center max-w-7xl w-full">
          {/* Available for work badge with pulse animation */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-50 border border-green-200 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-green-700">Available for work</span>
            </div>
          </div>

          {/* Main Heading - Full Width with animation */}
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 mb-4 leading-tight">
              Crafting <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Digital Excellence
              </span>
            </h1>
          </div>

          {/* Subtitle with animation */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            Building amazing websites and experiences with React, Tailwind CSS, and Node.js to solve real problems.
          </p>
          
          {/* CTA Buttons with hover animations */}
          <div className="flex flex-wrap gap-4 justify-center mb-16 animate-slide-up animation-delay-400">
            <Link to="/projects">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition shadow-md hover:scale-105 hover:shadow-blue-500/25 relative overflow-hidden group">
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition hover:scale-105 hover:shadow-lg relative overflow-hidden group">
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </Link>
          </div>
          
          {/* Features Section with staggered animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl font-bold text-white mb-4 group-hover:scale-110 transition shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                  {feature.icon}
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{feature.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        .opacity-8 {
          opacity: 0.08;
        }
      `}</style>
    </div>
  )
}

export default Home