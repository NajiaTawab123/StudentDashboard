// src/pages/Users.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  UsersRound,
  PenTool,
  Laptop,
  PencilRuler,
} from "lucide-react";
import { gsap } from "gsap";

export default function Users() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const users = [
    { id: 1, name: "Saad Ali", role: "Student", email: "saad.ali@example.com", cgpa: 3.75 },
    { id: 2, name: "Najia Tawab", role: "Student", email: "najia.tawab@example.com", cgpa: 3.95 },
    { id: 3, name: "Babar Azam", role: "Instructor", email: "babar.azam@example.com", cgpa: 0 },
    { id: 4, name: "Haris Rauf", role: "Instructor", email: "haris.rauf@example.com", cgpa: 0 },
    { id: 5, name: "Fatima Khan", role: "Student", email: "fatima.khan@example.com", cgpa: 3.65 },
    { id: 6, name: "Ali Raza", role: "Student", email: "ali.raza@example.com", cgpa: 3.90 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate user cards safely
      gsap.fromTo(
        ".user-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
        }
      );

      // Floating background icons
      gsap.to(".floating-icon", {
        y: 35,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      });

      // Pulse effect for avatars
      gsap.to(".avatar", {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        duration: 2.2,
        ease: "power1.inOut",
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div ref={containerRef} className="relative space-y-10 font-sans">
      {/* Floating Background Study Icons */}
      <GraduationCap className="floating-icon absolute top-12 left-10 text-purple-300 opacity-25 w-32 h-32" />
      <BookOpen className="floating-icon absolute bottom-20 right-16 text-pink-300 opacity-25 w-28 h-28" />
      <PenTool className="floating-icon absolute top-1/3 right-1/4 text-indigo-300 opacity-25 w-24 h-24" />
      <Laptop className="floating-icon absolute bottom-1/3 left-1/4 text-blue-300 opacity-25 w-24 h-24" />
      <PencilRuler className="floating-icon absolute top-1/4 left-1/3 text-green-300 opacity-25 w-20 h-20" />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-10 text-white shadow-2xl backdrop-blur-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-2">
          Users
        </h1>
        <p className="text-gray-100 text-lg">
          Meet all the amazing students and instructors in the portal 
        </p>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {users.map((user) => (
          <div
            key={user.id}
            className="user-card relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-t-3xl p-6 flex items-center gap-4">
              <div className="avatar w-16 h-16 rounded-full bg-white flex items-center justify-center text-purple-600 text-2xl font-bold shadow-lg">
                {user.name[0]}
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold">
                  {user.name}
                </h3>
                <p className="text-gray-200 text-sm">{user.role}</p>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 space-y-3">
              <p className="text-gray-700 text-sm">
                <span className="font-medium">📧 Email:</span> {user.email}
              </p>
              {user.cgpa > 0 && (
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">🎓 CGPA:</span> {user.cgpa}
                </p>
              )}

              {/* View Profile Button */}
              <button
                onClick={() => navigate(`/users/${user.id}`)}
                className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition"
              >
                View Profile
              </button>
            </div>

            {/* Floating Icon inside Card */}
            <UsersRound className="absolute bottom-4 right-4 text-purple-300 opacity-30 w-12 h-12" />
          </div>
        ))}
      </div>
    </div>
  );
}
