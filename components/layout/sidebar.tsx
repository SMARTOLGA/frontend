"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Import icons
import {
  LayoutDashboard,
  BookOpen,
  CalendarRange,
  LineChart,
  User,
} from "lucide-react";

const Sidebar: FC = () => {
  const pathname = usePathname();

  const navigationItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      label: "Course Catalog",
      href: "/dashboard/course-catalog",
      icon: BookOpen,
    },
    {
      label: "Plan Builder",
      href: "/dashboard/plan-builder",
      icon: CalendarRange,
    },
    {
      label: "Progress Tracker",
      href: "/dashboard/progress-tracker",
      icon: LineChart,
    },
    {
      label: "Profile",
      href: "/dashboard/profile",
      icon: User,
    },
  ];

  const isActive = (item: { href: string; exact?: boolean }) => {
    if (item.exact) {
      return pathname === item.href;
    }
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 flex items-center border-b border-gray-100">
        <Link href="/dashboard" className="flex items-center group">
          <div className="relative w-10 h-10 mr-2 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/Logo.png"
              alt="OLGA Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-semibold text-gray-800">OLGA</span>
        </Link>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto">
        {navigationItems.map((item) => {
          const active = isActive(item);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-2.5 text-sm rounded-md transition-all duration-200 relative group",
                active
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              {active && (
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-4/5 bg-blue-600 rounded-r-md" />
              )}
              <Icon
                className={cn(
                  "mr-3 h-5 w-5 transition-colors",
                  active
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-gray-600"
                )}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="text-xs text-gray-400 mb-2">Logged in as</div>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
            MR
          </div>
          <div className="ml-2">
            <div className="text-sm font-medium">Mwesiga Rhumba</div>
            <div className="text-xs text-gray-500">Student</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
