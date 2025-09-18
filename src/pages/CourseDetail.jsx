import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookOpen, Clock, User, Award, TrendingUp } from "lucide-react";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Central courses array (same as in Courses.jsx)
  const courses = [
    {
      id: 1,
      title: "Data Structures & Algorithms",
      code: "CS-301",
      credits: 4,
      teacher: "Dr. Michael Chen",
      attendance: 92,
      grade: "A",
      schedule: "Mon, Wed, Fri - 9:00 AM",
      room: "CS-201",
      progress: 75,
      status: "active",
    },
    {
      id: 2,
      title: "Database Management Systems",
      code: "CS-302",
      credits: 3,
      teacher: "Prof. Emily Rodriguez",
      attendance: 88,
      grade: "A-",
      schedule: "Tue, Thu - 11:00 AM",
      room: "CS-105",
      progress: 80,
      status: "active",
    },
    {
      id: 3,
      title: "Software Engineering",
      code: "CS-303",
      credits: 4,
      teacher: "Dr. James Wilson",
      attendance: 95,
      grade: "A+",
      schedule: "Mon, Wed, Fri - 2:00 PM",
      room: "CS-301",
      progress: 85,
      status: "withdrawn",
    },
    {
      id: 4,
      title: "Computer Networks",
      code: "CS-304",
      credits: 3,
      teacher: "Prof. Lisa Anderson",
      attendance: 78,
      grade: "B+",
      schedule: "Tue, Thu - 3:00 PM",
      room: "CS-205",
      progress: 60,
      status: "active",
    },
  ];

  // Find the course by ID
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <button
          onClick={() => navigate("/dashboard/courses")}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:opacity-90 transition"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <button
        onClick={() => navigate("/dashboard/courses")}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:opacity-90 transition"
      >
        Back to Courses
      </button>

      <h1 className="text-3xl font-bold text-purple-700">{course.title}</h1>
      <p className="text-gray-600 font-medium mb-4">Course Code: {course.code}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-gray-700">Teacher:</span>
            <span className="text-gray-800">{course.teacher}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-gray-700">Schedule:</span>
            <span className="text-gray-800">{course.schedule}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-gray-700">Credits:</span>
            <span className="text-gray-800">{course.credits}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-medium text-gray-700">Room:</span>
            <span className="text-gray-800">{course.room}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-gray-700">Attendance:</span>
            <span
              className={`font-semibold ${
                course.attendance >= 85
                  ? "text-purple-600"
                  : course.attendance >= 75
                  ? "text-amber-600"
                  : "text-red-600"
              }`}
            >
              {course.attendance}%
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-medium text-gray-700">Grade:</span>
            <span className="text-gray-800">{course.grade}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-medium text-gray-700">Progress:</span>
            <span className="text-gray-800">{course.progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
