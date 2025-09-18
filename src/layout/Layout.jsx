import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        className="fixed inset-y-0 left-0 z-40 w-64 transform md:translate-x-0 transition-transform duration-300 ease-in-out bg-white shadow-lg"
      />

      {/* Overlay for small screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-64 w-full">
        {/* Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Child pages */}
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-6">
          {/* Remove max-w-7xl for mobile */}
          <div className="w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

