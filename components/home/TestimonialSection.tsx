'use client'
import { useState } from "react";
import Image from "next/image";

import { Button } from "../ui/button";

// Testimonial/Success Stories Section
const TestimonialSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    // Sample testimonials data - replace with your actual testimonials
    const testimonials = [
        {
            id: 1,
            name: "Justin Baghel",
            role: "MSE, Class of 2023",
            quote: "Everything is explained in an easy and straight to the point way. Loved the content and the overall structure of the course. He took our continuous feedback and made it very few, makes it sticky to keep even with headphones.",
        },
        {
            id: 2,
            name: "Sarah Chen",
            role: "MSE, Class of 2024",
            quote: "OLGA helped me navigate my degree requirements efficiently. The personalized recommendations saved me so much time and helped me find courses I wouldn't have discovered otherwise.",
        },
        {
            id: 3,
            name: "David Mutua",
            role: "MSIT, Class of 2023",
            quote: "The course planning features are exceptional. I was able to map my entire degree journey and adjust it easily when my career interests evolved during my second semester.",
        },
    ];

    return (
        <section className="bg-blue-600/80 py-16">
            <div className="container mx-auto px-4">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-8 bg-white"></div>
                    <h2 className="text-white font-medium">Success Stories</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="relative order-2 md:order-1">
                        <div className="relative h-80 w-64 mx-auto rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/img/testimonial-justin.png"
                                alt={testimonials[activeSlide].name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right side - Testimonial Content */}
                    <div className="text-white order-1 md:order-2">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Excelent course.
                            <br />
                            Joe is the best instructor!
                        </h3>

                        <div className="relative mb-8">
                            <div className="absolute -left-8 top-0 text-white/30 text-7xl font-serif">
                                "
                            </div>
                            <p className="text-white/90 leading-relaxed relative z-10 pl-2">
                                {testimonials[activeSlide].quote}
                            </p>
                            <div className="absolute -bottom-6 right-0 text-white/30 text-7xl font-serif">
                                "
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="font-bold">
                                {testimonials[activeSlide].name}
                            </p>
                            <p className="text-white/80">
                                {testimonials[activeSlide].role}
                            </p>
                        </div>

                        {/* Testimonial Navigation Dots */}
                        <div className="flex space-x-2 mt-6">
                            {testimonials.map((_, index) => (
                                <Button
                                    key={index}
                                    onClick={() => setActiveSlide(index)}
                                    className={`w-2.5 h-2.5 rounded-full ${
                                        index === activeSlide
                                            ? "bg-white"
                                            : "bg-white/40"
                                    }`}
                                    aria-label={`View testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
