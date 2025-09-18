import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";

// Pages
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Results from "./pages/Results";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail"; 
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import DateSheet from "./pages/DateSheet";
import Invoices from "./pages/Invoices"; // 
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";

export default function App() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />

      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Dashboard Layout - protected pages */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="results" element={<Results />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetail />} /> {/* ✅ Course Detail */}
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="datesheet" element={<DateSheet />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>

      {/* Catch all - redirect unknown routes to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
