import React, { useState } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import DashboardLayout from '../../components/DashboardLayout';
import { 
  FaClipboardCheck, FaTrophy, FaBook, FaCalendar,
  FaChartLine, FaStar, FaAward, FaClock, FaCheckCircle,
  FaDownload, FaPlay, FaFileAlt, FaGraduationCap,
  FaBell, FaExclamationCircle, FaArrowRight, FaMedal,
  FaChalkboard, FaBookOpen, FaPencilAlt
} from 'react-icons/fa';

export default function StudentDashboard() {
  const stats = [
    { 
      title: 'Attendance', 
      value: '95%', 
      icon: FaClipboardCheck, 
      gradient: 'from-blue-500 via-blue-600 to-cyan-500',
      bgPattern: 'from-blue-50 to-cyan-50',
      subtitle: 'Excellent record',
      progress: 95
    },
    { 
      title: 'Overall Grade', 
      value: 'A', 
      icon: FaTrophy, 
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      bgPattern: 'from-yellow-50 to-orange-50',
      subtitle: 'Top 5%',
      progress: 90
    },
    { 
      title: 'Assignments', 
      value: '8/12', 
      icon: FaBook, 
      gradient: 'from-green-500 via-green-600 to-emerald-500',
      bgPattern: 'from-green-50 to-emerald-50',
      subtitle: 'Completed',
      progress: 67
    },
    { 
      title: 'Upcoming Tests', 
      value: '3', 
      icon: FaCalendar, 
      gradient: 'from-red-500 via-pink-500 to-rose-500',
      bgPattern: 'from-red-50 to-pink-50',
      subtitle: 'This week',
      progress: 30
    },
  ];

  const quickActions = [
    { name: 'View Attendance', icon: FaClipboardCheck, gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Check Grades', icon: FaTrophy, gradient: 'from-purple-500 to-pink-500' },
    { name: 'Access LMS', icon: FaBookOpen, gradient: 'from-green-500 to-emerald-500' },
    { name: 'View Timetable', icon: FaClock, gradient: 'from-orange-500 to-red-500' },
    { name: 'Download Materials', icon: FaDownload, gradient: 'from-pink-500 to-rose-500' },
    { name: 'Submit Assignment', icon: FaPencilAlt, gradient: 'from-indigo-500 to-purple-500' },
  ];

  const recentGrades = [
    { subject: 'Mathematics', marks: '95/100', grade: 'A+', gradient: 'from-green-500 to-emerald-500', percentage: 95 },
    { subject: 'Science', marks: '88/100', grade: 'A', gradient: 'from-blue-500 to-cyan-500', percentage: 88 },
    { subject: 'English', marks: '92/100', grade: 'A+', gradient: 'from-purple-500 to-pink-500', percentage: 92 },
    { subject: 'History', marks: '85/100', grade: 'A', gradient: 'from-yellow-500 to-orange-500', percentage: 85 },
    { subject: 'Physics', marks: '90/100', grade: 'A+', gradient: 'from-indigo-500 to-purple-500', percentage: 90 },
  ];

  const upcomingAssignments = [
    { title: 'Math Assignment', subject: 'Mathematics', due: '2 days', status: 'pending', priority: 'high' },
    { title: 'Science Project', subject: 'Science', due: '5 days', status: 'in-progress', priority: 'medium' },
    { title: 'English Essay', subject: 'English', due: '1 week', status: 'pending', priority: 'low' },
  ];

  const upcomingTests = [
    { subject: 'Mathematics', date: 'Nov 8, 2025', time: '10:00 AM', type: 'Unit Test' },
    { subject: 'Science', date: 'Nov 12, 2025', time: '11:00 AM', type: 'Mid Term' },
    { subject: 'English', date: 'Nov 15, 2025', time: '09:00 AM', type: 'Quiz' },
  ];

  return (
    <ProtectedRoute allowedRoles={['student']}>
      <DashboardLayout>
        <div className="space-y-8">
          {/* Header Section - Enhanced */}
          <div className="animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient mb-2 sm:mb-3">Student Dashboard</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-semibold">Track your progress and achieve excellence!</p>
          </div>

          {/* Stats Grid - Enhanced */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger-children">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-4 overflow-hidden tilt-effect"
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgPattern} opacity-50`}></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent shimmer"></div>
                </div>

                <div className="relative">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${stat.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <stat.icon className="text-white text-2xl sm:text-3xl" />
                  </div>
                  <h3 className="text-gray-600 text-xs sm:text-sm font-bold mb-2 uppercase tracking-wide">{stat.title}</h3>
                  <p className="text-3xl sm:text-4xl font-black text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-semibold mb-3 sm:mb-4">{stat.subtitle}</p>
                  
                  {/* Progress Bar */}
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-1000`} style={{ width: `${stat.progress}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Left Column - 2 cols */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Actions - Enhanced */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 hover:shadow-purple-500/20 transition-all duration-500 animate-fadeInUp">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8">Quick Actions</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="group relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      <div className="relative text-center">
                        <div className={`w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-gradient-to-br ${action.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                          <action.icon className="text-white text-xl sm:text-2xl" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-white transition-colors">{action.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Grades - Enhanced */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 hover:shadow-purple-500/20 transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
                  <div className="flex items-center">
                    <FaTrophy className="text-3xl sm:text-4xl text-yellow-500 mr-2 sm:mr-3 animate-bounce-slow flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Recent Grades</h2>
                      <p className="text-xs sm:text-sm text-gray-600 font-semibold">Your latest performance</p>
                    </div>
                  </div>
                  <button className="px-3 sm:px-4 py-2 bg-purple-100 text-purple-600 rounded-lg font-bold hover:bg-purple-200 transition-all text-xs sm:text-sm self-start sm:self-auto">
                    View All
                  </button>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {recentGrades.map((item, index) => (
                    <div
                      key={index}
                      className="group p-4 sm:p-5 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-3 sm:gap-0">
                        <div className="flex items-center flex-1 min-w-0">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                            <FaBook className="text-white text-lg sm:text-xl" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="font-black text-gray-900 text-base sm:text-lg block truncate">{item.subject}</span>
                            <span className="text-xs sm:text-sm text-gray-600 font-semibold">{item.marks}</span>
                          </div>
                        </div>
                        <div className="text-left sm:text-right ml-auto sm:ml-0">
                          <span className={`inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r ${item.gradient} text-white rounded-full text-base sm:text-lg font-black shadow-lg`}>
                            {item.grade}
                          </span>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${item.gradient} rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Average Grade Display */}
                <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl text-white text-center">
                  <p className="text-xs sm:text-sm opacity-90 mb-2">Your Average</p>
                  <p className="text-4xl sm:text-5xl font-black neon-text">90%</p>
                  <div className="flex items-center justify-center mt-2 sm:mt-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-300 text-xl sm:text-2xl mx-0.5 sm:mx-1" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Upcoming Assignments - Enhanced */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 hover:shadow-purple-500/20 transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
                  <div className="flex items-center">
                    <FaFileAlt className="text-3xl sm:text-4xl text-purple-600 mr-2 sm:mr-3 animate-bounce-slow flex-shrink-0" />
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Upcoming Assignments</h2>
                  </div>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-500 text-white rounded-full text-xs sm:text-sm font-black self-start sm:self-auto">
                    {upcomingAssignments.filter(a => a.status === 'pending').length} Due
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {upcomingAssignments.map((item, index) => (
                    <div
                      key={index}
                      className={`group p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl transition-all hover:-translate-y-1 border-l-4 ${
                        item.priority === 'high' ? 'bg-red-50 border-red-500 hover:shadow-red-200' :
                        item.priority === 'medium' ? 'bg-yellow-50 border-yellow-500 hover:shadow-yellow-200' :
                        'bg-green-50 border-green-500 hover:shadow-green-200'
                      } hover:shadow-lg`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                            <p className="font-black text-gray-900 text-base sm:text-lg truncate">{item.title}</p>
                            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-black ${
                              item.status === 'pending' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-white'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 font-semibold">
                            <FaBook className="inline mr-1 sm:mr-2" />
                            {item.subject}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">
                            <FaClock className="inline mr-1 sm:mr-2" />
                            Due in {item.due}
                          </p>
                        </div>
                        <button className={`px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${
                          item.priority === 'high' ? 'from-red-500 to-pink-500' :
                          item.priority === 'medium' ? 'from-yellow-500 to-orange-500' :
                          'from-green-500 to-emerald-500'
                        } text-white rounded-xl font-bold hover:scale-110 transition-transform shadow-lg text-sm sm:text-base self-start sm:self-auto`}>
                          Start
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6 sm:space-y-8">
              {/* Performance Card - Enhanced */}
              <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 text-white hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-white rounded-full"
                      style={{
                        width: `${Math.random() * 80 + 40}px`,
                        height: `${Math.random() * 80 + 40}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="relative">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <FaChartLine className="text-4xl sm:text-5xl mr-2 sm:mr-3 animate-bounce-slow flex-shrink-0" />
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black">Your Rank</h2>
                      <p className="text-xs sm:text-sm opacity-90">Class position</p>
                    </div>
                  </div>

                  <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 text-center">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <FaMedal className="text-yellow-300 text-5xl sm:text-6xl animate-bounce-slow" />
                    </div>
                    <p className="text-5xl sm:text-6xl md:text-7xl font-black neon-text mb-2">#5</p>
                    <p className="text-xs sm:text-sm opacity-90">Out of 45 students</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {[
                      { label: 'Top Subject', value: 'Math', icon: '📐' },
                      { label: 'Avg Score', value: '90%', icon: '📊' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 text-center">
                        <p className="text-2xl sm:text-3xl mb-1">{item.icon}</p>
                        <p className="text-xl sm:text-2xl font-black">{item.value}</p>
                        <p className="text-xs opacity-75">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-4 sm:mt-6 bg-white text-purple-600 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-black hover:bg-gray-100 transition-all transform hover:scale-105 text-sm sm:text-base">
                    View Full Report
                  </button>
                </div>
              </div>

              {/* Upcoming Tests - Enhanced */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 hover:shadow-purple-500/20 transition-all duration-500">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">Upcoming Tests</h2>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-black animate-pulse">
                    {upcomingTests.length}
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {upcomingTests.map((test, index) => (
                    <div
                      key={index}
                      className="p-4 sm:p-5 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl sm:rounded-2xl border-2 border-red-200 hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                          <FaFileAlt className="text-white text-sm sm:text-base" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-black text-gray-900 text-sm sm:text-base truncate">{test.subject}</h4>
                          <p className="text-xs text-gray-600 font-semibold">{test.type}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm gap-1 sm:gap-0">
                        <span className="text-gray-700 font-semibold">
                          <FaCalendar className="inline mr-1 sm:mr-2 text-red-500" />
                          {test.date}
                        </span>
                        <span className="text-gray-700 font-semibold">
                          <FaClock className="inline mr-1 sm:mr-2 text-orange-500" />
                          {test.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-3 sm:mt-4 text-purple-600 font-bold hover:text-purple-700 transition-colors text-sm sm:text-base">
                  View All Tests →
                </button>
              </div>

              {/* Study Resources - Enhanced */}
              <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 text-white hover:shadow-green-500/40 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-white rounded-full"
                      style={{
                        width: `${Math.random() * 60 + 30}px`,
                        height: `${Math.random() * 60 + 30}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="relative">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <FaBookOpen className="text-4xl sm:text-5xl mr-2 sm:mr-3 animate-bounce-slow flex-shrink-0" />
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black">Study Materials</h2>
                      <p className="text-xs sm:text-sm opacity-90">Latest resources</p>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    {[
                      { title: 'Chapter 5 - Mathematics', downloads: 45, icon: '📐' },
                      { title: 'Physics Lab Manual', downloads: 38, icon: '🧪' },
                      { title: 'English Grammar', downloads: 52, icon: '📖' },
                    ].map((resource, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all"
                      >
                        <div className="flex items-center min-w-0 flex-1">
                          <span className="text-2xl sm:text-3xl mr-2 sm:mr-3 flex-shrink-0">{resource.icon}</span>
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-sm sm:text-base truncate">{resource.title}</p>
                            <p className="text-xs opacity-75">{resource.downloads} downloads</p>
                          </div>
                        </div>
                        <FaDownload className="text-lg sm:text-xl opacity-75 hover:scale-110 transition-transform cursor-pointer flex-shrink-0" />
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-4 sm:mt-6 bg-white text-green-600 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-black hover:bg-gray-100 transition-all transform hover:scale-105 text-sm sm:text-base">
                    Browse All Materials
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Banner - Enhanced */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 text-white hover:shadow-blue-500/40 transition-all duration-500 animate-fadeInUp relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full filter blur-3xl top-0 left-0 animate-blob"></div>
              <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full filter blur-3xl bottom-0 right-0 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <div className="flex items-center mb-4 sm:mb-6">
                  <FaAward className="text-5xl sm:text-6xl md:text-7xl mr-3 sm:mr-4 animate-bounce-slow flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black neon-text mb-1 sm:mb-2">Keep Going!</h3>
                    <p className="text-base sm:text-lg md:text-xl opacity-90 font-semibold">You&apos;re doing amazing!</p>
                  </div>
                </div>
                <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed">
                  You&apos;re in the <strong className="font-black">top 10%</strong> of your class. Keep up the excellent work!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { label: 'Assignments Done', value: '8/12', icon: '✅' },
                  { label: 'Tests Taken', value: '15', icon: '📝' },
                  { label: 'Attendance', value: '95%', icon: '📊' },
                  { label: 'Rank', value: '#5', icon: '🏆' },
                ].map((metric, i) => (
                  <div
                    key={i}
                    className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 text-center hover:bg-white/30 transition-all hover:scale-105"
                  >
                    <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">{metric.icon}</div>
                    <p className="text-2xl sm:text-3xl font-black mb-1">{metric.value}</p>
                    <p className="text-xs opacity-90 font-semibold">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
