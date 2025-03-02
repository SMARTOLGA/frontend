// components/dashboard/dashboard-stats.tsx
import { FC, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  background: string;
  borderColor: string;
  textColor: string;
}

export const StatCard: FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  background,
  borderColor,
  textColor,
}) => {
  return (
    <div
      className={`p-4 rounded-lg border shadow-sm flex flex-col items-center justify-evenly`}
      style={{
        backgroundColor: background,
        borderColor: borderColor,
        color: textColor,
      }}
    >
      <h3 className="text-sm md:text-base lg:text-lg font-medium mb-2">
        {title}
      </h3>
      <p className="text-3xl md:text-5xl lg:text-6xl font-bold">{value}</p>
      {subtitle && (
        <p className="text-xs md:text-sm lg:text-base mt-1">{subtitle}</p>
      )}
    </div>
  );
};

interface DeadlineItemProps {
  courseName: string;
  dueDate: string;
  dueTime: string;
  completed?: boolean;
  onToggle?: () => void;
}

const DeadlineItem: FC<DeadlineItemProps> = ({
  courseName,
  dueDate,
  dueTime,
  completed = false,
  onToggle,
}) => {
  return (
    <div className="flex items-start mb-4 last:mb-0">
      <div className="flex-shrink-0 mr-3">
        <div
          className={cn(
            "w-5 h-5 rounded-sm border border-white flex items-center justify-center cursor-pointer",
            completed ? "bg-white/20" : "bg-transparent"
          )}
          onClick={onToggle}
        >
          {completed && (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-3 h-3 text-white"
              stroke="currentColor"
            >
              <path
                d="M5 12l5 5L20 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="flex-1">
        <p
          className={cn(
            "text-sm text-white font-medium",
            completed && "line-through opacity-70"
          )}
        >
          {courseName}
        </p>
        <p className="text-xs text-blue-100 mt-0.5">
          {dueDate}, {dueTime}
        </p>
      </div>
    </div>
  );
};

export const DashboardStats: FC = () => {
  const [deadlines, setDeadlines] = useState([
    {
      id: 1,
      course: "Foundations of Software Engineering",
      date: "Today",
      time: "11:59 PM",
      completed: false,
    },
    {
      id: 2,
      course: "Intro to ML",
      date: "Today",
      time: "11:59 PM",
      completed: false,
    },
    {
      id: 3,
      course: "Applied Stochastic Processes",
      date: "Tomorrow",
      time: "11:59 PM",
      completed: false,
    },
  ]);

  const toggleDeadline = (id: number) => {
    setDeadlines(
      deadlines.map((deadline) =>
        deadline.id === id
          ? { ...deadline, completed: !deadline.completed }
          : deadline
      )
    );
  };

  // Color scheme based on the design
  const colors = {
    completedCredits: {
      background: "#FCF4BE", // Light yellow
      border: "#F7E589", // Slightly darker yellow
      text: "#8B6D17", // Dark yellow/amber text
    },
    currentGPA: {
      background: "#FFDBE1", // Light pink
      border: "#FFADBF", // Slightly darker pink
      text: "#AE1439", // Dark pink/red text
    },
    assignmentDue: {
      background: "#E4ECF4", // Light blue/gray
      border: "#C8D6E5", // Slightly darker blue/gray
      text: "#465B73", // Dark blue/gray text
    },
    upcomingDeadlines: {
      background: "#102052", // Dark navy blue
      border: "#0C1A43", // Slightly darker navy
      text: "#FFFFFF", // White text
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fadeIn">
      <StatCard
        title="Completed Credits"
        value="96"
        subtitle="144 totals units"
        background={colors.completedCredits.background}
        borderColor={colors.completedCredits.border}
        textColor={colors.completedCredits.text}
      />

      <StatCard
        title="Current GPA"
        value="3.88"
        subtitle="96 Units"
        background={colors.currentGPA.background}
        borderColor={colors.currentGPA.border}
        textColor={colors.currentGPA.text}
      />

      <StatCard
        title="Assignment Due Today"
        value="2"
        subtitle="1 Completed"
        background={colors.assignmentDue.background}
        borderColor={colors.assignmentDue.border}
        textColor={colors.assignmentDue.text}
      />

      <div
        className="rounded-lg border p-4 text-white"
        style={{
          backgroundColor: colors.upcomingDeadlines.background,
          borderColor: colors.upcomingDeadlines.border,
        }}
      >
        <h3 className="text-sm font-medium mb-4">Upcoming Deadlines</h3>

        <div className="space-y-3 pt-1">
          {deadlines.map((deadline) => (
            <DeadlineItem
              key={deadline.id}
              courseName={deadline.course}
              dueDate={deadline.date}
              dueTime={deadline.time}
              completed={deadline.completed}
              onToggle={() => toggleDeadline(deadline.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
