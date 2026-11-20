import React, { useState } from "react";
import { TextInput } from "flowbite-react";
import { HiChartPie, HiUser, HiCog, HiLogout, HiSearch, HiMenu, HiX } from "react-icons/hi";


function Dashboard() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      
      {/* 1. SIDEBAR*/}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 border-r border-gray-700 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div>
          {/* Logo / Brand & Mobile Close Button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-lg text-white font-bold text-xl">M</div>
              <span className="text-lg font-semibold tracking-wide text-white">MernDashboard</span>
            </div>
            {/* Close Button for Mobile */}
            <button 
              onClick={() => setIsMobileOpen(false)} 
              className="md:hidden text-gray-400 hover:text-white"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Links with Hover Effect */}
          <div className="px-4 py-4 space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-md font-medium rounded-lg text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors">
              <HiChartPie className="w-5 h-5" /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-md font-medium rounded-lg text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors">
              <HiUser className="w-5 h-5" /> Profile
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-md font-medium rounded-lg text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors">
              <HiCog className="w-5 h-5" /> Settings
            </a>
          </div>

        </div>

        {/* Logout at bottom */}
        <div className="p-4 border-t border-gray-700">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-md font-medium rounded-lg text-red-400 hover:bg-red-600 hover:text-white transition-colors">
            <HiLogout className="w-5 h-5" /> Logout
          </a>
        </div>
      </aside>

      {/* Backdrop overlay for mobile screen when sidebar is open */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)} 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        ></div>
      )}

      {/* 2. MAIN AREA (Navbar + Content) */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        
        {/* TOP NAVBAR (With Hamburger Toggle & Search Bar) */}
        <header className="h-16 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center gap-4">
            {/* Hamburger Menu Button for Small Screens */}
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)} 
              className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            >
              <HiMenu className="w-6 h-6" />
            </button>

            <div className="w-48 sm:w-72">
              <TextInput
                id="search"
                type="text"
                icon={HiSearch}
                placeholder="Search anything..."
                required
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
          </div>

          {/* Right side Profile / Avatar */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white shadow-inner">
                    U
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-white">User profile</p>
                <p className="text-xs text-gray-400">Developer</p>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN DASHBOARD CONTENT */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl p-8 mb-6 shadow-lg text-white">
              <h1 className="text-3xl font-bold mb-2">Good Morning class 👋</h1>
              <p className="text-indigo-200">Here is what's happening with your project today.</p>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}



export default Dashboard;