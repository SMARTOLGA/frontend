"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface CourseCardProps {
  code: string;
  title: string;
  units: number;
  semester: string;
  type: "Core" | "Elective";
  completed: boolean;
  onToggleComplete: () => void;
  onAddReview: () => void;
}

const CourseCard = ({
  code,
  title,
  units,
  semester,
  type,
  completed,
  onToggleComplete,
  onAddReview,
}: CourseCardProps) => {
  return (
    <motion.div
      className="border rounded-lg overflow-hidden bg-white transition-all duration-200 shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="m-0 px-6 py-4">
        {/* Type Badge */}
        <div className="mb-4">
          <span
            className={`
              inline-flex px-2 py-0.5 text-xs rounded-sm font-medium
              ${
                type === "Core"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-yellow-50 text-yellow-600"
              }
            `}
          >
            {type}
          </span>
        </div>

        {/* Course Info and Checkbox */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">{code}</p>
            <h3 className="text-base text-gray-900 mt-0.5">{title}</h3>
          </div>

          {/* Checkbox */}
          <button
            onClick={onToggleComplete}
            className={`
              w-5 h-5 rounded border transition-all duration-200 ease-in-out
              flex items-center justify-center flex-shrink-0 self-end
              ${
                completed
                  ? "bg-white border-0"
                  : "border-gray-300 hover:border-gray-400"
              }
            `}
          >
            {completed && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Check className="h-4 w-4 text-green-600" />
              </motion.div>
            )}
          </button>
        </div>

        {/* Course Details */}
        <div className="flex justify-start items-center mt-4 text-sm text-gray-500 gap-8">
          <span className="rounded bg-gray-100 p-2 font-semibold">
            {units} units
          </span>
          <span className="rounded bg-gray-100 p-2 font-semibold">
            {semester}
          </span>
        </div>

        {/* Add Review Button */}
        <div className="flex mt-4 justify-end">
          <button
            onClick={onAddReview}
            className="w-40 px-3 py-1.5 text-sm text-[#0E2C75] border border-[#0E2C75] 
                     rounded-lg transition-all duration-200 ease-in-out
                     hover:bg-gray-50 focus:outline-none focus:ring-2 focus:border-none
                     focus:ring-blue-500 focus:ring-offset-1"
          >
            Add review
          </button>
        </div>
      </div>
    </motion.div>
  );
};

interface CourseListProps {
  courses: Array<Omit<CourseCardProps, "onToggleComplete" | "onAddReview">>;
  onToggleCourse: (courseId: string) => void;
  onAddReview: (courseId: string) => void;
}

export const CourseList = ({
  courses,
  onToggleCourse,
  onAddReview,
}: CourseListProps) => {
  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <CourseCard
          key={course.code}
          {...course}
          onToggleComplete={() => onToggleCourse(course.code)}
          onAddReview={() => onAddReview(course.code)}
        />
      ))}
    </div>
  );
};
