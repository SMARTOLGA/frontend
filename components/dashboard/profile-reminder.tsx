import { FC } from "react";
import Link from "next/link";
import { AlertCircle, ChevronRight } from "lucide-react";

const ProfileReminder: FC = () => {
  return (
    <div className="w-full bg-pink-50 border border-pink-100 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
      <Link
        href="/dashboard/profile"
        className="flex items-center justify-between p-4 text-pink-600 hover:bg-pink-100 transition-colors group"
      >
        <div className="flex items-center">
          <AlertCircle className="h-5 w-5 mr-2 text-pink-500 flex-shrink-0" />
          <span className="font-medium">Complete your profile</span>
        </div>
        <ChevronRight className="h-5 w-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ProfileReminder;
