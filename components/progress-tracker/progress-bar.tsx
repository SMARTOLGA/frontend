import React from "react";

interface ProgressBarProps {
  percentage: number;
  totalCourses: number;
  completedCourses: number;
  currentSemester: string;
}

export const ProgressBar = ({
  percentage,
  totalCourses,
  completedCourses,
  currentSemester,
}: ProgressBarProps) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-500">Your progress</p>
          <h2 className="text-xl font-normal text-gray-900">
            {percentage}% to complete
          </h2>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Courses</p>
          <p className="text-lg text-gray-900">
            {completedCourses}/{totalCourses}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-4 bg-gray-100 rounded-full">
        {/* Progress Fill */}
        <div
          className="absolute left-0 top-0 h-full bg-[#0E2C75] rounded-full"
          style={{ width: `${percentage}%` }}
        />

        {/* Semester Marker */}
        <div
          className="absolute top-0 h-full w-0.5 bg-[#0E2C75]"
          style={{ left: "25%" }}
        >
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <span className="text-xs text-gray-500">{currentSemester}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
