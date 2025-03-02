"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import { ProgressBar } from "@/components/progress-tracker/progress-bar";
import { CourseList } from "@/components/progress-tracker/course-list";
import { AcademicHighlights } from "@/components/progress-tracker/academic-highlights";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Initial courses data
const initialCourses = [
  {
    code: "04800J",
    title: "Cloud Infrastructure and Computing",
    units: 12,
    semester: "1st semester",
    type: "Elective" as const,
    completed: false,
  },
  {
    code: "04800",
    title: "User Experience and User Interface Engineering",
    units: 12,
    semester: "1st semester",
    type: "Core" as const,
    completed: true,
  },
  {
    code: "18731",
    title: "Network Security",
    units: 12,
    semester: "1st semester",
    type: "Elective" as const,
    completed: true,
  },
  {
    code: "18652",
    title: "Foundation of Software Engineering",
    units: 12,
    semester: "1st semester",
    type: "Core" as const,
    completed: true,
  },
  {
    code: "04630",
    title: "Data structure and Algorithms for Engineers",
    units: 12,
    semester: "1st semester",
    type: "Core" as const,
    completed: true,
  },
];

export default function ProgressTracker() {
  // State
  const [selectedSemester, setSelectedSemester] = useState("1st semester");
  const [courses, setCourses] = useState(initialCourses);

  // Calculate progress
  const totalCourses = 20; // Total courses in program
  const completedCourses = courses.filter((c) => c.completed).length;
  const completionPercentage = Math.round(
    (completedCourses / totalCourses) * 100
  );

  // Handlers
  const handleToggleCourse = (courseCode: string) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.code === courseCode
          ? { ...course, completed: !course.completed }
          : course
      )
    );
  };

  const handleAddReview = (courseCode: string) => {
    // Implement review functionality
    console.log(`Adding review for course: ${courseCode}`);
  };

  // Filter courses by semester
  const filteredCourses = courses.filter(
    (course) => course.semester === selectedSemester
  );

  return (
    <>
      <Header title="Progress Tracker" />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Progress Overview */}
          <div className="bg-white rounded-lg border p-6">
            <ProgressBar
              percentage={completionPercentage}
              completedCourses={completedCourses}
              totalCourses={totalCourses}
              currentSemester="1st semester"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Course List Section */}
            <div className="lg:col-span-2 space-y-4">
              {/* Semester Filter */}
              <div>
                <p className="text-sm text-gray-500 mb-2">
                  Filter by Semesters
                </p>
                <Select
                  value={selectedSemester}
                  onValueChange={setSelectedSemester}
                >
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st semester">1st Semester</SelectItem>
                    <SelectItem value="2nd semester">2nd Semester</SelectItem>
                    <SelectItem value="3rd semester">3rd Semester</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Course List */}
              <CourseList
                courses={filteredCourses}
                onToggleCourse={handleToggleCourse}
                onAddReview={handleAddReview}
              />
            </div>

            {/* Academic Highlights */}
            <div>
              <AcademicHighlights cgpa={3.92} semestersCompleted={2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
