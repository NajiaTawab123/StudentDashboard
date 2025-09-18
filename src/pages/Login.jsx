import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Animate login card and floating icons
  useEffect(() => {
    gsap.from(".login-container", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    // Animate floating icons
    gsap.utils.toArray(".floating-icon").forEach((icon, i) => {
      gsap.fromTo(
        icon,
        { y: -20, opacity: 0 },
        {
          y: 20,
          opacity: 0.2,
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "student@test.com" && password === "123456") {
      gsap.to(".login-container", { opacity: 0, y: -50, duration: 0.5 });
      setTimeout(() => navigate("/welcome"), 500);
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-purple-50 overflow-hidden">
      {/* Floating decorative icons */}
      <span className="floating-icon absolute top-10 left-20 text-purple-200 text-4xl animate-spin">📘</span>
      <span className="floating-icon absolute bottom-24 right-16 text-purple-300 text-5xl animate-pulse">✏️</span>
      <span className="floating-icon absolute top-1/3 right-10 text-purple-100 text-6xl animate-bounce">🎓</span>
      <span className="floating-icon absolute bottom-16 left-32 text-purple-200 text-4xl animate-spin">📖</span>

      <div className="login-container bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 w-full max-w-md relative z-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-purple-700">Student Portal Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-purple-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-purple-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all shadow-md"
          >
            Sign In
          </button>
        </form>
        <p className="text-center mt-6 text-purple-500 text-sm">
          Use <strong>student@test.com</strong> / <strong>123456</strong>
        </p>
      </div>
    </div>
  );
};

export default Login;
