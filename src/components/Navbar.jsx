import { useState } from "react";
import { 
  Menu, 
  Bell, 
  Search, 
  Settings, 
  User,
  ChevronDown,
  LogOut
} from "lucide-react";

export default function Navbar({ onMenuClick }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, title: "Assignment Due", message: "Data Structures assignment due tomorrow", time: "2 hours ago" },
    { id: 2, title: "Grade Posted", message: "Your Database exam grade is available", time: "1 day ago" },
    { id: 3, title: "Class Cancelled", message: "Software Engineering class cancelled today", time: "2 days ago" },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 px-4 md:px-6 py-4 shadow-sm border-b border-purple-200 sticky top-0 z-50">
      <div className="flex items-center justify-between text-gray-900">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-purple-200 transition-colors"
          >
            <Menu className="w-6 h-6 text-purple-800" />
          </button>
          
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold text-purple-900">Dashboard</h1>
            <p className="text-sm text-purple-700">Welcome back, Najia!</p>
          </div>
        </div>

        {/* Center - Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="w-5 h-5 text-purple-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses, assignments..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-purple-100 border border-purple-200 placeholder-purple-500 text-purple-800 focus:bg-white focus:ring-2 focus:ring-purple-300 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Mobile search */}
          <button className="md:hidden p-2 hover:bg-purple-200 rounded-xl transition-colors">
            <Search className="w-5 h-5 text-purple-800" />
          </button>

          {/* Notifications */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-purple-200 rounded-xl transition-colors relative"
            >
              <Bell className="w-5 h-5 text-purple-800" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {showNotifications && (
              <div
                className="absolute right-0 mt-2 w-80 max-h-[70vh] bg-white rounded-xl shadow-lg border border-purple-200 z-50 flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 border-b border-purple-100">
                  <h3 className="font-semibold text-purple-800">Notifications</h3>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 border-b border-purple-50 hover:bg-purple-50 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-purple-900">{notification.title}</h4>
                      <p className="text-xs text-purple-700 mt-1">{notification.message}</p>
                      <p className="text-xs text-purple-500 mt-2">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-purple-100">
                  <button className="w-full text-center text-purple-800 text-sm font-medium hover:text-purple-900 transition-colors">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <button className="p-2 hover:bg-purple-200 rounded-xl transition-colors">
            <Settings className="w-5 h-5 text-purple-800" />
          </button>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-2 hover:bg-purple-200 rounded-xl transition-colors"
            >
              {/* Shiny lilac/pink/purple N icon */}
              <div className="w-8 h-8 bg-gradient-to-tr from-pink-300 via-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <ChevronDown className="w-4 h-4 text-purple-800" />
            </button>

            {showProfileMenu && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-purple-200 z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-3 border-b border-purple-100">
                  <p className="font-medium text-purple-900">Najia Tawab</p>
                  <p className="text-sm text-purple-700">CS-2021-101</p>
                </div>
                <div className="py-2">
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-purple-900 hover:bg-purple-50 transition-colors">
                    <User className="w-4 h-4 text-purple-800" />
                    Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-purple-900 hover:bg-purple-50 transition-colors">
                    <Settings className="w-4 h-4 text-purple-800" />
                    Settings
                  </button>
                  <hr className="my-2 border-purple-100" />
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut className="w-4 h-4" />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Close dropdowns when clicking outside */}
      {(showProfileMenu || showNotifications) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowProfileMenu(false);
            setShowNotifications(false);
          }}
        />
      )}
    </header>
  );
}
