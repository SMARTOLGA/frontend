// app/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import EmptyState from "@/components/dashboard/empty-state";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { ClassSchedule } from "@/components/dashboard/class-schedule";
import { TaskList } from "@/components/dashboard/task-list";

export default function DashboardPage() {
  // In a real app, this would come from user context/API
  const [isProfileComplete, setIsProfileComplete] = useState(true); // Setting to true to show completed profile view
  const [loading, setLoading] = useState(true);

  // Simulate API call to get profile status
  useEffect(() => {
    const fetchProfileStatus = async () => {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      // This would be an API call in a real app
      setIsProfileComplete(true); // Set to true for completed profile view
      setLoading(false);
    };

    fetchProfileStatus();
  }, []);

  // For demonstration purposes - toggle between views
  const toggleProfileStatus = () => {
    setIsProfileComplete(!isProfileComplete);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-green-100 rounded-md flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-sm animate-pulse" />
          </div>
          <p className="text-gray-500">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header title="Dashboard" />

      <div className="p-4 md:p-6 lg:p-8 flex-1">
        <div className="max-w-7xl mx-auto">
          {/* Toggle button for demo purposes */}
          <button
            onClick={toggleProfileStatus}
            className="fixed bottom-4 right-4 bg-blue-600 text-white text-xs rounded-full p-2 z-50 shadow-lg"
          >
            Toggle Demo View
          </button>

          {isProfileComplete ? (
            <div className="space-y-6">
              {/* Stats and Upcoming Deadlines Section */}
              <DashboardStats />

              {/* Class Schedule and Tasks Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <ClassSchedule />
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <TaskList />
                </div>
              </div>
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </>
  );
}
