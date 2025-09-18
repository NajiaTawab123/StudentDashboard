import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  Users,
  FileText,
} from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  const links = [
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, exact: true },
    { to: "/dashboard/attendance", label: "Attendance", icon: <Calendar className="w-5 h-5" /> },
    { to: "/dashboard/results", label: "Results", icon: <FileText className="w-5 h-5" /> },
    { to: "/dashboard/courses", label: "Courses", icon: <BookOpen className="w-5 h-5" /> },
    { to: "/dashboard/users", label: "Users", icon: <Users className="w-5 h-5" /> },
    { to: "/dashboard/datesheet", label: "Date Sheet", icon: <Calendar className="w-5 h-5" /> },
    { to: "/dashboard/invoices", label: "Invoices", icon: <FileText className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-30 transition-opacity md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed md:fixed inset-y-0 left-0 z-40 w-64 h-screen shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 bg-gradient-to-b from-purple-300 via-pink-300 to-purple-200`}
      >
        {/* Logo / Title */}
        <div className="bg-gradient-to-r from-purple-400 via-pink-300 to-purple-500 p-6 text-2xl font-bold text-white shadow-md flex items-center gap-2">
          <LayoutDashboard className="w-7 h-7" />
          <span>My Dashboard</span>
        </div>

        {/* Nav Links */}
        <nav className="px-4 py-6 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact} // ✅ exact matching for Dashboard
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-xl transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 text-white font-semibold shadow-md"
                    : "text-purple-800 hover:bg-purple-200 hover:text-purple-900"
                }`
              }
              onClick={onClose}
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
