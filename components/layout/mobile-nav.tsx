"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

// Import icons
import {
  LayoutDashboard,
  BookOpen,
  CalendarRange,
  LineChart,
  User,
} from "lucide-react";

import { useSession } from "next-auth/react";


interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { data: session } = useSession();


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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div className="fixed top-0 bottom-0 left-0 w-3/4 max-w-sm bg-white p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image
              src="/images/Logo.png"
              alt="OLGA Logo"
              fill
              className="object-contain"
            />
            <span className="ml-2 text-xl font-semibold text-gray-800">
              OLGA
            </span>
          </div>
          <button onClick={onClose}>
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-3 text-base rounded-md transition-colors",
                isActive(item)
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              )}
              onClick={onClose}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5",
                  isActive(item) ? "text-primary" : "text-gray-400"
                )}
              />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-8 pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-400 mb-2">Logged in as</div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
              MR
            </div>
            <div className="ml-2">
              <div className="text-sm font-medium">{session?.user.name}</div>
              <div className="text-xs text-gray-500">{session?.user.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
