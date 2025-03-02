"use client";

import { FC, ReactNode, useState, useEffect } from "react";
import Sidebar from "@/components/layout/sidebar";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobile && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobile, sidebarOpen]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 z-50 transition-all duration-300 lg:relative",
          sidebarOpen ? "left-0" : "-left-64 lg:left-0",
          "lg:w-64 w-64 lg:block",
          sidebarOpen ? "block" : "hidden"
        )}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <main className="flex-1 flex flex-col transition-all duration-300 w-full">
        {/* Mobile header with menu toggle */}
        <div className="h-16 border-b border-gray-200 flex items-center lg:hidden px-4 bg-white shadow-sm">
          <button
            className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 mr-2"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-800">OLGA</span>
          </div>
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-auto">{children}</div>
      </main>

      {/* Mobile nav overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-fadeIn"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
