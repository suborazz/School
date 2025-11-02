import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  FaCamera, FaSearch, FaPalette, FaTheaterMasks, FaFutbol,
  FaBook, FaSchool, FaEye, FaHeart, FaArrowRight, FaPlay
} from 'react-icons/fa';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All', icon: FaPalette, color: 'from-purple-500 to-pink-500' },
    { id: 'events', name: 'Events', icon: FaTheaterMasks, color: 'from-blue-500 to-blue-600' },
    { id: 'sports', name: 'Sports', icon: FaFutbol, color: 'from-green-500 to-green-600' },
    { id: 'academic', name: 'Academic', icon: FaBook, color: 'from-orange-500 to-orange-600' },
    { id: 'facilities', name: 'Facilities', icon: FaSchool, color: 'from-pink-500 to-pink-600' }
  ];

  const galleryItems = [
    { 
      id: 1, 
      category: 'events', 
      title: 'Annual Day', 
      subtitle: 'Annual Day Celebration 2024',
      views: 1003, 
      likes: 245,
      bgColor: 'from-blue-500 via-purple-500 to-purple-600',
      tagColor: 'bg-blue-600'
    },
    { 
      id: 2, 
      category: 'sports', 
      title: 'Sports Day', 
      subtitle: 'Sports Day Championship',
      views: 1346, 
      likes: 189,
      bgColor: 'from-green-500 via-green-600 to-emerald-600',
      tagColor: 'bg-green-600'
    },
    { 
      id: 3, 
      category: 'academic', 
      title: 'Science Fair', 
      subtitle: 'Science Exhibition',
      views: 610, 
      likes: 156,
      bgColor: 'from-orange-500 via-orange-600 to-orange-700',
      tagColor: 'bg-orange-600'
    },
    { 
      id: 4, 
      category: 'events', 
      title: 'Cultural Fest', 
      subtitle: 'Cultural Festival',
      views: 929, 
      likes: 278,
      bgColor: 'from-purple-400 via-purple-500 to-purple-600',
      tagColor: 'bg-blue-600'
    },
    { 
      id: 5, 
      category: 'events', 
      title: 'Independence Day', 
      subtitle: 'Independence Day',
      views: 1150, 
      likes: 312,
      bgColor: 'from-red-500 via-red-600 to-orange-600',
      tagColor: 'bg-blue-600'
    },
    { 
      id: 6, 
      category: 'facilities', 
      title: 'Computer Lab', 
      subtitle: 'Computer Lab',
      views: 1352, 
      likes: 134,
      bgColor: 'from-blue-400 via-blue-500 to-cyan-500',
      tagColor: 'bg-pink-600'
    },
    { 
      id: 7, 
      category: 'facilities', 
      title: 'Library', 
      subtitle: 'Library',
      views: 559, 
      likes: 167,
      bgColor: 'from-pink-500 via-pink-600 to-rose-600',
      tagColor: 'bg-pink-600'
    },
    { 
      id: 8, 
      category: 'facilities', 
      title: 'Chemistry Lab', 
      subtitle: 'Chemistry Lab',
      views: 965, 
      likes: 145,
      bgColor: 'from-teal-500 via-teal-600 to-cyan-600',
      tagColor: 'bg-pink-600'
    },
    { 
      id: 9, 
      category: 'sports', 
      title: 'Basketball', 
      subtitle: 'Basketball Tournament',
      views: 504, 
      likes: 201,
      bgColor: 'from-orange-500 via-orange-600 to-yellow-600',
      tagColor: 'bg-green-600'
    },
    { 
      id: 10, 
      category: 'academic', 
      title: 'Math Olympiad', 
      subtitle: 'Math Olympiad',
      views: 554, 
      likes: 178,
      bgColor: 'from-blue-600 via-indigo-600 to-purple-600',
      tagColor: 'bg-yellow-600'
    },
    { 
      id: 11, 
      category: 'events', 
      title: 'Art Show', 
      subtitle: 'Art Exhibition',
      views: 1233, 
      likes: 223,
      bgColor: 'from-pink-500 via-purple-500 to-pink-600',
      tagColor: 'bg-blue-600'
    },
    { 
      id: 12, 
      category: 'sports', 
      title: 'Cricket', 
      subtitle: 'Cricket Match',
      views: 1078, 
      likes: 267,
      bgColor: 'from-green-500 via-green-600 to-lime-600',
      tagColor: 'bg-green-600'
    }
  ];

  const filteredItems = galleryItems.filter(item => 
    (activeFilter === 'all' || item.category === activeFilter) &&
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     item.subtitle.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <div className="relative bg-gradient-to-r from-pink-500 via-purple-600 to-purple-700 text-white py-32 overflow-hidden gradient-animate">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fadeInUp">
          <div className="inline-flex items-center glass-card border-2 border-white/40 px-8 py-4 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-300 animate-glow">
            <FaCamera className="text-yellow-300 text-2xl mr-3 animate-bounce-slow" />
            <span className="text-white font-black text-lg">Our Memories</span>
          </div>
          
          <h1 className="hero-title">
            <span className="text-white">Photo </span>
            <span className="text-yellow-300 neon-text">Gallery</span>
          </h1>
          
          <p className="hero-subtitle text-white font-semibold">
            Glimpses of Life at School
          </p>
        </div>
      </div>

      {/* Filter & Search Section - Enhanced */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar - Enhanced */}
          <div className="max-w-3xl mx-auto mb-10 animate-scaleIn">
            <div className="relative group">
              <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-purple-500 text-2xl group-hover:scale-110 transition-transform" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 border-3 border-purple-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 focus:outline-none text-xl transition-all shadow-lg focus:shadow-2xl font-semibold"
              />
            </div>
          </div>

          {/* Category Filters - Enhanced */}
          <div className="flex flex-wrap justify-center gap-5 mb-10 stagger-children">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`group flex items-center px-8 py-4 rounded-2xl font-black text-lg transition-all duration-300 ${
                  activeFilter === cat.id
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-2xl scale-110`
                    : 'bg-white border-3 border-gray-200 text-gray-700 hover:border-purple-400 shadow-lg hover:shadow-xl transform hover:scale-105'
                }`}
              >
                <cat.icon className={`mr-3 text-2xl ${activeFilter === cat.id ? 'text-white' : 'text-gray-600 group-hover:text-purple-600'} group-hover:scale-110 transition-transform`} />
                {cat.name}
              </button>
            ))}
          </div>

          {/* Photo Count - Enhanced */}
          <div className="text-center mb-12 animate-fadeInUp">
            <p className="text-gray-600 text-2xl font-semibold">
              Showing <strong className="text-purple-600 font-black text-3xl">{filteredItems.length}</strong> photos
            </p>
          </div>

          {/* Gallery Grid - Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 stagger-children">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-purple-500/40 transition-all duration-500 hover:-translate-y-8 cursor-pointer tilt-effect"
              >
                {/* Image Placeholder with Gradient - Enhanced */}
                <div className={`relative bg-gradient-to-br ${item.bgColor} h-80 flex flex-col items-center justify-center p-8 overflow-hidden`}>
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                  
                  {/* Category Tag - Enhanced */}
                  <div className={`absolute top-5 left-5 ${item.tagColor} text-white px-5 py-2 rounded-full text-sm font-black capitalize shadow-xl z-10`}>
                    {item.category}
                  </div>
                  
                  {/* Title - Enhanced */}
                  <h3 className="text-5xl font-black text-white text-center mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500 neon-text">
                    {item.title} <span className="border-3 border-white px-3 py-1 text-3xl rounded-lg">?</span>
                  </h3>
                  
                  {/* View Photo Button - Enhanced */}
                  {item.id % 3 === 0 && (
                    <button className="relative z-10 mt-6 bg-white text-purple-600 px-8 py-3 rounded-xl font-black text-lg shadow-2xl hover:scale-110 transition-all duration-300 flex items-center group-hover:bg-purple-600 group-hover:text-white">
                      <FaPlay className="mr-3" />
                      View Photo
                    </button>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-white text-7xl">
                      <FaCamera className="animate-bounce-slow" />
                    </div>
                  </div>
                </div>

                {/* Card Footer - Enhanced */}
                <div className="p-8 relative">
                  <h4 className="text-2xl font-black text-gray-900 mb-5 group-hover:text-purple-600 transition-colors">{item.subtitle}</h4>
                  <div className="flex items-center justify-between text-gray-600">
                    <div className="flex items-center group-hover:scale-110 transition-transform">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-2">
                        <FaEye className="text-gray-500" />
                      </div>
                      <span className="text-lg font-bold">{item.views} views</span>
                    </div>
                    <div className="flex items-center group-hover:scale-110 transition-transform">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-2">
                        <FaHeart className="text-red-500" />
                      </div>
                      <span className="text-lg font-bold">{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results - Enhanced */}
          {filteredItems.length === 0 && (
            <div className="text-center py-32 animate-scaleIn">
              <div className="text-9xl mb-8">📷</div>
              <h3 className="text-4xl font-black text-gray-900 mb-4">No photos found</h3>
              <p className="text-2xl text-gray-600 mb-8">Try adjusting your search or filter</p>
              <button
                onClick={() => { setSearchTerm(''); setActiveFilter('all'); }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 py-28 relative overflow-hidden gradient-animate">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fadeInUp">
          <div className="text-8xl mb-8 animate-bounce-slow">📸</div>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 neon-text">
            Want to Be Part of These Memories?
          </h2>
          <p className="text-3xl text-white mb-12 font-light">
            Join School and create your own success stories!
          </p>
          <Link
            href="/admission"
            className="group inline-flex items-center bg-white text-purple-600 px-16 py-6 rounded-full font-black text-2xl shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-300"
          >
            Apply for Admission
            <FaArrowRight className="ml-4 text-3xl group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
