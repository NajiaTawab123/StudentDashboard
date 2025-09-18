import { create } from "zustand";

const useStudentStore = create(() => ({
  student: {
    name: "Najia Tawab", // ✅ Personalized student name
    id: "CS-23-045",
    program: "BS Computer Science",
    cgpa: 3.82, // updated for a stronger academic profile
    gpa: 3.90,
    grade: "A",
    earnedCredits: 92,
    totalCredits: 133,
    inProgress: 12,
  },

  // 📚 Today’s schedule (Dynamic, shown in Dashboard)
  todayClasses: [
    {
      id: 1,
      title: "Artificial Intelligence",
      teacher: "Dr. Khalid Mehmood",
      time: "09:00 AM - 10:30 AM",
      room: "AI Research Lab",
      // 💡 UI Idea: Add <Brain /> or <Cpu /> icon next to this subject
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      teacher: "Ms. Hina Farooq",
      time: "11:00 AM - 12:30 PM",
      room: "Lecture Hall 2",
      // 💡 UI Idea: Add <BarChart3 /> icon to represent analytics
    },
  ],

  // 📖 Active Courses List
  courses: [
    {
      id: 1,
      title: "Artificial Intelligence",
      credits: 3,
      attendance: 92,
      teacher: "Dr. Khalid Mehmood",
    },
    {
      id: 2,
      title: "Data Science & Analytics (Lab)",
      credits: 1,
      attendance: 95,
      teacher: "Ms. Hina Farooq",
    },
    {
      id: 3,
      title: "Database Systems",
      credits: 3,
      attendance: 88,
      teacher: "Sir Adeel Khan",
    },
    {
      id: 4,
      title: "Software Project Management",
      credits: 3,
      attendance: 84,
      teacher: "Prof. Zara Ahmed",
    },
  ],
}));

export default useStudentStore;
