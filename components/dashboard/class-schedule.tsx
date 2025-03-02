// components/dashboard/class-schedule.tsx
import { FC } from "react";
import { cn } from "@/lib/utils";

interface ClassCardProps {
  courseCode: string;
  courseName: string;
  time: string;
  status?: "past" | "current" | "upcoming";
  location?: string;
}

const ClassCard: FC<ClassCardProps> = ({
  courseCode,
  courseName,
  time,
  status = "upcoming",
  location,
}) => {
  const getStatusColors = () => {
    switch (status) {
      case "current":
        return "bg-green-100 border-green-200";
      case "past":
        return "bg-purple-50 border-purple-100";
      case "upcoming":
        return "bg-blue-50 border-blue-100";
      default:
        return "bg-gray-50 border-gray-100";
    }
  };

  return (
    <div
      className={cn(
        "p-4 rounded-lg border mb-3 transition-all duration-300 hover:shadow-sm",
        getStatusColors()
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-medium text-gray-500 uppercase">
            {courseCode}
          </p>
          <h4 className="font-medium text-gray-900">{courseName}</h4>
          {location && <p className="text-sm text-gray-600 mt-1">{location}</p>}
        </div>
        <span className="text-sm font-medium">{time}</span>
      </div>
    </div>
  );
};

export const ClassSchedule: FC = () => {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-800 mb-3">Class Schedule</h2>

      <div>
        <p className="mb-2 text-xs font-medium text-gray-500">PAST</p>
        <ClassCard
          courseCode="INF203"
          courseName="Information Security"
          time="10:00 AM"
          status="past"
          location="F203"
        />

        <p className="mb-2 mt-4 text-xs font-medium text-gray-500">CURRENT</p>
        <ClassCard
          courseCode="E301"
          courseName="Foundation of Software Engineering(F&E)"
          time="08:00 AM"
          status="current"
          location="E301"
        />

        <p className="mb-2 mt-4 text-xs font-medium text-gray-500">UPCOMING</p>
        <ClassCard
          courseCode="REQ-F306"
          courseName="Introduction to Machine Learning"
          time="01:00 PM"
          status="upcoming"
          location="REQ - F306"
        />

        <ClassCard
          courseCode="F305"
          courseName="Applied Stochastic Processes"
          time="03:00 PM"
          status="upcoming"
          location="F305"
        />

        <ClassCard
          courseCode="F305"
          courseName="Intro to ML"
          time="03:00 PM"
          status="upcoming"
          location="F305"
        />
      </div>
    </div>
  );
};
