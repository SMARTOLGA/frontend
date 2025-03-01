import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
        <div className="bg-white w-full overflow-hidden relative">
            {/* Decorative dots pattern - left top */}
            <div className="absolute top-0 left-0 grid grid-cols-4 gap-2">
                {Array(16)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={`dot-lt-${i}`}
                            className="w-1.5 h-1.5 rounded-full bg-blue-900/80"
                        ></div>
                    ))}
            </div>

            {/* Decorative dots pattern - right bottom */}
            <div className="absolute bottom-0 right-0 grid grid-cols-12 gap-2">
                {Array(60)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={`dot-rb-${i}`}
                            className="w-1.5 h-1.5 rounded-full bg-blue-900/80"
                        ></div>
                    ))}
            </div>

            <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
                {/* Left Side - Text Content */}
                <div className="w-full md:w-1/2 mb-10 md:mb-0 z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-4">
                        Plan Your Academic Journey with OLGA
                    </h1>
                    <p className="text-gray-700 text-lg mb-8 max-w-lg">
                        Your personalized AI academic advisor that helps
                        CMU-Africa students align courses with career goals and
                        optimize their learning path.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            asChild
                            className="bg-blue-900 hover:bg-blue-800 text-white font-medium px-8 py-6"
                        >
                            <Link href="#">
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

                {/* Right Side - Dashboard Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative w-full max-w-md">
                        <Image
                            src="/img/olga-dashboard.png"
                            alt="OLGA Dashboard interface showing student schedule, grades, and learning roadmap"
                            width={500}
                            height={600}
                            className="rounded-lg shadow-xl z-10 relative"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
