import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  FaGraduationCap, FaUsers, FaChalkboardTeacher, FaTrophy, FaStar, 
  FaBullseye, FaEye, FaSchool, FaBook, FaFlask, FaBasketballBall,
  FaTheaterMasks, FaBus, FaUtensils, FaHeartbeat, FaDesktop,
  FaAward, FaMedal, FaRocket, FaHeart, FaGem, FaArrowRight, FaCheckCircle
} from 'react-icons/fa';

export default function About() {
  const stats = [
    { value: '25+', label: 'Years of Excellence', icon: '🎓', color: 'text-blue-600', gradient: 'from-blue-500 to-blue-700' },
    { value: '1000+', label: 'Happy Students', icon: '👨‍🎓', color: 'text-green-600', gradient: 'from-green-500 to-green-700' },
    { value: '50+', label: 'Expert Teachers', icon: '👨‍🏫', color: 'text-orange-600', gradient: 'from-orange-500 to-orange-700' },
    { value: '100%', label: 'Pass Rate', icon: '🏆', color: 'text-red-600', gradient: 'from-red-500 to-red-700' }
  ];

  const highlights = [
    { icon: '🏫', title: 'State-of-the-art Campus', desc: 'Modern facilities and infrastructure for optimal learning', bg: 'from-blue-100 to-blue-200', border: 'border-blue-300' },
    { icon: '👨‍🏫', title: 'Expert Faculty', desc: 'Qualified teachers dedicated to student success', bg: 'from-purple-100 to-purple-200', border: 'border-purple-300' },
    { icon: '📚', title: 'Holistic Approach', desc: 'Balanced focus on academics, sports, and arts', bg: 'from-pink-100 to-pink-200', border: 'border-pink-300' }
  ];

  const facilities = [
    { icon: FaGraduationCap, title: 'Smart Classrooms', desc: 'Modern interactive learning environment with digital boards', color: 'from-blue-500 to-blue-600' },
    { icon: FaBook, title: 'Digital Library', desc: 'Extensive collection of books and e-resources', color: 'from-purple-500 to-purple-600' },
    { icon: FaFlask, title: 'Science Labs', desc: 'Fully equipped Physics, Chemistry & Biology labs', color: 'from-green-500 to-green-600' },
    { icon: FaBasketballBall, title: 'Sports Complex', desc: 'Indoor & outdoor sports facilities', color: 'from-orange-500 to-orange-600' },
    { icon: FaTheaterMasks, title: 'Auditorium', desc: 'Modern auditorium for events & programs', color: 'from-pink-500 to-pink-600' },
    { icon: FaBus, title: 'Transportation', desc: 'Safe and reliable bus service', color: 'from-yellow-600 to-yellow-700' },
    { icon: FaUtensils, title: 'Cafeteria', desc: 'Hygienic and nutritious food', color: 'from-red-500 to-red-600' },
    { icon: FaHeartbeat, title: 'Medical Room', desc: 'First aid and health check-ups', color: 'from-teal-500 to-teal-600' },
    { icon: FaDesktop, title: 'Computer Labs', desc: 'Latest technology and equipment', color: 'from-indigo-500 to-indigo-600' }
  ];

  const achievements = [
    { icon: FaTrophy, title: '100% Pass Rate in Board Examinations', color: 'from-yellow-500 to-yellow-600' },
    { icon: FaMedal, title: 'Multiple State Level Sports Championships', color: 'from-blue-500 to-blue-600' },
    { icon: FaStar, title: 'Excellence in Science and Mathematics Olympiads', color: 'from-purple-500 to-purple-600' },
    { icon: FaRocket, title: 'Active Community Service Programs', color: 'from-green-500 to-green-600' },
    { icon: FaGem, title: 'Award-winning Cultural Programs', color: 'from-pink-500 to-pink-600' },
    { icon: FaHeart, title: 'Recognition for Environmental Initiatives', color: 'from-teal-500 to-teal-600' }
  ];

  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 text-white py-16 sm:py-24 md:py-32 overflow-hidden particle-bg gradient-animate">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fadeInUp">
          <div className="inline-flex items-center glass-card px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full mb-6 sm:mb-8 shadow-2xl hover:scale-110 transition-transform duration-300 animate-glow">
            <FaStar className="text-yellow-300 text-lg sm:text-xl md:text-2xl mr-2 sm:mr-3 animate-bounce-slow" />
            <span className="text-white font-black text-sm sm:text-base md:text-lg">About Us</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8">
            <span className="text-white">About </span>
            <span className="text-yellow-300 neon-text">School</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold px-4">
            Excellence in Education Since 1999
          </p>
        </div>
      </div>

      {/* Statistics Section - Enhanced */}
      <div className="bg-gradient-to-b from-white to-purple-50 py-12 sm:py-16 md:py-20 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-300 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-pink-300 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 stagger-children">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 text-center hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-6 tilt-effect gradient-border relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{stat.icon}</div>
                  <div className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 ${stat.color} group-hover:scale-110 transition-transform`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-700 font-black text-base sm:text-lg md:text-xl">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Purpose Section - Enhanced */}
      <div className="bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gradient mb-4 sm:mb-6">Our Purpose</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold px-4">Driving Education Forward with Vision & Mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20 stagger-children">
            {/* Mission Card - Enhanced */}
            <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 md:mr-5 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 flex-shrink-0">
                    <FaBullseye className="text-white text-2xl sm:text-3xl md:text-4xl" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">Our Mission</h3>
                </div>
                
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                  To provide <strong className="text-blue-600 font-black text-base sm:text-lg md:text-xl">excellence in education</strong> and create responsible citizens who contribute positively to society. We strive to nurture young minds through innovative teaching methods, character building, and holistic development.
                </p>
                
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['Excellence', 'Innovation', 'Character', 'Growth'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs sm:text-sm font-black shadow-lg hover:scale-110 transition-transform cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision Card - Enhanced */}
            <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 md:mr-5 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 flex-shrink-0">
                    <FaEye className="text-white text-2xl sm:text-3xl md:text-4xl" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 group-hover:text-purple-600 transition-colors">Our Vision</h3>
                </div>
                
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                  To be a <strong className="text-purple-600 font-black text-base sm:text-lg md:text-xl">leading educational institution</strong> recognized for academic excellence, character building, and producing future leaders. We envision a community of lifelong learners equipped with skills for success in the 21st century.
                </p>
                
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['Leadership', 'Excellence', 'Future-Ready', 'Global'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs sm:text-sm font-black shadow-lg hover:scale-110 transition-transform cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Who We Are Section - Enhanced */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-center hover-lift relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 opacity-50"></div>
            
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl animate-glow">
                <FaGraduationCap className="text-white text-4xl sm:text-5xl md:text-6xl" />
              </div>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient mb-6 sm:mb-8">Who We Are</h3>
              
              <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2">
                <strong className="text-purple-600 font-black text-base sm:text-lg md:text-xl lg:text-2xl">School</strong> is a premier educational institution committed to providing quality education and holistic development of students. Established in <strong className="text-purple-600 font-black text-base sm:text-lg md:text-xl lg:text-2xl">1999</strong>, we have been at the forefront of educational excellence in India.
              </p>

              {/* Highlights - Enhanced */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 stagger-children">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={`group bg-gradient-to-br ${item.bg} rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 ${item.border}`}
                  >
                    <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-5 md:mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{item.icon}</div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-3 sm:mb-4">{item.title}</h4>
                    <p className="text-gray-700 font-semibold text-sm sm:text-base md:text-lg">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Facilities Section - Enhanced */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-purple-300 rounded-full filter blur-3xl"
              style={{
                width: `${Math.random() * 300 + 200}px`,
                height: `${Math.random() * 300 + 200}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `blob ${Math.random() * 10 + 15}s infinite`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fadeInUp">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 rounded-full mb-6 sm:mb-8 shadow-2xl animate-glow">
              <FaStar className="text-yellow-300 text-lg sm:text-xl md:text-2xl mr-2 sm:mr-3 animate-bounce-slow" />
              <span className="text-white font-black text-sm sm:text-base md:text-lg lg:text-xl">World-Class Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gradient mb-4 sm:mb-6">Our Facilities</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold px-4">Everything Your Child Needs to Excel</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 stagger-children">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 hover:shadow-purple-500/40 transition-all duration-500 hover:-translate-y-8 relative overflow-hidden tilt-effect"
              >
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br ${facility.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-7 md:mb-8 shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 mx-auto`}>
                    <facility.icon className="text-white text-3xl sm:text-4xl md:text-5xl" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors text-center">{facility.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center">{facility.desc}</p>
                  
                  {/* Hover indicator */}
                  <div className="mt-4 sm:mt-5 md:mt-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaCheckCircle className="text-green-500 mr-2 text-lg sm:text-xl" />
                    <span className="text-green-600 font-bold text-sm sm:text-base">Available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Achievements Section - Enhanced */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-pink-400 py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden gradient-animate">
        <div className="absolute inset-0 opacity-15">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 20 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fadeInUp">
            <div className="inline-flex items-center glass-card px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 rounded-full mb-6 sm:mb-8 shadow-2xl animate-glow">
              <FaTrophy className="text-yellow-300 text-xl sm:text-2xl md:text-3xl mr-2 sm:mr-3 animate-bounce-slow" />
              <span className="text-white font-black text-sm sm:text-base md:text-lg lg:text-xl">Our Pride</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 neon-text">Our Achievements</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-light px-4">A Legacy of Excellence & Success</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 stagger-children">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-7 md:p-8 hover:shadow-yellow-500/40 transition-all duration-500 hover:-translate-y-6 hover:scale-105"
              >
                <div className="flex items-center">
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br ${achievement.color} rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 flex-shrink-0 shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <achievement.icon className="text-white text-2xl sm:text-2xl md:text-3xl" />
                  </div>
                  <p className="text-gray-800 font-black text-base sm:text-lg md:text-xl leading-tight group-hover:text-purple-600 transition-colors">{achievement.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Family CTA - Enhanced */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden gradient-animate">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 neon-text px-2">
            Join Our Family of Excellence
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8 sm:mb-10 md:mb-12 font-light px-4">
            Be a part of India&apos;s leading educational institution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center items-center">
            <Link
              href="/admission"
              className="group inline-flex items-center justify-center bg-white text-purple-600 px-8 sm:px-10 md:px-12 lg:px-14 py-4 sm:py-5 md:py-6 rounded-full font-black text-base sm:text-lg md:text-xl shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-300 w-full sm:w-auto"
            >
              Apply for Admission
              <FaRocket className="ml-3 sm:ml-4 text-xl sm:text-2xl group-hover:translate-y-[-4px] group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center glass-card border-2 sm:border-3 border-white text-white px-8 sm:px-10 md:px-12 lg:px-14 py-4 sm:py-5 md:py-6 rounded-full font-black text-base sm:text-lg md:text-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110 w-full sm:w-auto"
            >
              Contact Us
              <FaArrowRight className="ml-3 sm:ml-4 text-xl sm:text-2xl group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
