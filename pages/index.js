import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaBook, FaAward, FaLaptop, FaTrophy, FaStar, FaHeart, FaRocket, FaPhone, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function Home() {
  const stats = [
    { value: '1000+', label: 'Students', icon: FaGraduationCap, color: 'text-purple-600', gradient: 'from-purple-500 to-purple-700', iconBg: 'bg-purple-100' },
    { value: '50+', label: 'Teachers', icon: FaUsers, color: 'text-pink-600', gradient: 'from-pink-500 to-pink-700', iconBg: 'bg-pink-100' },
    { value: '100%', label: 'Pass Rate', icon: FaTrophy, color: 'text-blue-600', gradient: 'from-blue-500 to-blue-700', iconBg: 'bg-blue-100' },
    { value: '25+', label: 'Years', icon: FaAward, color: 'text-green-600', gradient: 'from-green-500 to-green-700', iconBg: 'bg-green-100' }
  ];

  const features = [
    { 
      icon: FaGraduationCap, 
      title: 'Quality Education', 
      desc: 'Top-notch faculty and modern teaching methods', 
      gradient: 'from-purple-500 via-purple-600 to-blue-500',
      iconColor: 'text-purple-100'
    },
    { 
      icon: FaChalkboardTeacher, 
      title: 'Expert Faculty', 
      desc: 'Experienced teachers dedicated to student success', 
      gradient: 'from-green-500 via-green-600 to-emerald-500',
      iconColor: 'text-green-100'
    },
    { 
      icon: FaTrophy, 
      title: 'Excellence', 
      desc: '100% pass rate with outstanding results', 
      gradient: 'from-orange-500 via-orange-600 to-yellow-500',
      iconColor: 'text-orange-100'
    },
    { 
      icon: FaBook, 
      title: 'Modern Facilities', 
      desc: 'Smart classrooms, labs, library & sports', 
      gradient: 'from-pink-500 via-purple-500 to-pink-600',
      iconColor: 'text-pink-100'
    }
  ];

  const badges = [
    { icon: FaStar, label: 'CBSE Affiliated', color: 'from-yellow-400 to-yellow-600', textColor: 'text-yellow-900' },
    { icon: FaTrophy, label: 'Award Winning', color: 'from-yellow-400 to-orange-500', textColor: 'text-yellow-900' },
    { icon: FaHeart, label: 'Student Focused', color: 'from-red-400 to-pink-500', textColor: 'text-red-900' }
  ];

  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 text-white py-32 overflow-hidden particle-bg">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 100 + 30}px`,
                height: `${Math.random() * 100 + 30}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fadeInUp">
            {/* Welcome Badge - Enhanced */}
            <div className="inline-flex items-center glass-card px-8 py-4 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-300 animate-glow">
              <FaGraduationCap className="text-yellow-300 text-2xl mr-3 animate-bounce-slow" />
              <span className="text-white font-bold text-lg">Welcome to Excellence</span>
            </div>

            {/* Main Heading - Enhanced */}
            <h1 className="hero-title animate-scaleIn">
              <span className="text-white">School</span>
              <br />
              <span className="text-yellow-300 neon-text text-8xl md:text-9xl">Where Dreams Take Flight</span>
            </h1>

            {/* Description - Enhanced */}
            <p className="hero-subtitle text-white max-w-4xl mx-auto mb-12 animate-fadeInUp">
              Empowering Young Minds Through Innovation, Excellence, and Holistic Development
            </p>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 stagger-children">
              <Link
                href="/admission"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:shadow-orange-500/50 transform hover:scale-110 transition-all duration-300 hover-glow"
              >
                Apply for Admission
                <FaRocket className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center justify-center glass-card border-2 border-white text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                Learn More 
                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Badges - Enhanced */}
            <div className="flex flex-wrap justify-center gap-6 stagger-children">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`flex items-center bg-gradient-to-r ${badge.color} px-8 py-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 hover-lift`}
                >
                  <badge.icon className={`${badge.textColor} text-2xl mr-3`} />
                  <span className={`${badge.textColor} font-black text-lg`}>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section - Enhanced */}
      <div className="bg-gradient-to-b from-white to-purple-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl p-10 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 tilt-effect gradient-border relative overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer"></div>
                
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <stat.icon className="text-white text-4xl" />
                </div>
                
                <div className={`text-6xl font-black mb-3 ${stat.color} group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <div className="text-gray-700 font-bold text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - Enhanced */}
      <div className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-6xl font-black text-gray-900 mb-6">
              <span className="text-gradient">Why Choose School?</span>
            </h2>
            <p className="text-2xl text-gray-600 font-semibold">Excellence in Every Aspect of Education</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-10 rounded-3xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-6 text-center relative overflow-hidden border-t-4 border-purple-500"
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className={`relative w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                  <feature.icon className={`text-5xl text-white`} />
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
                
                {/* Hover arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaArrowRight className="text-purple-600 mx-auto text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portal Access Section - Enhanced */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 py-24 relative overflow-hidden gradient-animate">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 80 + 40}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 20 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-6xl font-black text-white mb-6 neon-text">Access Your Portal</h2>
            <p className="text-2xl text-white/90 font-light">Secure and Easy Login for All Users</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {[
              { emoji: '👨‍💼', title: 'Admin Portal', desc: 'Complete System Control', gradient: 'from-blue-500 via-blue-600 to-cyan-500' },
              { emoji: '👨‍🏫', title: 'Staff Portal', desc: 'Teaching & Management', gradient: 'from-green-500 via-green-600 to-emerald-500' },
              { emoji: '👨‍👩‍👧', title: 'Parent Portal', desc: 'Track Your Child', gradient: 'from-yellow-500 via-orange-500 to-red-500' },
              { emoji: '👨‍🎓', title: 'Student Portal', desc: 'Learning Dashboard', gradient: 'from-pink-500 via-pink-600 to-rose-500' }
            ].map((portal, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-2xl p-10 hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-6 text-center relative overflow-hidden tilt-effect"
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shine-effect"></div>
                </div>
                
                <div className="relative">
                  <div className="text-8xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {portal.emoji}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {portal.title}
                  </h3>
                  <p className="text-gray-600 mb-8 font-semibold">{portal.desc}</p>
                  <Link
                    href="/login"
                    className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${portal.gradient} text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group-hover:animate-pulse`}
                  >
                    Login Now 
                    <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="relative bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 py-28 overflow-hidden gradient-animate">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 80 + 40}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 20 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fadeInUp">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 neon-text">
              Ready to Join School?
            </h2>
            <p className="text-3xl text-white mb-12 font-light">
              Start Your Journey Towards Excellence Today!
            </p>
            <Link
              href="/admission"
              className="group inline-flex items-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-16 py-6 rounded-full font-black text-2xl shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-300 animate-glow"
            >
              Apply Now
              <FaRocket className="ml-4 text-3xl group-hover:translate-y-[-4px] group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Contact CTA Section - Enhanced */}
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left animate-slideInLeft">
              <h3 className="text-5xl font-black text-white mb-3 neon-text">Have Questions?</h3>
              <p className="text-2xl text-gray-300 font-light">We&apos;re here to help you!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 animate-slideInRight">
              <a
                href="tel:+917488770476"
                className="group inline-flex items-center bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-300"
              >
                <FaPhone className="mr-4 text-2xl group-hover:rotate-12 transition-transform" />
                +91 7488770476
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center glass-card border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                Contact Us
                <FaArrowRight className="ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section - NEW */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-6xl font-black text-gradient mb-6">What Parents Say</h2>
            <p className="text-2xl text-gray-600">Trusted by thousands of families</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              { name: 'Mrs. Sharma', text: 'Best decision for my child&apos;s future!', rating: 5 },
              { name: 'Mr. Patel', text: 'Excellent faculty and infrastructure', rating: 5 },
              { name: 'Mrs. Kumar', text: 'My child loves going to school!', rating: 5 }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="card-gradient p-8 hover-lift relative"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-2xl" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Parent</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
