import { HiChartPie, HiUser, HiCog, HiLogout, HiX } from "react-icons/hi";
import { getUser } from "../../utils/auth";


const Sidebar = ({isMobileOpen, setIsMobileOpen}) => {

    const user =  {role:"user"};

console.log(user);

const adminTabs = [
    {
       name:'Dashboard',
       icon: <HiChartPie className="w-5 h-5" />,
       path:'/dashboard'
    },
     {
       name:'Users',
       icon: <HiChartPie className="w-5 h-5" />,
       path:'/dashboard/users'
    },
]
const userTabs = [
 {
       name:'Profile',
       icon: <HiUser className="w-5 h-5" />,
       path:'/dashboard/profile'
    },
 {
       name:'Settings',
       icon: <HiUser className="w-5 h-5" />,
       path:'/dashboard/settings'
    },
]

const  tabs = user?.role === "admin" ? adminTabs : userTabs;



  return (
    <>
      {/* 1. SIDEBAR*/}
      <aside
        className={`
           fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 border-r border-gray-700 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static
           ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
         `}
      >
        <div>
          {/* Logo / Brand & Mobile Close Button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-lg text-white font-bold text-xl">
                M
              </div>
              <span className="text-lg font-semibold tracking-wide text-white">
                MernDashboard
              </span>
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
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-md font-medium rounded-lg text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
            >
              <HiChartPie className="w-5 h-5" /> Dashboard
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-md font-medium rounded-lg text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
            >
              <HiUser className="w-5 h-5" /> Profile
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-md font-medium rounded-lg text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
            >
              <HiCog className="w-5 h-5" /> Settings
            </a>
          </div>
        </div>

        {/* Logout at bottom */}
        <div className="p-4 border-t border-gray-700">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-md font-medium rounded-lg text-red-400 hover:bg-red-600 hover:text-white transition-colors"
          >
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
    </>
  );
};

export default Sidebar;
