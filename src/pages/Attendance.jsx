// src/pages/AttendanceOverview.jsx
import React, { useEffect, useRef } from "react";
import {
  CheckCircle,
  AlertCircle,
  BookOpen,
  BarChart,
  UserCheck,
  XCircle,
} from "lucide-react";
import gsap from "gsap";

// 🎯 Reusable StatCard
function StatCard({ title, value, icon }) {
  return (
    <div className="stat-card flex items-center gap-4 bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-gray-200 hover:shadow-xl transition">
      <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl shadow-md">
        {React.cloneElement(icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
      </div>
      <div>
        <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">{title}</p>
        <p className="text-xl sm:text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

export default function AttendanceOverview() {
  const containerRef = useRef(null);

  // Example data
  const subjects = [
    { name: "Web Development", percentage: 85.7, total: 42, present: 36, absent: 6 },
    { name: "OOP", percentage: 84.2, total: 38, present: 32, absent: 6 },
    { name: "Data Structures", percentage: 91.1, total: 45, present: 41, absent: 4 },
    { name: "Database Systems", percentage: 87.5, total: 40, present: 35, absent: 5 },
    { name: "Computer Networks", percentage: 80, total: 35, present: 28, absent: 7 },
    { name: "Software Engineering", percentage: 62.5, total: 48, present: 30, absent: 18 },
  ];

  const totalClasses = subjects.reduce((acc, s) => acc + s.total, 0);
  const totalPresent = subjects.reduce((acc, s) => acc + s.present, 0);
  const totalAbsent = subjects.reduce((acc, s) => acc + s.absent, 0);
  const overallPercentage = ((totalPresent / totalClasses) * 100).toFixed(1);

  // 🎬 GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".header",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          ".stat-card",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "back.out(1.7)" },
          "-=0.3"
        )
        .fromTo(
          ".subject-card",
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="space-y-8 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Floating background icons */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <span className="absolute top-10 left-16 text-purple-400 text-5xl">📘</span>
        <span className="absolute bottom-20 right-24 text-indigo-400 text-6xl">✏️</span>
        <span className="absolute top-1/3 right-10 text-purple-300 text-4xl">🎓</span>
        <span className="absolute bottom-10 left-32 text-indigo-300 text-5xl">📖</span>
      </div>

      {/* Header */}
      <div className="header bg-gradient-to-r from-purple-600 to-indigo-500 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">
          Najia Tawab | Attendance Overview
        </h1>
        <p className="text-sm sm:text-base text-gray-100 mb-6">
          Track your performance and stay on top of your classes 
        </p>

        {/* Stat Cards (the ones under your name) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
          <StatCard title="Overall Attendance" value={`${overallPercentage}%`} icon={<BarChart />} />
          <StatCard title="Total Classes" value={totalClasses} icon={<BookOpen />} />
          <StatCard title="Present" value={totalPresent} icon={<UserCheck />} />
          <StatCard title="Absent" value={totalAbsent} icon={<XCircle />} />
        </div>
      </div>

      {/* Subject-wise Attendance */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {subjects.map((subject, index) => {
          const isGood = subject.percentage >= 75;
          return (
            <div
              key={index}
              className="subject-card bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col w-full"
            >
              <div className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4 border-b border-gray-100">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                  {subject.name}
                </h3>
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-700">
                  <span className="font-medium">Attendance:</span>{" "}
                  <span
                    className={`font-bold ${isGood ? "text-purple-600" : "text-red-500"}`}
                  >
                    {subject.percentage}%
                  </span>
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                  <span className="font-medium">Total:</span> {subject.total}
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                  <span className="font-medium">Present:</span> {subject.present}
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                  <span className="font-medium">Absent:</span> {subject.absent}
                </p>

                <div className="flex items-center mt-2">
                  {isGood ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="text-purple-600 font-medium text-sm sm:text-base">
                        Good Standing
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                      <span className="text-red-500 font-medium text-sm sm:text-base">
                        Below Average
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
