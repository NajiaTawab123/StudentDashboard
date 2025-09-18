import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";

// 📄 Pages
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Results from "./pages/Results";
import Courses from "./pages/Courses";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import DateSheet from "./pages/DateSheet";
import Invoices from "./pages/Invoices"; // 🧾 New Invoices page

// 🟢 Authentication & welcome
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";

export default function App() {
  return (
    <Routes>
      {/* 🔑 Login page */}
      <Route path="/login" element={<Login />} />

      {/* 🎉 Animated Welcome page */}
      <Route path="/welcome" element={<Welcome />} />

      {/* Redirect root "/" to login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* 🌐 Main dashboard layout */}
      <Route path="/dashboard" element={<Layout />}>
        {/* 🏠 Default page = Dashboard */}
        <Route index element={<Dashboard />} />

        {/* 📊 Student-related pages */}
        <Route path="attendance" element={<Attendance />} />
        <Route path="results" element={<Results />} />
        <Route path="courses" element={<Courses />} />

        {/* 👥 User management */}
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />

        {/* 🗓️ DateSheet page */}
        <Route path="datesheet" element={<DateSheet />} />

        {/* 🧾 Invoices page */}
        <Route path="invoices" element={<Invoices />} />
      </Route>

      {/* Catch-all route for 404 */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
