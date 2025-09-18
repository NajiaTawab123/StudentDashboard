import React, { useEffect } from "react";
import { gsap } from "gsap";
import {
  BookOpen,
  CalendarDays,
  Clock4,
  User2,
  Award,
  GraduationCap,
  Laptop2,
  PenTool,
  Star,
} from "lucide-react";
import useStudentStore from "../store/useStudentStore";

// ✅ Dashboard Component
export default function Dashboard() {
  const { student, courses, todayClasses } = useStudentStore();

  const creditPercentage = Math.round(
    (student.earnedCredits / student.totalCredits) * 100
  );
  const gpaPercentage = Math.round((student.cgpa / 4) * 100);

  useEffect(() => {
    // 🔹 Smooth fade-in animations on page load
    gsap.fromTo(
      ".header-section",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    gsap.fromTo(
      ".stat-card",
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)",
      }
    );

    gsap.to(".floating", {
      y: 30,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
      stagger: 0.5,
    });
  }, []);

  return (
    <div className="relative space-y-10 px-4 sm:px-6 md:px-8 font-sans text-gray-800">
      {/* 🎓 Floating Background Study Icons */}
      <GraduationCap className="floating absolute top-12 left-8 w-20 h-20 text-purple-200 opacity-40" />
      <Laptop2 className="floating absolute top-36 right-16 w-20 h-20 text-pink-200 opacity-40" />
      <PenTool className="floating absolute bottom-28 left-1/4 w-16 h-16 text-indigo-200 opacity-40" />
      <Star className="floating absolute bottom-32 right-1/4 w-14 h-14 text-yellow-200 opacity-30" />

      {/* 🔹 Header Section */}
      <div className="header-section bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-6 shadow-lg text-white">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Profile Info */}
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-3xl shadow-lg bg-gradient-to-r from-purple-500 to-pink-500">
              <User2 className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Najia Tawab</h1>
              <p className="text-sm opacity-80">{student.rollNo}</p>
              <p className="text-sm opacity-80">
                Faculty of Information Technology & Computer Science
              </p>
              <div className="mt-3 inline-block bg-white/20 text-white font-semibold text-sm px-3 py-1 rounded-lg shadow-sm">
                {student.program}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full md:w-auto">
            <StatCard
              title="CGPA"
              value={student.cgpa}
              icon={<Award />}
              color="bg-purple-600"
            />
            <StatCard
              title="Earned"
              value={student.earnedCredits}
              icon={<BookOpen />}
              color="bg-pink-600"
            />
            <StatCard
              title="Total"
              value={student.totalCredits}
              icon={<Clock4 />}
              color="bg-indigo-600"
            />
            <StatCard
              title="In Progress"
              value={student.inProgress}
              icon={<User2 />}
              color="bg-teal-600"
            />
          </div>
        </div>
      </div>

      {/* 🔹 Progress Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProgressCard
          title="Credit Hours Progress"
          subtitle="How far you’ve come in your journey"
          percentage={creditPercentage}
          completed={student.earnedCredits}
          remaining={student.totalCredits - student.earnedCredits}
        />
        <ProgressCard
          title="Academic Performance"
          subtitle="Current GPA performance"
          percentage={gpaPercentage}
          gpa={student.cgpa}
          grade={student.grade}
        />
      </div>

      {/* 🔹 Today’s Classes */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-xl">
            <CalendarDays className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold">Today’s Classes</h3>
        </div>

        {todayClasses.length > 0 ? (
          <div className="overflow-x-auto scroll-smooth pb-4">
            <div className="flex gap-4 min-w-full sm:min-w-max">
              {todayClasses.map((cls) => (
                <div
                  key={cls.id}
                  className="flex-shrink-0 w-full sm:w-[220px] p-5 rounded-2xl border border-gray-100 bg-gradient-to-br from-purple-50 to-white hover:shadow-lg transition duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-gray-800 text-base">
                      {cls.title}
                    </h4>
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                      {cls.room}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <User2 className="w-4 h-4" />
                      <span>{cls.teacher}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock4 className="w-4 h-4" />
                      <span>{cls.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <CalendarDays className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No classes scheduled for today</p>
          </div>
        )}
      </div>

      {/* 🔹 Current Courses */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-xl">
            <BookOpen className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold">Current Courses</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

// ✅ StatCard
function StatCard({ title, value, icon, color }) {
  return (
    <div className="stat-card bg-white rounded-xl w-full sm:w-[140px] p-4 flex flex-col justify-center shadow-sm border border-gray-100 hover:shadow-lg transition">
      <div className="flex items-center gap-3">
        <div className={`p-2 ${color} text-white rounded-lg shadow`}>
          {React.cloneElement(icon, { className: "w-5 h-5" })}
        </div>
        <div>
          <p className="text-xs text-gray-500">{title}</p>
          <p className="text-lg font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
}

// ✅ ProgressCard with circular visualization
function ProgressCard({ title, subtitle, percentage, completed, remaining, gpa, grade }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      {/* Circle Progress */}
      <div className="flex justify-center mb-4">
        <div className="relative w-32 h-32">
          <svg className="transform -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="54"
              stroke="rgb(229, 231, 235)"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="none"
              strokeDasharray={2 * Math.PI * 54}
              strokeDashoffset={2 * Math.PI * 54 - (percentage / 100) * 2 * Math.PI * 54}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold">{gpa ?? `${percentage}%`}</div>
              <div className="text-xs text-gray-500">{gpa ? "/ 4.0" : "Complete"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="space-y-2 text-sm">
        {completed !== undefined && (
          <>
            <div className="flex justify-between">
              <span className="text-gray-600">Completed</span>
              <span className="font-semibold">{completed} hrs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Remaining</span>
              <span className="font-semibold">{remaining} hrs</span>
            </div>
          </>
        )}
        {gpa && (
          <>
            <div className="flex justify-between">
              <span className="text-gray-600">Current GPA</span>
              <span className="font-semibold">{gpa}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Letter Grade</span>
              <span className="font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-lg text-xs">
                {grade}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ✅ CourseCard
function CourseCard({ course }) {
  return (
    <div className="p-5 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-purple-50 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-semibold text-gray-800 text-base leading-tight">
          {course.title}
        </h4>
        <span className="text-xs font-medium text-purple-600">{course.code}</span>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <User2 className="w-4 h-4" />
          <span>{course.teacher}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Award className="w-4 h-4" />
          <span>{course.credits} Credits</span>
        </div>
      </div>
    </div>
  );
}

