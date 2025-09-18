import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BookOpen, Award, Clock } from "lucide-react"; // icons

// 📌 ProgressCard Component
// Shows GPA, grades, and progress with lilac/purple theme + GSAP animations
export default function ProgressCard({ 
  title, 
  subtitle, 
  percentage, 
  completed, 
  remaining, 
  gpa, 
  grade 
}) {
  const cardRef = useRef(null);
  const circleRef = useRef(null);

  // ✨ Animate card on mount
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.9, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power3.out" }
    );
  }, []);

  // ✨ Animate circular progress (fills up smoothly)
  useEffect(() => {
    if (circleRef.current) {
      gsap.fromTo(
        circleRef.current,
        { strokeDasharray: "0, 1000" },
        { strokeDasharray: "1000, 1000", duration: 1.2, ease: "power2.out" }
      );
    }
  }, [percentage]);

  return (
    <div
      ref={cardRef}
      className="bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 rounded-2xl p-6 shadow-lg border border-purple-300"
    >
      {/* Header */}
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-purple-900 flex items-center justify-center gap-2">
          <BookOpen className="w-5 h-5 text-purple-600" /> {title}
        </h3>
        <p className="text-xs text-purple-600">{subtitle}</p>
      </div>

      {/* Circular Progress */}
      <div className="flex justify-center mb-4 relative">
        <CircularProgress
          ref={circleRef}
          percentage={percentage}
          size={window.innerWidth < 768 ? 120 : 160}
          strokeWidth={16}
          color="rgb(147, 51, 234)" // purple
          bgColor="rgb(233, 213, 255)" // lilac bg
        >
          <div className="text-center">
            <div className="text-2xl font-extrabold text-purple-900">
              {gpa ?? `${percentage}%`}
            </div>
            <div className="text-xs text-purple-600">
              {gpa ? "/ 4.0" : "Complete"}
            </div>
          </div>
        </CircularProgress>
      </div>

      {/* Details */}
      <div className="space-y-2 text-sm">
        {completed !== undefined && (
          <>
            <div className="flex justify-between items-center">
              <span className="text-purple-700 flex items-center gap-1">
                <Award className="w-4 h-4 text-purple-500" /> Completed
              </span>
              <span className="font-semibold text-purple-900">{completed} hrs</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-purple-700 flex items-center gap-1">
                <Clock className="w-4 h-4 text-purple-500" /> Remaining
              </span>
              <span className="font-semibold text-purple-900">{remaining} hrs</span>
            </div>
          </>
        )}

        {gpa && (
          <>
            <div className="flex justify-between">
              <span className="text-purple-700">Current GPA</span>
              <span className="font-semibold text-purple-900">{gpa}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-purple-700">Letter Grade</span>
              <span className="font-semibold text-purple-800 bg-purple-100 px-2 py-0.5 rounded-lg text-xs">
                {grade}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
