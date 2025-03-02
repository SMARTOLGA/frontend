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
import { useSession } from "next-auth/react";

const Sidebar: FC = () => {
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

    // Safely extract user data from session with fallbacks
    const userName = session?.user?.name || "OLGA User";
    const userEmail = session?.user?.email || "student@andrew.cmu.edu";

    // Default image path as fallback
    const defaultImagePath = "/img/olga-logo.png";

    // Safely check if user image exists
    const userImage = session?.user?.image || defaultImagePath;

    return (
        <div className="w-64 h-screen fixed bg-white border-r border-gray-200 flex flex-col">
            <div className="px-4 py-3.5 flex items-center border-b border-gray-100">
                <Link href="/dashboard" className="flex items-center group">
                    <div className="relative mr-1 transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/img/olga-logo.png"
                            alt="OLGA Logo"
                            width={35}
                            height={35}
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-semibold text-blue-900">
                        OLGA
                    </span>
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
                                    ? "bg-blue-50 text-blue-900 font-medium"
                                    : "text-gray-600 hover:bg-gray-100"
                            )}
                        >
                            {active && (
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-4/5 bg-blue-900 rounded-r-md" />
                            )}
                            <Icon
                                className={cn(
                                    "mr-3 h-5 w-5 transition-colors",
                                    active
                                        ? "text-blue-900"
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
                    <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center">
                        {userImage ? (
                            <Image
                                src={userImage}
                                alt={userName}
                                width={32}
                                height={32}
                                className="object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = defaultImagePath;
                                }}
                            />
                        ) : (
                            // Fallback to initials if no image is available
                            <span className="text-xs font-medium text-gray-600">
                                {userName
                                    .split(" ")
                                    .map((name) => name[0])
                                    .join("")}
                            </span>
                        )}
                    </div>
                    <div className="ml-2">
                        <div className="text-sm font-medium">{userName}</div>
                        <div className="text-xs text-gray-500">{userEmail}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
