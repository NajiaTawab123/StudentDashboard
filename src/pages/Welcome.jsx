import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Animate the welcome text
    gsap.fromTo(
      ".welcome-text",
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
    );

    // Animate floating sketches
    gsap.utils.toArray(".float-sketch").forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: -30, opacity: 0 },
        {
          y: 30,
          opacity: 0.5 + Math.random() * 0.4, // brighter
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: i * 0.3,
        }
      );
    });

    // Redirect to dashboard after 2.5s
    const timer = setTimeout(() => navigate("/dashboard"), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 via-purple-100 to-white overflow-hidden">
      {/* Floating sketch-like elements */}
      <div className="float-sketch absolute top-10 left-16 w-16 h-16 border-4 border-purple-500 rounded-full opacity-60"></div>
      <div className="float-sketch absolute top-1/3 right-20 w-24 h-24 border-4 border-purple-600 rounded-full opacity-50"></div>
      <div className="float-sketch absolute bottom-24 left-20 w-20 h-20 border-4 border-purple-500 rounded-full opacity-55"></div>
      <div className="float-sketch absolute bottom-16 right-32 w-28 h-28 border-4 border-purple-400 rounded-full opacity-45"></div>
      <div className="float-sketch absolute top-1/2 left-1/2 w-32 h-32 border-4 border-purple-500 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Welcome text */}
      <h1 className="welcome-text text-4xl md:text-5xl font-bold text-purple-700 text-center z-10">
        Welcome to Your Student Dashboard!
      </h1>
    </div>
  );
};

export default Welcome;

