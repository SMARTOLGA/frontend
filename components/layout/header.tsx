// components/layout/header.tsx
"use client";

import { FC } from "react";
import { ChevronDown, LogOut, Settings, User, Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div className="h-16 border-b border-gray-200 flex items-center justify-between px-4 md:px-6 bg-white shadow-sm">
      <h1 className="text-xl font-semibold text-gray-800 truncate">{title}</h1>

      <div className="flex items-center space-x-3">
        {/* Notifications */}
        <div className="relative">
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>

        {/* User Dropdown */}
        <UserDropdown name="Mwesiga Rhumba" role="Student" />
      </div>
    </div>
  );
};

interface UserDropdownProps {
  name: string;
  role: string;
}

const UserDropdown: FC<UserDropdownProps> = ({ name, role }) => {
  // Extract initials for avatar
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 cursor-pointer outline-none group">
        <div className="hidden sm:flex sm:items-center">
          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-600 group-hover:bg-blue-200 transition-colors duration-200">
            {initials}
          </div>
          <div className="ml-2 hidden md:block text-left">
            <div className="text-sm font-medium text-gray-700">{name}</div>
            <div className="text-xs text-gray-500">{role}</div>
          </div>
          <ChevronDown className="h-4 w-4 ml-2 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
        </div>

        {/* Mobile view - only avatar */}
        <div className="sm:hidden">
          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-600">
            {initials}
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50">
          <User className="mr-2 h-4 w-4 text-gray-500" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50">
          <Settings className="mr-2 h-4 w-4 text-gray-500" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-red-600 hover:bg-red-50 focus:bg-red-50">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Header;
