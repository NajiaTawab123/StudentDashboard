// src/pages/UserDetail.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  User,
  Mail,
  GraduationCap,
  BookOpen,
  TrendingUp,
  Target,
  PenTool,
} from "lucide-react";
import { gsap } from "gsap";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy user data
  const users = [
    { id: 1, name: "Saad Ali", role: "Student", email: "saad.ali@example.com", cgpa: 3.75 },
    { id: 2, name: "Najia Tawab", role: "Student", email: "najia.tawab@example.com", cgpa: 3.95 },
    { id: 3, name: "Babar Azam", role: "Instructor", email: "babar.azam@example.com", cgpa: 0 },
    { id: 4, name: "Haris Rauf", role: "Instructor", email: "haris.rauf@example.com", cgpa: 0 },
    { id: 5, name: "Fatima Khan", role: "Student", email: "fatima.khan@example.com", cgpa: 3.65 },
    { id: 6, name: "Ali Raza", role: "Student", email: "ali.raza@example.com", cgpa: 3.90 },
  ];

  const semesters = [
    { id: 1, term: "Fall 2023", gpa: 3.80, credits: 15 },
    { id: 2, term: "Spring 2024", gpa: 3.70, credits: 18 },
    { id: 3, term: "Fall 2024", gpa: 3.85, credits: 17 },
  ];

  const user = users.find((u) => u.id === parseInt(id));

  useEffect(() => {
    // Smooth fade-in animation for each section
    gsap.from(".fade-section", {
      opacity: 0,
      y: 30,
      duration: 0.9,
      stagger: 0.3,
      ease: "power3.out",
    });

    // Floating study icons in background
    gsap.to(".floating-icon", {
      y: 25,
      repeat: -1,
      yoyo: true,
      duration: 3.5,
      ease: "sine.inOut",
    });
  }, []);

  if (!user) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        ❌ User not found
      </div>
    );
  }

  return (
    <div className="relative max-w-6xl mx-auto mt-8 space-y-10 font-sans">
      {/* Floating Background Icons */}
      <GraduationCap className="floating-icon absolute top-10 left-6 text-purple-300 opacity-20 w-24 h-24" />
      <BookOpen className="floating-icon absolute bottom-16 right-12 text-pink-300 opacity-20 w-24 h-24" />
      <PenTool className="floating-icon absolute top-1/2 left-1/2 text-indigo-300 opacity-20 w-20 h-20" />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-4 transition fade-section"
      >
        <ArrowLeft size={18} />
        Back to Users
      </button>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-10 text-white shadow-xl fade-section">
        <div className="flex items-center gap-6">
          <div className="w-28 h-28 rounded-full bg-white text-purple-600 flex items-center justify-center text-4xl font-bold shadow-md">
            {user.name[0]}
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-wide">
              {user.name}
            </h1>
            <p className="text-purple-100 text-lg font-medium">{user.role}</p>
            <p className="text-gray-200">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-section">
        {user.cgpa > 0 && (
          <div className="p-6 bg-white rounded-2xl shadow-md flex items-center gap-4 border border-gray-100 hover:shadow-xl transition">
            <Award className="w-10 h-10 text-purple-600" />
            <div>
              <p className="text-sm text-gray-500">CGPA</p>
              <h2 className="text-2xl font-bold text-gray-800">{user.cgpa}</h2>
            </div>
          </div>
        )}
        <div className="p-6 bg-white rounded-2xl shadow-md flex items-center gap-4 border border-gray-100 hover:shadow-xl transition">
          <Mail className="w-10 h-10 text-pink-600" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <h2 className="text-lg font-medium text-gray-800">{user.email}</h2>
          </div>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md flex items-center gap-4 border border-gray-100 hover:shadow-xl transition">
          <User className="w-10 h-10 text-indigo-600" />
          <div>
            <p className="text-sm text-gray-500">Role</p>
            <h2 className="text-lg font-medium text-gray-800">{user.role}</h2>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm fade-section">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          {user.role === "Student"
            ? `${user.name} is a dedicated student striving for excellence in academics and beyond. Currently maintaining a CGPA of ${user.cgpa}, Najia shows consistency in coursework, teamwork, and personal growth.`
            : `${user.name} is an inspiring instructor who motivates students, drives innovation, and contributes to knowledge sharing.`}
        </p>
      </div>

      {/* Semesters Section */}
      {user.role === "Student" && (
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm fade-section">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Semester Records</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {semesters.map((sem) => (
              <div
                key={sem.id}
                className="p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition bg-gradient-to-r from-purple-50 to-pink-50"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">{sem.term}</h3>
                <p className="text-gray-600 mb-2">Credits Earned: {sem.credits}</p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-gray-700">GPA: {sem.gpa}</span>
                </div>
                {/* Progress Bar */}
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-500 h-2 rounded-full"
                    style={{ width: `${(sem.gpa / 4) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Academic Goals */}
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm fade-section">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Academic Goals</h2>
        <div className="flex items-start gap-4">
          <Target className="w-10 h-10 text-pink-600" />
          <p className="text-gray-600 leading-relaxed">
            {user.role === "Student"
              ? "Focused on continuous learning, preparing for the final year project, enhancing coding and research skills, and aiming for higher CGPA while maintaining balance in co-curricular activities."
              : "Dedicated to mentoring students, advancing teaching methodologies, and contributing to impactful academic research."}
          </p>
        </div>
      </div>
    </div>
  );
}

