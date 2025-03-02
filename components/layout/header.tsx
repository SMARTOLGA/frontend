"use client";

import { FC } from "react";
import Image from "next/image";
import { ChevronDown, LogOut, Settings, User, Bell } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

interface HeaderProps {
    title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
    const { data: session } = useSession();

    // Safely extract user data with fallbacks
    const userName = session?.user?.name || "OLGA User";
    const userEmail = session?.user?.email || "student@cmu.edu";
    const userImage = session?.user?.image;

    return (
        <div className="h-16 border-b border-gray-200 flex items-center justify-between px-4 md:px-14 bg-white shadow-sm">
            <h1 className="text-xl font-semibold text-gray-800 truncate">
                {title}
            </h1>

            <div className="flex items-center space-x-3">
                {/* Notifications */}
                <div className="relative">
                    <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200">
                        <Bell className="h-5 w-5 text-gray-600" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                </div>

                {/* User Dropdown */}
                <UserDropdown
                    name={userName}
                    role={userEmail}
                    imageUrl={userImage}
                />
            </div>
        </div>
    );
};

interface UserDropdownProps {
    name: string;
    role: string;
    imageUrl?: string | null;
}

const UserDropdown: FC<UserDropdownProps> = ({ name, role, imageUrl }) => {
    // Create initials from name as fallback
    const initials = name
        .split(" ")
        .map((part) => part?.[0] || "")
        .join("")
        .toUpperCase();

    // Default avatar path
    const defaultImagePath = "/img/default-avatar.png";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2 cursor-pointer outline-none group">
                <div className="hidden sm:flex sm:items-center">
                    <div className="w-9 h-9 rounded-full bg-blue-100 overflow-hidden flex items-center justify-center text-sm font-medium text-blue-900 group-hover:bg-blue-200 transition-colors duration-200">
                        {imageUrl ? (
                            <div className="w-full h-full relative">
                                <Image
                                    src={imageUrl}
                                    alt={name}
                                    fill
                                    className="object-cover"
                                    onError={(e) => {
                                        // If image fails to load, replace with default or show initials
                                        const target =
                                            e.target as HTMLImageElement;
                                        if (defaultImagePath) {
                                            target.src = defaultImagePath;
                                            target.onerror = null; // Prevent infinite loop if default also fails
                                        } else {
                                            // If even the default fails, remove the image and show initials
                                            target.style.display = "none";
                                            target.parentElement!.parentElement!.textContent =
                                                initials;
                                        }
                                    }}
                                />
                            </div>
                        ) : (
                            initials
                        )}
                    </div>
                    <div className="ml-2 hidden md:block text-left">
                        <div className="text-sm font-medium text-gray-700">
                            {name}
                        </div>
                        <div className="text-xs text-gray-500">{role}</div>
                    </div>
                    <ChevronDown className="h-4 w-4 ml-2 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                </div>

                {/* Mobile view - only avatar */}
                <div className="sm:hidden">
                    <div className="w-10 h-10 rounded-full bg-blue-100 overflow-hidden flex items-center justify-center text-sm font-medium text-blue-900">
                        {imageUrl ? (
                            <div className="w-full h-full relative">
                                <Image
                                    src={imageUrl}
                                    alt={name}
                                    fill
                                    className="object-cover"
                                    onError={(e) => {
                                        const target =
                                            e.target as HTMLImageElement;
                                        target.style.display = "none";
                                        target.parentElement!.parentElement!.textContent =
                                            initials;
                                    }}
                                />
                            </div>
                        ) : (
                            initials
                        )}
                    </div>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50">
                    <User className="mr-2 h-4 w-4 text-gray-500" />
                    <Link href={"/dashboard/profile"}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50">
                    <Settings className="mr-2 h-4 w-4 text-gray-500" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="cursor-pointer text-red-600 hover:bg-red-50 focus:bg-red-50"
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Header;
