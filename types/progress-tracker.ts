export interface Course {
  id: string;
  code: string;
  title: string;
  units: number;
  semester: string;
  type: "Core" | "Elective";
  completed: boolean;
  hasReview: boolean;
}

export interface AcademicProgress {
  totalCourses: number;
  completedCourses: number;
  currentCGPA: number;
  completedSemesters: number;
}

export interface ProgressOverviewProps {
  percentage: number;
  totalCourses: number;
  completedCourses: number;
}

export interface CourseListProps {
  courses: Course[];
  onUpdateCourse: (courseId: string) => Promise<void>;
}

export interface AcademicHighlightsProps {
  cgpa: number;
  completedSemesters: number;
}

export interface SemesterFilterProps {
  selected: string;
  onChange: (value: string) => void;
}
