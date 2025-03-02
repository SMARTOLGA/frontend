import AboutSection from "@/components/home/AboutSection";
import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import Stats from "@/components/home/Stats";
import TestimonialSection from "@/components/home/TestimonialSection";
import WhyOLGASection from "@/components/home/WhyOLGASection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

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
