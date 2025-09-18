import { useState, useEffect, useRef } from "react";
import { 
  Menu, 
  Bell, 
  Search, 
  Settings, 
  User,
  ChevronDown,
  LogOut,
  Heart
} from "lucide-react";
import gsap from "gsap";

export default function Navbar({ onMenuClick }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // GSAP animation refs
  const navbarRef = useRef(null);
  const profileRef = useRef(null);
  const notifRef = useRef(null);

  // Animate navbar on load
  useEffect(() => {
    gsap.from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  // Animate dropdowns
  useEffect(() => {
    if (showProfileMenu) {
      gsap.fromTo(
        profileRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4 }
      );
    }
    if (showNotifications) {
      gsap.fromTo(
        notifRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4 }
      );
    }
  }, [showProfileMenu, showNotifications]);

  // Dummy notifications
  const notifications = [
    { id: 1, title: "Assignment Due", message: "Your Web Development assignment is due tomorrow", time: "2 hours ago" },
    { id: 2, title: "Grade Posted", message: "Your AI course grade has been posted", time: "1 day ago" },
    { id: 3, title: "Meeting Update", message: "Internship meeting has been rescheduled", time: "2 days ago" },
  ];

  return (
    <header 
      ref={navbarRef}
      className="bg-white px-4 md:px-6 py-4 shadow-md border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="flex items-center justify-between text-gray-800">
        {/* Left side - Logo and Title */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <Menu className="w-6 h-6 text-purple-600" />
          </button>
          
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-sm text-gray-500">Welcome back, Najia!</p>
          </div>
        </div>

        {/* Center - Search bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses, assignments..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 border border-gray-200 placeholder-gray-400 text-gray-700 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Mobile Search */}
          <button className="md:hidden p-2 hover:bg-purple-100 rounded-xl transition-colors">
            <Search className="w-5 h-5 text-purple-600" />
          </button>

          {/* Notifications */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-purple-100 rounded-xl transition-colors relative"
            >
              <Bell className="w-5 h-5 text-purple-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {showNotifications && (
              <div
                ref={notifRef}
                className="absolute right-0 mt-2 w-80 max-h-[70vh] bg-white rounded-xl shadow-lg border border-gray-200 z-50 flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-purple-600" />
                  <h3 className="font-semibold text-purple-600">Notifications</h3>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 border-b border-gray-50 hover:bg-purple-50 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-purple-700">{notification.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-gray-100">
                  <button className="w-full text-center text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <button className="p-2 hover:bg-purple-100 rounded-xl transition-colors">
            <Settings className="w-5 h-5 text-purple-600" />
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-2 hover:bg-purple-100 rounded-xl transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <ChevronDown className="w-4 h-4 text-purple-600" />
            </button>

            {showProfileMenu && (
              <div 
                ref={profileRef}
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-3 border-b border-gray-100">
                  <p className="font-medium text-purple-700">Najia Tawab</p>
                  <p className="text-sm text-gray-500">CS-2021-101</p>
                </div>
                <div className="py-2">
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors">
                    <User className="w-4 h-4 text-purple-600" />
                    Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors">
                    <Settings className="w-4 h-4 text-purple-600" />
                    Settings
                  </button>
                  <hr className="my-2 border-gray-100" />
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

      {/* Overlay for closing dropdowns */}
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
