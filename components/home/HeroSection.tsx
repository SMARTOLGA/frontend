import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="w-full min-h-screenh bg-gradient-to-b from-[#E7F0FC] via-[#F2F7FD] to-white overflow-hidden">
            <div className="container relative mx-auto py-16 flex flex-col lg:flex-row items-center justify-between">
                {/* Dots pattern on left */}
                <div className="absolute left-0 top-4 grid grid-cols-12 gap-4">
                    {Array(96)
                        .fill(0)
                        .map((_, i) => (
                            <div
                                key={`left-dot-${i}`}
                                className="w-1.5 h-1.5 rounded-full bg-blue-900 opacity-20"
                            ></div>
                        ))}
                </div>

                {/* Dots pattern on right */}
                <div className="absolute right-0 bottom-10 grid grid-cols-12 gap-6">
                    {Array(96)
                        .fill(0)
                        .map((_, i) => (
                            <div
                                key={`right-dot-${i}`}
                                className="w-1.5 h-1.5 rounded-full bg-blue-900 opacity-40"
                            ></div>
                        ))}
                </div>
                {/* Left content */}
                <div className="lg:w-1/2 z-10 space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                        Plan Your Academic Journey with OLGA
                    </h1>
                    <p className="text-lg text-gray-800 max-w-xl">
                        Your personalized AI academic advisor that helps
                        CMU-Africa students align courses with career goals and
                        optimize their learning path.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-3">
                        <Button
                            asChild
                            className="bg-blue-900 hover:bg-blue-800 text-white font-medium px-8 py-6"
                        >
                            <Link href="/login">
                                Get Started
                                <svg
                                    className="ml-2 h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            asChild
                            className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-6"
                        >
                            <Link href="#">Learn more</Link>
                        </Button>
                    </div>
                </div>

                {/* Right content - Students Illustration */}
                <div className="lg:w-1/2 mt-12 lg:mt-0 z-10 flex justify-center lg:justify-end">
                    <div className="relative">
                        <Image
                            src="/img/Successful marketing team working together.png"
                            alt="Students using OLGA academic advisor"
                            width={500}
                            height={500}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
