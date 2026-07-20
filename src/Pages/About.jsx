// pages/About.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCode, 
  faCog, 
  faMobileAlt, 
  faDatabase, 
  faCloud, 
  faCodeBranch, 
  faRocket,
  faServer,
  faBolt,
  faTerminal,
  faGraduationCap,
  faUsers,
  faLightbulb,
  faQuestionCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import { 
  faReact, 
  faNode, 
  faJs, 
  faPhp, 
  faGitAlt, 
  faGithub,
  faAws
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const services = [
    {
      icon: <FontAwesomeIcon icon={faCode} className="text-white text-xl" />,
      title: 'Frontend Development',
      description: 'Building responsive, interactive, and user-friendly interfaces using React, Next.js, and Tailwind CSS.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FontAwesomeIcon icon={faCog} className="text-white text-xl" />,
      title: 'Backend Development',
      description: 'Creating robust, scalable server-side applications with Node.js, Express, PHP, and RESTful APIs.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FontAwesomeIcon icon={faMobileAlt} className="text-white text-xl" />,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications using Flutter and React Native with native-like performance.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FontAwesomeIcon icon={faDatabase} className="text-white text-xl" />,
      title: 'Database Design',
      description: 'Designing efficient database schemas, optimizing queries, and managing data with PostgreSQL, MySQL, and MongoDB.',
      gradient: 'from-red-500 to-rose-500'
    },
    {
      icon: <FontAwesomeIcon icon={faCloud} className="text-white text-xl" />,
      title: 'DevOps & Cloud',
      description: 'Deploying, scaling, and managing applications on AWS, Docker, Kubernetes with CI/CD pipelines.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <FontAwesomeIcon icon={faCodeBranch} className="text-white text-xl" />,
      title: 'Version Control',
      description: 'Managing code with Git, GitHub, GitLab, and Bitbucket. Implementing branching strategies.',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: <FontAwesomeIcon icon={faRocket} className="text-white text-xl" />,
      title: 'Performance Optimization',
      description: 'Optimizing application performance, reducing load times, improving SEO, and caching strategies.',
      gradient: 'from-indigo-500 to-violet-500'
    }
  ]

  const techSkills = [
    { name: 'React & Redux', icon: <FontAwesomeIcon icon={faReact} className="text-blue-500 text-2xl" />, color: 'bg-blue-100 text-blue-600' },
    { name: 'Next.js', icon: <FontAwesomeIcon icon={faServer} className="text-black text-2xl" />, color: 'bg-gray-100 text-gray-700' },
    { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} className="text-yellow-400 text-2xl" />, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'TypeScript', icon: <FontAwesomeIcon icon={faCode} className="text-blue-500 text-2xl" />, color: 'bg-blue-100 text-blue-600' },
    { name: 'Node.js', icon: <FontAwesomeIcon icon={faNode} className="text-green-500 text-2xl" />, color: 'bg-green-100 text-green-600' },
    { name: 'Express', icon: <FontAwesomeIcon icon={faBolt} className="text-gray-700 text-2xl" />, color: 'bg-gray-100 text-gray-700' },
    { name: 'PHP', icon: <FontAwesomeIcon icon={faPhp} className="text-purple-500 text-2xl" />, color: 'bg-purple-100 text-purple-600' },
    { name: 'Flutter', icon: <FontAwesomeIcon icon={faMobileAlt} className="text-blue-500 text-2xl" />, color: 'bg-blue-100 text-blue-600' },
    { 
      name: 'MongoDB, PostgreSQL, MySQL, Sequelize', 
      icon: <FontAwesomeIcon icon={faDatabase} className="text-green-500 text-2xl" />, 
      color: 'bg-green-100 text-green-600' 
    },
    { name: 'Git', icon: <FontAwesomeIcon icon={faGitAlt} className="text-orange-500 text-2xl" />, color: 'bg-orange-100 text-orange-600' },
    { name: 'GitHub', icon: <FontAwesomeIcon icon={faGithub} className="text-gray-800 text-2xl" />, color: 'bg-gray-100 text-gray-700' },
    { name: 'AWS', icon: <FontAwesomeIcon icon={faAws} className="text-yellow-500 text-2xl" />, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Tailwind CSS', icon: <FontAwesomeIcon icon={faTerminal} className="text-cyan-400 text-2xl" />, color: 'bg-cyan-100 text-cyan-600' }
  ]

  const passionPoints = [
    { icon: faGraduationCap, text: 'Always learning new technologies', color: 'text-blue-500' },
    { icon: faUsers, text: 'Focused on user-centered design', color: 'text-purple-500' },
    { icon: faLightbulb, text: 'Collaborative team player', color: 'text-yellow-500' }
  ]

  return (
    <div className="min-h-screen p-4 py-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            ℹ️ About Me
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Profile Section - Removed View My Work button */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg flex-shrink-0">
              AD
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-gray-800">Agernesh Dereje</h2>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold text-blue-600">Full Stack Developer</span>
              </p>
              <p className="text-gray-600 text-sm max-w-2xl">
                Passionate developer building modern, scalable web applications.
              </p>
            </div>
          </div>
        </div>

        {/* Experience & Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="font-bold text-gray-800 mb-2 text-lg">💼 Experience</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">▸</span>
                <span>2+ years of full-stack development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">▸</span>
                <span>20+ clients worldwide</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="font-bold text-gray-800 mb-2 text-lg">🎯 Core Skills</h3>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">React</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">Nuxt.js</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-medium">Node.js</span>
              <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">Express</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full font-medium">Next.js</span>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-xs rounded-full font-medium">Tailwind</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-600 text-xs rounded-full font-medium">PostgreSQL</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-600 text-xs rounded-full font-medium">MySQL</span>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">🛠️ Services</h2>
            <p className="text-sm text-gray-600">Expertise across the full stack</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-2 group-hover:scale-110 transition shadow-md`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{service.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">💻 Tech Stack</h2>
            <p className="text-sm text-gray-600">Technologies I work with</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
            {techSkills.map((tech, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center group"
              >
                <div className="flex justify-center mb-1 group-hover:scale-110 transition">
                  {tech.icon}
                </div>
                <p className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${tech.color}`}>
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why I Love What I Do Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-white text-2xl" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Why Work Software & Web Development.
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center max-w-3xl mx-auto mb-6">
            I'm passionate about creating digital solutions that not only meet technical requirements 
            but also provide exceptional user experiences. Every project is an opportunity to learn, 
            innovate, and make a positive impact. I believe in writing clean, maintainable code and 
            building applications that stand the test of time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {passionPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center group"
              >
                <div className={`text-3xl mb-2 group-hover:scale-110 transition ${point.color}`}>
                  <FontAwesomeIcon icon={point.icon} />
                </div>
                <p className="text-sm font-medium text-gray-700">{point.text}</p>
              </div>
            ))}
          </div>

          {/* Call to Action - Both buttons here */}
          <div className="mt-8 text-center flex flex-wrap justify-center gap-4">
            <Link 
              to="/projects"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              View My Projects →
            </Link>
            <Link 
              to="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About