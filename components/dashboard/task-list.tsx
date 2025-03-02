// components/dashboard/task-list.tsx
import { FC } from "react";
import { AlertCircle, Clock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Priority = "high" | "medium" | "low";

interface TaskItemProps {
  title: string;
  dueDate: string;
  priority: Priority;
  onComplete?: () => void;
}

const TaskItem: FC<TaskItemProps> = ({ title, dueDate, priority }) => {
  const priorityConfig = {
    high: {
      icon: <AlertCircle className="h-4 w-4 text-red-500" />,
      className: "bg-red-50 border-red-100 text-red-700",
    },
    medium: {
      icon: <Clock className="h-4 w-4 text-amber-500" />,
      className: "bg-amber-50 border-amber-100 text-amber-700",
    },
    low: {
      icon: <CheckCircle className="h-4 w-4 text-blue-500" />,
      className: "bg-blue-50 border-blue-100 text-blue-700",
    },
  };

  return (
    <div className="border rounded-md p-3 mb-3 bg-white hover:shadow-sm transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="mr-3 flex-shrink-0">
            {priorityConfig[priority].icon}
          </div>
          <div>
            <h4 className="text-sm font-medium">{title}</h4>
            <p className="text-xs text-gray-500 mt-1">{dueDate}</p>
          </div>
        </div>
        <div
          className={cn(
            "text-xs px-2 py-1 rounded-full",
            priorityConfig[priority].className
          )}
        >
          {priority}
        </div>
      </div>
    </div>
  );
};

export const TaskList: FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-800">Tasks</h2>
      </div>

      <div className="p-4">
        <div className="mb-3">
          <p className="text-xs font-medium text-gray-500 mb-2">PRIORITY</p>
        </div>

        <TaskItem
          title="Course Registration Pending"
          dueDate="Sep 5, 09:00 AM"
          priority="high"
        />

        <TaskItem
          title="Check in with Academic Advisor"
          dueDate="Sep 10, 01:30 PM"
          priority="medium"
        />

        <TaskItem
          title="Complete course review"
          dueDate="Sep 15, 05:00 PM"
          priority="low"
        />
      </div>
    </div>
  );
};
