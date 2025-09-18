// src/pages/Results.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  GraduationCap,
  BookOpen,
  ScrollText,
  CalendarDays,
  Search,
} from "lucide-react";
import { gsap } from "gsap";

// ✅ Reusable StatCard
function StatCard({ title, value, icon }) {
  return (
    <div className="stat-card flex items-center gap-4 bg-white rounded-3xl p-4 shadow-md border border-gray-200 hover:shadow-xl transition">
      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-md">
        {React.cloneElement(icon, { className: "w-6 h-6" })}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-800 font-sans">{value}</p>
      </div>
    </div>
  );
}

export default function Results() {
  const [search, setSearch] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".header-section",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".stat-card",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.5,
          ease: "back.out(1.7)",
        }
      );

      gsap.fromTo(
        ".results-row",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 1,
          ease: "power2.out",
        }
      );

      gsap.to(".floating-icon", {
        y: 30,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const semesters = [
    { id: 1, term: "Spring 2023", gradingPoints: 63.34, cumulativeGP: 63.34, cr: 19, totalCR: 19, sgpa: 3.33, cgpa: 3.33 },
    { id: 2, term: "Fall 2023", gradingPoints: 52.32, cumulativeGP: 115.6, cr: 17, totalCR: 36, sgpa: 3.08, cgpa: 3.21 },
    { id: 3, term: "Spring 2024", gradingPoints: 59.33, cumulativeGP: 174.9, cr: 16, totalCR: 52, sgpa: 3.71, cgpa: 3.37 },
    { id: 4, term: "Fall 2024", gradingPoints: 61.25, cumulativeGP: 236.15, cr: 18, totalCR: 70, sgpa: 3.4, cgpa: 3.37 },
    { id: 5, term: "Spring 2025", gradingPoints: 67.8, cumulativeGP: 303.95, cr: 20, totalCR: 90, sgpa: 3.39, cgpa: 3.38 },
    { id: 6, term: "Fall 2025", gradingPoints: 60.5, cumulativeGP: 364.45, cr: 18, totalCR: 108, sgpa: 3.36, cgpa: 3.38 },
    { id: 7, term: "Spring 2026", gradingPoints: 64.0, cumulativeGP: 428.45, cr: 19, totalCR: 127, sgpa: 3.37, cgpa: 3.38 },
    { id: 8, term: "Fall 2026", gradingPoints: 62.2, cumulativeGP: 490.65, cr: 18, totalCR: 145, sgpa: 3.45, cgpa: 3.39 },
    { id: 9, term: "Spring 2027", gradingPoints: 65.0, cumulativeGP: 555.65, cr: 20, totalCR: 165, sgpa: 3.25, cgpa: 3.39 },
    { id: 10, term: "Fall 2027", gradingPoints: 68.5, cumulativeGP: 624.15, cr: 21, totalCR: 186, sgpa: 3.42, cgpa: 3.40 },
  ];

  const overallStats = {
    cgpa: 3.38,
    totalCredits: 186,
    completedCredits: 186,
    currentSemester: "Fall 2027",
  };

  const filteredSemesters = semesters.filter(
    (s) =>
      s.id.toString().includes(search) ||
      s.sgpa.toString().includes(search) ||
      s.cgpa.toString().includes(search)
  );

  return (
    <div ref={containerRef} className="space-y-8 px-4 md:px-8 relative">
      {/* Floating Background Icons */}
      <BookOpen className="floating-icon absolute top-10 left-8 text-purple-300 opacity-20 w-24 h-24" />
      <GraduationCap className="floating-icon absolute bottom-16 right-10 text-pink-300 opacity-20 w-24 h-24" />

      {/* ✅ Header */}
      <div className="header-section bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Najia Tawab - Academic Results</h1>
        <p className="text-gray-100 mb-6">Track your academic progress across semesters </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <StatCard title="CGPA" value={overallStats.cgpa} icon={<Award />} />
          <StatCard title="Total Credits" value={overallStats.totalCredits} icon={<ScrollText />} />
          <StatCard title="Completed" value={overallStats.completedCredits} icon={<BookOpen />} />
          <StatCard title="Current Semester" value={overallStats.currentSemester} icon={<CalendarDays />} />
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-end mb-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="🔍 Search by ID, SGPA, CGPA..."
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Results Table */}
      <div className="overflow-x-auto bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <table className="min-w-full border-collapse md:table-auto">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-2 font-semibold text-gray-700">ID</th>
              <th className="text-left py-3 px-2 font-semibold text-gray-700">Term</th>
              <th className="text-center py-3 px-2 font-semibold text-gray-700">Grading Points</th>
              <th className="text-center py-3 px-2 font-semibold text-gray-700">Cumulative GP</th>
              <th className="text-center py-3 px-2 font-semibold text-gray-700">CR</th>
              <th className="text-center py-3 px-2 font-semibold text-gray-700">Total CR</th>
              <th className="text-center py-3 px-2 font-semibold text-gray-700">SGPA</th>
              <th className="text-center py-3 px-2 font-semibold text-gray-700">CGPA</th>
            </tr>
          </thead>
          <tbody>
            {filteredSemesters.map((s) => (
              <tr
                key={s.id}
                className="results-row border-b border-gray-100 hover:bg-purple-50 transition-colors"
              >
                <td className="py-3 px-2 text-gray-800 font-medium">{s.id}</td>
                <td className="py-3 px-2 text-gray-800">{s.term}</td>
                <td className="py-3 px-2 text-center text-gray-600">{s.gradingPoints}</td>
                <td className="py-3 px-2 text-center text-gray-600">{s.cumulativeGP}</td>
                <td className="py-3 px-2 text-center text-gray-600">{s.cr}</td>
                <td className="py-3 px-2 text-center text-gray-600">{s.totalCR}</td>
                <td className="py-3 px-2 text-center text-gray-800 font-semibold">{s.sgpa}</td>
                <td className="py-3 px-2 text-center text-gray-800 font-semibold">{s.cgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredSemesters.length === 0 && (
          <p className="text-center py-4 text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}
