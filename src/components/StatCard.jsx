import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  BookOpen,
  Award,
  ClipboardCheck,
  CalendarDays,
} from "lucide-react"; // student-related icons

// 📌 Reusable Stat Card Component
// Displays quick student stats with icons & animations
export default function StatCard({ title, value, icon, color }) {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  // ✨ Animate card & icon on mount
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "power3.out" }
    );

    gsap.fromTo(
      iconRef.current,
      { rotate: -20, scale: 0.8 },
      {
        rotate: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(2)",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-gradient-to-br from-purple-50 via-indigo-50 to-white 
                 rounded-2xl w-[150px] h-[120px] p-4 flex flex-col justify-center
                 shadow-md border border-gray-100 hover:shadow-lg 
                 transition-transform hover:scale-105"
    >
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div
          ref={iconRef}
          className={`p-3 ${color} text-white rounded-xl shadow-md`}
        >
          {icon}
        </div>

        {/* Text Content */}
        <div>
          <p className="text-xs font-medium text-gray-500 tracking-wide">
            {title}
          </p>
          <p className="text-xl font-extrabold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
}

// 🔹 Example usage inside dashboard
export function StatSection() {
  const stats = [
    {
      title: "Courses",
      value: "6",
      icon: <BookOpen className="w-5 h-5" />,
      color: "bg-indigo-500",
    },
    {
      title: "GPA",
      value: "3.8",
      icon: <Award className="w-5 h-5" />,
      color: "bg-purple-500",
    },
    {
      title: "Tasks Done",
      value: "24",
      icon: <ClipboardCheck className="w-5 h-5" />,
      color: "bg-green-500",
    },
    {
      title: "Attendance",
      value: "92%",
      icon: <CalendarDays className="w-5 h-5" />,
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
      {stats.map((stat, idx) => (
        <StatCard key={idx} {...stat} />
      ))}
    </div>
  );
}
