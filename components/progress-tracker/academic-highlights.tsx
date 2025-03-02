import React from "react";

interface AcademicHighlightsProps {
  cgpa: number;
  semestersCompleted: number;
}

export const AcademicHighlights = ({
  cgpa,
  semestersCompleted,
}: AcademicHighlightsProps) => {
  return (
    <div className="bg-white rounded-lg border p-4">
      <h2 className="text-base font-medium text-[#102052] mb-4">
        Academic highlight
      </h2>

      <div className="space-y-2">
        {/* CGPA Card */}
        <div className="p-4 rounded-lg border bg-gray-50 text-[#0E2C75]">
          <div className="flex items-center space-x-3 text-[#0E2C75]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0E2C75"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" lucide lucide-notebook-pen"
            >
              <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
              <path d="M2 6h4" />
              <path d="M2 10h4" />
              <path d="M2 14h4" />
              <path d="M2 18h4" />
              <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
            </svg>
            <div>
              <p className="text-sm">Current CGPA</p>
              <p className="text-2xl font-normal">{cgpa.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Semesters Completed Card */}
        <div className="p-4 rounded-lg border bg-gray-50">
          <div className="flex items-center space-x-3">
            <div className="text-[#0E2C75]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-list-check"
              >
                <path d="M11 18H3" />
                <path d="m15 18 2 2 4-4" />
                <path d="M16 12H3" />
                <path d="M16 6H3" />
              </svg>
            </div>
            <div>
              <p className="text-sm ">Semester completed</p>
              <p className="text-2xl font-normal ">{semestersCompleted}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
