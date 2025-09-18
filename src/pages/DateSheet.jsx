// src/pages/DateSheet.jsx
import React, { useEffect, useRef } from "react";
import { Calendar, Clock, MapPin, User, BookOpen, GraduationCap } from "lucide-react";
import { gsap } from "gsap";

export default function DateSheet() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation (fixed: use fromTo instead of from)
      gsap.fromTo(
        ".exam-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      // Floating background icons
      gsap.to(".floating-icon", {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  const exams = [
    { id: 1, course: "OOP", instructor: "Babar Azam", date: "2025-07-13", time: "12:00 - 14:00", venue: "A-008" },
    { id: 2, course: "COAL", instructor: "Virat Kohli", date: "2025-07-14", time: "12:00 - 14:00", venue: "A-010" },
    { id: 3, course: "MVC", instructor: "Haris Rauf", date: "2025-07-15", time: "10:00 - 12:00", venue: "B-108" },
    { id: 4, course: "Database Systems", instructor: "Steve Smith", date: "2025-07-16", time: "09:00 - 11:00", venue: "A-012" },
    { id: 5, course: "Networking", instructor: "Shadab Khan", date: "2025-07-17", time: "11:00 - 13:00", venue: "B-101" },
    { id: 6, course: "AI", instructor: "Babar Azam", date: "2025-07-18", time: "14:00 - 16:00", venue: "C-201" },
    { id: 7, course: "Web Development", instructor: "Virat Kohli", date: "2025-07-19", time: "10:00 - 12:00", venue: "A-020" },
    { id: 8, course: "Software Engineering", instructor: "Haris Rauf", date: "2025-07-20", time: "12:00 - 14:00", venue: "B-110" },
  ];

  const gradientClass = "from-purple-500 to-pink-500"; // lilac / purplish theme

  return (
    <div ref={containerRef} className="relative space-y-10 font-sans">
      {/* Floating background study icons */}
      <BookOpen className="floating-icon absolute top-10 left-6 text-purple-300 opacity-20 w-20 h-20" />
      <GraduationCap className="floating-icon absolute bottom-10 right-10 text-pink-300 opacity-20 w-20 h-20" />

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 shadow-xl rounded-3xl p-8 text-white relative overflow-hidden">
        <h1 className="text-4xl font-extrabold mb-2 tracking-wide">Najia Tawab - Exam DateSheet</h1>
        <p className="text-gray-100 text-lg">Spring 2025 | Stay prepared and shine </p>
      </div>

      {/* Exam Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="exam-card relative rounded-[2rem] bg-white/70 backdrop-blur-md shadow-lg border border-transparent hover:border-purple-400 hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 p-6 flex flex-col"
          >
            {/* Gradient Border Accent */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass} rounded-t-[2rem]`} />

            {/* Course Title */}
            <div className="mb-6">
              <span
                className={`inline-block px-4 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r ${gradientClass} shadow`}
              >
                {exam.course}
              </span>
            </div>

            {/* Instructor */}
            <div className="flex items-center mb-4 text-gray-700">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${gradientClass} mr-4`}>
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium mr-2">Instructor:</span> {exam.instructor}
            </div>

            {/* Date */}
            <div className="flex items-center mb-4 text-gray-700">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${gradientClass} mr-4`}>
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium mr-2">Date:</span> {exam.date}
            </div>

            {/* Time */}
            <div className="flex items-center mb-4 text-gray-700">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${gradientClass} mr-4`}>
                <Clock className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium mr-2">Time:</span> {exam.time}
            </div>

            {/* Venue */}
            <div className="flex items-center text-gray-700">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${gradientClass} mr-4`}>
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium mr-2">Venue:</span> {exam.venue}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


