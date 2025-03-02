"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

const errorMessages = {
  AccessDenied: "Sign in failed. Only CMU email addresses are allowed.",
  Default: "An error occurred during sign in. Please try again.",
  OAuthSignin: "Error starting the sign in process. Please try again.",
  OAuthCallback: "Error processing the sign in response. Please try again.",
  OAuthCreateAccount: "Error creating your account. Please try again.",
  EmailCreateAccount: "Error creating your account. Please try again.",
  Callback: "Error during the sign in callback. Please try again.",
  OAuthAccountNotLinked: "This email is already associated with another account.",
  EmailSignin: "Error sending the sign in email. Please try again.",
  CredentialsSignin: "Sign in failed. Check your credentials and try again.",
  SessionRequired: "Please sign in to access this page.",
};

// Component that uses useSearchParams
const ErrorContent = () => {
  const searchParams = useSearchParams();
  const [errorType, setErrorType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const error = searchParams.get("error") as keyof typeof errorMessages;
    if (error) {
      setErrorType(error);
      setErrorMessage(errorMessages[error] || errorMessages.Default);
    } else {
      setErrorMessage(errorMessages.Default);
    }
  }, [searchParams]);

  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
        <svg
          className="w-8 h-8 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Authentication Error
      </h2>
      
      {errorType && (
        <p className="text-sm text-gray-500 mb-1">Error code: {errorType}</p>
      )}
      
      <p className="text-gray-700 mb-6">
        {errorMessage}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/login"
          className="inline-flex justify-center items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Try Again
        </Link>
        <Link
          href="/"
          className="inline-flex justify-center items-center px-6 py-2.5 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

// Loading state component
const ErrorFallback = () => {
  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
      <div className="inline-flex items-center justify-center">
        <div className="w-8 h-8 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
      </div>
      <h2 className="text-xl font-medium text-gray-700 mt-4">Loading...</h2>
    </div>
  );
};

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Suspense fallback={<ErrorFallback />}>
        <ErrorContent />
      </Suspense>
    </div>
  );
}