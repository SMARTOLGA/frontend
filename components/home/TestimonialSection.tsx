"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    // OLGA-specific testimonials that align with the platform's purpose
    const testimonials = [
        {
            id: 1,
            name: "Yanet Kebede",
            role: "MS IT, Class of 2026",
            quote: "OLGA transformed my academic journey. As an Ethiopian student passionate about agricultural technology, I struggled to find courses that aligned with my unique interests. OLGA recommended the perfect combination of tech and entrepreneurship courses that helped me build my agritech startup.",
            image: "/img/testimonial-yanet.png",
        },
        {
            id: 2,
            name: "Michael Omondi",
            role: "MSE, Class of 2026",
            quote: "Planning my degree requirements used to be stressful and confusing. With OLGA, I mapped my entire academic path in minutes. The AI-powered recommendations helped me discover courses I wouldn't have found otherwise, and the flexible course swapping feature made adjustments simple when my interests shifted.",
            image: "/img/testimonial-kasongo.png",
        },
        {
            id: 3,
            name: "Noah Shumba",
            role: "MSIT, Class of 2025",
            quote: "Before OLGA, I had multiple versions of my degree plan in Excel sheets. Now everything is organized in one place. The personalized profile understood my learning preferences, and I've seen a significant improvement in my academic performance because I'm taking courses that genuinely interest me.",
            image: "/img/testimonial-shumba.png",
        },
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const nextTestimonial = () => {
        setActiveSlide((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const prevTestimonial = () => {
        setActiveSlide((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <section className="bg-gradient-to-br from-[#5268A0] to-[#6c81af] py-16 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
                <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-white"></div>
                <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-white"></div>
                <div className="absolute bottom-20 left-1/4 w-3 h-3 rounded-full bg-white"></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-white"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    {/* Left side - Image with decorative frame */}
                    <div className="relative md:col-span-5 order-2 md:order-1">
                        <div className="relative h-96 w-72 mx-auto rounded-xl overflow-hidden shadow-2xl">
                            {/* Testimonial image */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#334773]/30"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Use a placeholder image if the actual image is not available */}
                                <Image
                                    src={
                                        testimonials[activeSlide].image ||
                                        "/img/testimonial-michael.png"
                                    }
                                    alt={testimonials[activeSlide].name}
                                    fill
                                    className="object-contain"
                                    onError={(e) => {
                                        // Fallback if image fails to load
                                        e.currentTarget.src =
                                            "/img/testimonial-michael.png";
                                    }}
                                />
                            </div>

                            {/* Decorative frame */}
                            {/* <div className="absolute inset-0 border-4 border-white/20 rounded-xl"></div> */}
                            {/* <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/10 rounded-lg"></div> */}
                        </div>

                        {/* Background decorative elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-blue-200/10"></div>
                        {/* <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-200/10"></div> */}
                    </div>

                    {/* Right side - Testimonial Content */}
                    <div className="text-white md:col-span-7 order-1 md:order-2">
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="h-px w-8 bg-blue-200"></div>
                            <h2 className="text-blue-200 font-medium text-lg">
                                Success Stories
                            </h2>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            Transforming Academic Journeys
                            <br />
                            <span className="text-blue-200">
                                One Student at a Time
                            </span>
                        </h3>

                        <div className="relative mb-8">
                            <div className="absolute -left-8 top-0 text-white/20 text-7xl font-serif">
                                &quot;
                            </div>
                            <p className="text-white/90 leading-relaxed relative z-10 pl-2 text-lg">
                                {testimonials[activeSlide].quote}
                            </p>
                            <div className="absolute -bottom-6 right-0 text-white/20 text-7xl font-serif">
                                &quot;
                            </div>
                        </div>

                        <div className="mt-10">
                            <p className="font-bold text-xl">
                                {testimonials[activeSlide].name}
                            </p>
                            <p className="text-blue-200">
                                {testimonials[activeSlide].role}
                            </p>
                        </div>

                        {/* Testimonial Navigation Controls */}
                        <div className="flex justify-between items-center mt-8">
                            <div className="flex space-x-3">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveSlide(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                            index === activeSlide
                                                ? "bg-white w-8"
                                                : "bg-white/40"
                                        }`}
                                        aria-label={`View testimonial ${
                                            index + 1
                                        }`}
                                    />
                                ))}
                            </div>

                            <div className="flex space-x-2">
                                <Button
                                    onClick={prevTestimonial}
                                    size="icon"
                                    variant="ghost"
                                    className="bg-white/10 hover:bg-white/20 text-white rounded-full h-10 w-10"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </Button>
                                <Button
                                    onClick={nextTestimonial}
                                    size="icon"
                                    variant="ghost"
                                    className="bg-white/10 hover:bg-white/20 text-white rounded-full h-10 w-10"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
