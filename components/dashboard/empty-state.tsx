// components/dashboard/empty-state.tsx
import { FC } from "react";
import Image from "next/image";
import ProfileReminder from "./profile-reminder";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  className?: string;
}

const EmptyState: FC<EmptyStateProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center py-12 px-4 animate-fadeIn",
        className
      )}
    >
      {/* Balloon illustration */}
      <div className="w-full max-w-xs relative mb-8">
        <div className="aspect-[4/3] relative mx-auto">
          <Image
            src="/images/404balloon.png"
            alt="Balloons illustration"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
        Nothing Planned yet
      </h3>

      <div className="w-full max-w-md">
        <ProfileReminder />
      </div>
    </div>
  );
};

export default EmptyState;
