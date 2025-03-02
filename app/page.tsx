import AboutSection from "@/components/home/AboutSection";
import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import Stats from "@/components/home/Stats";
import TestimonialSection from "@/components/home/TestimonialSection";
import WhyOLGASection from "@/components/home/WhyOLGASection";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <HeroSection />
            <Stats />
            <AboutSection />
            <WhyOLGASection />
            <TestimonialSection />
            <FAQSection />
            <Footer />
        </div>
    );
}

export default HomePage;

function Header() {
    return (
        <nav className="bg-white py-4 px-6 border-b sticky top-0 z-[1000] shadow-xs">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-10 w-10">
                        <Image
                            src="/img/olga-logo.png"
                            alt="OLGA Logo"
                            fill
                            className="object-contain"
                            // width={40}
                            // height={40}
                        />
                    </div>
                    <span className="text-blue-900 font-bold text-xl">
                        OLGA
                    </span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="#features"
                        className="text-gray-600 hover:text-blue-900"
                    >
                        Features
                    </Link>
                    <Link
                        href="#benefits"
                        className="text-gray-600 hover:text-blue-900"
                    >
                        Benefits
                    </Link>
                    <Link
                        href="#faq"
                        className="text-gray-600 hover:text-blue-900"
                    >
                        FAQ
                    </Link>
                    <Link
                        href="#about"
                        className="text-gray-600 hover:text-blue-900"
                    >
                        About
                    </Link>
                    <Link href={"/login"}>
                        <Button className="bg-blue-900 hover:bg-blue-800 ml-4">
                            Log in
                        </Button>
                    </Link>
                </div>

                {/* Mobile menu button - add functionality as needed */}
                <button className="md:hidden text-gray-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
