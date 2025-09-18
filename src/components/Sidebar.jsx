// import { useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Calendar,
//   BookOpen,
//   Users,
//   FileText,
//   GraduationCap,
// } from "lucide-react";
// import gsap from "gsap";

// export default function Sidebar({ isOpen, onClose }) {
//   const sidebarRef = useRef(null);

//   // Animate sidebar slide-in
//   useEffect(() => {
//     if (isOpen) {
//       gsap.fromTo(
//         sidebarRef.current,
//         { x: -250, opacity: 0 },
//         { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
//       );
//     }
//   }, [isOpen]);

//   const links = [
//     { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, end: true },
//     { to: "/dashboard/attendance", label: "Attendance", icon: <Calendar className="w-5 h-5" /> },
//     { to: "/dashboard/results", label: "Results", icon: <FileText className="w-5 h-5" /> },
//     { to: "/dashboard/courses", label: "Courses", icon: <BookOpen className="w-5 h-5" /> },
//     { to: "/dashboard/users", label: "Users", icon: <Users className="w-5 h-5" /> },
//     { to: "/dashboard/datesheet", label: "Date Sheet", icon: <Calendar className="w-5 h-5" /> },
//     { to: "/dashboard/invoices", label: "Invoices", icon: <FileText className="w-5 h-5" /> }, // ✅ Added Invoices
//   ];

//   return (
//     <>
//       {/* Backdrop for mobile */}
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-30 z-30 transition-opacity md:hidden ${
//           isOpen ? "block" : "hidden"
//         }`}
//         onClick={onClose}
//       />

//       {/* Sidebar */}
//       <aside
//         ref={sidebarRef}
//         className={`fixed md:fixed inset-y-0 left-0 z-40 w-64 h-screen 
//           bg-gradient-to-b from-purple-600 via-purple-500 to-purple-400
//           text-white shadow-xl transform 
//           ${isOpen ? "translate-x-0" : "-translate-x-full"} 
//           transition-transform duration-300 ease-in-out md:translate-x-0`}
//       >
//         {/* Logo / Title */}
//         <div className="flex items-center gap-3 p-6 text-2xl font-bold shadow-md bg-purple-700/80">
//           <GraduationCap className="w-7 h-7 text-lilac-100" />
//           <span>Najia Tawab</span>
//         </div>

//         {/* Nav Links */}
//         <nav className="px-4 py-6 space-y-2">
//           {links.map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               end={link.end} // Only for Dashboard so it's not active on nested routes
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-4 py-2 rounded-xl transition-all ${
//                   isActive
//                     ? "bg-white text-purple-700 font-semibold shadow-md"
//                     : "text-white/90 hover:bg-purple-300/20 hover:text-white"
//                 }`
//               }
//               onClick={onClose}
//             >
//               {link.icon}
//               {link.label}
//             </NavLink>
//           ))}
//         </nav>
//       </aside>
//     </>
//   );
// }













import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  Users,
  FileText,
  GraduationCap,
} from "lucide-react";
import gsap from "gsap";

export default function Sidebar({ isOpen, onClose }) {
  const sidebarRef = useRef(null);

  // Animate sidebar slide-in
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        sidebarRef.current,
        { x: -250, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const links = [
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, end: true },
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
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-50 w-64 h-screen
          bg-gradient-to-b from-purple-600 via-purple-500 to-purple-400
          text-white shadow-xl transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        {/* Logo / Title */}
        <div className="flex items-center gap-3 p-6 text-2xl font-bold shadow-md bg-purple-700/80">
          <GraduationCap className="w-7 h-7 text-purple-200" />
          <span>Najia Tawab</span>
        </div>

        {/* Nav Links */}
        <nav className="px-4 py-6 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-xl transition-all ${
                  isActive
                    ? "bg-white text-purple-700 font-semibold shadow-md"
                    : "text-white/90 hover:bg-purple-300/20 hover:text-white"
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
