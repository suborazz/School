import React, { useState } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import DashboardLayout from '../../components/DashboardLayout';
import { 
  FaClipboardCheck, FaChalkboard, FaBook, FaCalendar,
  FaUserCheck, FaChartLine, FaUpload, FaClock, FaBell,
  FaTrophy, FaUsers, FaStar, FaCheckCircle, FaEdit,
  FaFileAlt, FaGraduationCap, FaClipboardList, FaArrowRight,
  FaExclamationCircle, FaComments, FaAward
} from 'react-icons/fa';

export default function StaffDashboard() {
  const [currentTime] = useState(new Date());

  const stats = [
    { 
      title: 'My Classes', 
      value: '6', 
      icon: FaChalkboard, 
      gradient: 'from-blue-500 via-blue-600 to-cyan-500',
      bgPattern: 'from-blue-50 to-cyan-50',
      subtitle: 'Active classes',
      trend: '+2 this semester'
    },
    { 
      title: 'Total Students', 
      value: '180', 
      icon: FaUsers, 
      gradient: 'from-green-500 via-green-600 to-emerald-500',
      bgPattern: 'from-green-50 to-emerald-50',
      subtitle: 'Under your guidance',
      trend: 'Across all classes'
    },
    { 
      title: 'Assignments', 
      value: '12', 
      icon: FaBook, 
      gradient: 'from-purple-500 via-purple-600 to-pink-500',
      bgPattern: 'from-purple-50 to-pink-50',
      subtitle: 'Active assignments',
      trend: '8 pending reviews'
    },
    { 
      title: 'Attendance', 
      value: '94%', 
      icon: FaClipboardCheck, 
      gradient: 'from-orange-500 via-orange-600 to-red-500',
      bgPattern: 'from-orange-50 to-red-50',
      subtitle: 'This month',
      trend: 'Excellent'
    },
  ];

  const quickActions = [
    { name: 'Mark Attendance', icon: FaUserCheck, gradient: 'from-blue-500 to-cyan-500', badge: null },
    { name: 'Add Grades', icon: FaChartLine, gradient: 'from-green-500 to-emerald-500', badge: '8 pending' },
    { name: 'Upload Content', icon: FaUpload, gradient: 'from-purple-500 to-pink-500', badge: null },
    { name: 'View Schedule', icon: FaClock, gradient: 'from-orange-500 to-red-500', badge: null },
    { name: 'Student Reports', icon: FaFileAlt, gradient: 'from-pink-500 to-rose-500', badge: null },
    { name: 'Class Analytics', icon: FaChartLine, gradient: 'from-indigo-500 to-purple-500', badge: null },
  ];

  const todaysSchedule = [
    { time: '09:00 AM', class: 'Class 10-A', subject: 'Mathematics', room: 'Room 201', status: 'upcoming' },
    { time: '10:30 AM', class: 'Class 9-B', subject: 'Science', room: 'Lab 1', status: 'upcoming' },
    { time: '12:00 PM', class: 'Class 10-C', subject: 'Mathematics', room: 'Room 201', status: 'current' },
    { time: '02:00 PM', class: 'Class 9-A', subject: 'Physics', room: 'Lab 2', status: 'upcoming' },
    { time: '03:30 PM', class: 'Class 8-B', subject: 'Mathematics', room: 'Room 202', status: 'upcoming' },
  ];

  const pendingTasks = [
    { task: 'Grade Math Unit Test', count: 45, priority: 'high', icon: '📝' },
    { task: 'Review Assignments', count: 28, priority: 'medium', icon: '📚' },
    { task: 'Upload Study Material', count: 3, priority: 'low', icon: '📤' },
    { task: 'Attendance Report', count: 1, priority: 'medium', icon: '📊' },
  ];

  const classPerformance = [
    { class: 'Class 10-A', students: 45, avg: '88%', color: 'from-green-500 to-emerald-500' },
    { class: 'Class 10-B', students: 42, avg: '85%', color: 'from-blue-500 to-cyan-500' },
    { class: 'Class 9-A', students: 48, avg: '82%', color: 'from-purple-500 to-pink-500' },
  ];

  const topStudents = [
    { name: 'Rahul Kumar', class: '10-A', score: '98%', rank: 1 },
    { name: 'Priya Sharma', class: '10-B', score: '96%', rank: 2 },
    { name: 'Amit Patel', class: '9-A', score: '95%', rank: 3 },
  ];

  return (
    <ProtectedRoute allowedRoles={['staff']}>
      <DashboardLayout>
        <div className="space-y-8">
          {/* Header Section - Enhanced */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between animate-fadeInUp gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient mb-2 sm:mb-3">Staff Dashboard</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-semibold">Welcome back! Ready to inspire young minds today?</p>
            </div>
            <div className="flex gap-3 sm:gap-4 mt-0">
              <div className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold shadow-lg text-sm sm:text-base">
                <FaClock className="inline mr-1 sm:mr-2" />
                {currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
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
                  <p className="text-xs text-gray-500 font-semibold">{stat.subtitle}</p>
                  <p className="text-xs text-purple-600 font-bold mt-1">{stat.trend}</p>
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
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-2">
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Quick Actions</h2>
                  <span className="text-xs sm:text-sm text-gray-500 font-semibold">Most used features</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                    >
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      <div className="relative text-center">
                        <div className={`w-14 h-14 bg-gradient-to-br ${action.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                          <action.icon className="text-white text-2xl" />
                        </div>
                        <span className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors">{action.name}</span>
                        {action.badge && (
                          <span className="absolute -top-2 -right-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full font-bold">
                            {action.badge}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Today's Schedule - Enhanced */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 hover:shadow-purple-500/20 transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
                  <div className="flex items-center">
                    <FaCalendar className="text-3xl sm:text-4xl text-purple-600 mr-2 sm:mr-3 animate-bounce-slow flex-shrink-0" />
                    <div className="min-w-0">
                      <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Today&apos;s Schedule</h2>
                      <p className="text-xs sm:text-sm text-gray-600 font-semibold truncate">{new Date().toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>
                  <button className="px-3 sm:px-4 py-2 bg-purple-100 text-purple-600 rounded-lg font-bold hover:bg-purple-200 transition-all text-xs sm:text-sm self-start sm:self-auto">
                    Full Schedule
                  </button>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {todaysSchedule.map((item, index) => (
                    <div
                      key={index}
                      className={`group relative flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-102 gap-3 sm:gap-0 ${
                        item.status === 'current' 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl' 
                          : 'bg-gradient-to-r from-gray-50 to-purple-50 hover:shadow-lg'
                      }`}
                    >
                      {/* Time Badge */}
                      <div className="flex items-center flex-1 min-w-0">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${item.status === 'current' ? 'bg-white/20' : 'bg-purple-100'} rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 md:mr-5 shadow-lg ${item.status === 'current' ? '' : 'group-hover:scale-110'} transition-transform flex-shrink-0`}>
                          <FaClock className={`${item.status === 'current' ? 'text-white' : 'text-purple-600'} text-xl sm:text-2xl`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 flex-wrap">
                            <h3 className={`text-base sm:text-lg md:text-xl font-black ${item.status === 'current' ? 'text-white' : 'text-gray-900'} truncate`}>
                              {item.subject}
                            </h3>
                            {item.status === 'current' && (
                              <span className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black animate-pulse">
                                NOW
                              </span>
                            )}
                          </div>
                          <p className={`text-xs sm:text-sm font-semibold ${item.status === 'current' ? 'text-white/90' : 'text-gray-600'} truncate`}>
                            {item.class} • {item.room}
                          </p>
                        </div>
                      </div>
                      <div className={`${item.status === 'current' ? 'text-white' : 'text-purple-600'} font-black text-lg sm:text-xl ml-auto sm:ml-0`}>
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Class Performance - Enhanced */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 hover:shadow-purple-500/20 transition-all duration-500">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8">Class Performance</h2>
                <div className="space-y-4 sm:space-y-6">
                  {classPerformance.map((cls, index) => (
                    <div
                      key={index}
                      className="group p-4 sm:p-5 md:p-6 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-3 sm:gap-0">
                        <div className="flex items-center min-w-0 flex-1">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${cls.color} rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                            <FaChalkboard className="text-white text-xl sm:text-2xl" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-lg sm:text-xl font-black text-gray-900 truncate">{cls.class}</h4>
                            <p className="text-xs sm:text-sm text-gray-600 font-semibold">{cls.students} students</p>
                          </div>
                        </div>
                        <div className="text-left sm:text-right ml-auto sm:ml-0">
                          <p className="text-2xl sm:text-3xl font-black text-gray-900">{cls.avg}</p>
                          <p className="text-xs text-gray-500 font-semibold">Average</p>
                        </div>
                      </div>
                      <div className="h-2.5 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${cls.color} rounded-full transition-all duration-1000`} style={{ width: cls.avg }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6 sm:space-y-8">
              {/* Pending Tasks - Enhanced */}
              <div className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 text-white hover:shadow-orange-500/40 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
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
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-black">Pending Tasks</h2>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-black text-sm sm:text-base">{pendingTasks.length}</span>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    {pendingTasks.map((task, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all cursor-pointer group gap-2"
                      >
                        <div className="flex items-center flex-1 min-w-0">
                          <span className="text-2xl sm:text-3xl mr-2 sm:mr-3 flex-shrink-0">{task.icon}</span>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-sm sm:text-base truncate">{task.task}</p>
                            <p className="text-xs opacity-75">{task.count} items</p>
                          </div>
                        </div>
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-black flex-shrink-0 ${
                          task.priority === 'high' ? 'bg-red-500' : 
                          task.priority === 'medium' ? 'bg-yellow-500' : 
                          'bg-green-500'
                        }`}>
                          {task.priority}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-4 sm:mt-6 bg-white text-purple-600 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-black hover:bg-gray-100 transition-all transform hover:scale-105 text-sm sm:text-base">
                    View All Tasks
                  </button>
                </div>
              </div>

              {/* Top Students - Enhanced */}
              <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 text-white hover:shadow-yellow-500/40 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
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
                    <FaTrophy className="text-4xl sm:text-5xl mr-2 sm:mr-3 animate-bounce-slow" />
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black">Top Students</h2>
                      <p className="text-xs sm:text-sm opacity-90">Your star performers</p>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    {topStudents.map((student, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 sm:p-4 md:p-5 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition-all"
                      >
                        <div className="flex items-center min-w-0 flex-1">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3 md:mr-4 font-black text-purple-600 text-base sm:text-lg md:text-xl shadow-lg flex-shrink-0">
                            {student.rank}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-black text-sm sm:text-base md:text-lg truncate">{student.name}</p>
                            <p className="text-xs sm:text-sm opacity-90">{student.class}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0 ml-2">
                          <p className="text-xl sm:text-2xl font-black">{student.score}</p>
                          <div className="flex gap-0.5 sm:gap-1 justify-end mt-1">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="text-yellow-300 text-xs sm:text-sm" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-4 sm:mt-6 bg-white text-orange-600 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-black hover:bg-gray-100 transition-all transform hover:scale-105 text-sm sm:text-base">
                    View All Rankings
                  </button>
                </div>
              </div>

              {/* Quick Stats - Enhanced */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 hover:shadow-purple-500/20 transition-all duration-500">
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 sm:mb-6">Today&apos;s Summary</h2>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { label: 'Classes Today', value: '5', icon: FaChalkboard, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Attendance Marked', value: '3/5', icon: FaCheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
                    { label: 'Grades Pending', value: '45', icon: FaEdit, color: 'text-orange-600', bg: 'bg-orange-50' },
                    { label: 'New Messages', value: '8', icon: FaComments, color: 'text-purple-600', bg: 'bg-purple-50' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 sm:p-4 md:p-5 ${item.bg} rounded-xl hover:shadow-lg transition-all hover:scale-105`}
                    >
                      <div className="flex items-center min-w-0 flex-1">
                        <item.icon className={`${item.color} text-xl sm:text-2xl mr-2 sm:mr-3 flex-shrink-0`} />
                        <span className="font-bold text-gray-900 text-sm sm:text-base truncate">{item.label}</span>
                      </div>
                      <span className={`text-2xl sm:text-3xl font-black ${item.color} flex-shrink-0 ml-2`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Banner - Enhanced */}
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 text-white hover:shadow-green-500/40 transition-all duration-500 animate-fadeInUp relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full filter blur-3xl top-0 left-0 animate-blob"></div>
              <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full filter blur-3xl bottom-0 right-0 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <div className="flex items-center mb-3 sm:mb-4">
                  <FaAward className="text-4xl sm:text-5xl md:text-6xl mr-3 sm:mr-4 animate-bounce-slow flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black neon-text mb-1 sm:mb-2">Your Impact</h3>
                    <p className="text-sm sm:text-base md:text-lg opacity-90 font-semibold">Making a difference every day</p>
                  </div>
                </div>
                <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed">
                  You&apos;ve helped <strong className="text-yellow-300 font-black text-lg sm:text-xl md:text-2xl">180 students</strong> achieve their dreams this year!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { label: 'Students Taught', value: '180', icon: '👨‍🎓' },
                  { label: 'Avg Performance', value: '87%', icon: '📈' },
                  { label: 'Completion Rate', value: '96%', icon: '✅' },
                  { label: 'Satisfaction', value: '4.8/5', icon: '⭐' },
                ].map((metric, i) => (
                  <div
                    key={i}
                    className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 text-center hover:bg-white/30 transition-all"
                  >
                    <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">{metric.icon}</div>
                    <p className="text-2xl sm:text-2xl md:text-3xl font-black mb-1">{metric.value}</p>
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
