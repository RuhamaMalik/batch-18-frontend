import React, { useState } from "react";
import { TextInput } from "flowbite-react";
// import { HiChartPie, HiUser, HiCog, HiLogout, HiSearch, HiMenu, HiX } from "react-icons/hi";
import { HiSearch, HiMenu } from "react-icons/hi";
import Sidebar from "../components/dashboard/Sidebar";


function Dashboard() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      
    <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

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