import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
    // FAQ data array for easy maintenance and future updates
    const faqData = [
        {
            id: "item-1",
            number: "01",
            question: "How does OLGA generate course recommendations?",
            answer: "OLGA combines AI technology with CMU-Africa's course data to provide personalized recommendations. It analyzes your academic profile, career goals, and learning preferences alongside program requirements to suggest the most relevant courses. The system evaluates course prerequisites, historical student performance data, and alignment with your stated career objectives to create a tailored academic path.",
        },
        {
            id: "item-2",
            number: "02",
            question: "Can I modify my course plan after it's generated?",
            answer: "Absolutely. OLGA's flexible course swapping feature allows you to customize your academic plan while ensuring you stay on track with degree requirements. When you swap a course, OLGA immediately evaluates the impact on your graduation timeline and career alignment, suggesting alternatives that maintain your academic progression.",
        },
        {
            id: "item-3",
            number: "03",
            question: "How does OLGA integrate with existing CMU systems?",
            answer: "OLGA integrates with SIO and the CMU-Africa course catalog using secure APIs. It pulls real-time data on course availability, prerequisites, and scheduling. For course registration, OLGA can generate an .ics file compatible with SIO to streamline your enrollment process while maintaining all CMU security protocols.",
        },
        {
            id: "item-4",
            number: "04",
            question: "Will OLGA replace academic advisors?",
            answer: "No, OLGA is designed to complement academic advising, not replace it. The system helps you prepare a well-thought-out initial plan before meeting with your advisor, making those sessions more productive. Advisors can focus on nuanced guidance rather than basic course selection, creating a more valuable advising experience.",
        },
        {
            id: "item-5",
            number: "05",
            question: "How does OLGA handle specialized academic interests?",
            answer: "OLGA excels at connecting specialized interests with relevant coursework. During profile creation, you can specify niche areas like 'agricultural technology' or 'healthcare AI,' and OLGA will identify courses with relevant content or applications. For very specialized interests, OLGA also suggests independent study options and research opportunities with faculty working in related areas.",
        },
        {
            id: "item-6",
            number: "06",
            question: "Is my academic data secure with OLGA?",
            answer: "Yes, security is a top priority. OLGA adheres to CMU's stringent data protection standards, using encryption for all stored data and secure authentication through DUO. Your academic profile and course plans are visible only to you and authorized academic personnel, following the same privacy protocols as other CMU systems.",
        },
    ];

    return (
        <section id="faq" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-8 bg-blue-700"></div>
                    <h2 className="text-blue-700 font-medium">FAQs</h2>
                </div>

                <h3 className="text-3xl font-bold text-slate-800 mb-10">
                    Still having a doubt? Let&apos;s be more clearer!
                </h3>

                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqData.map((faq) => (
                            <AccordionItem
                                key={faq.id}
                                value={faq.id}
                                className="border rounded-lg bg-white overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md"
                            >
                                <AccordionTrigger className="px-6 py-5 hover:no-underline">
                                    <div className="flex items-start">
                                        <span className="text-blue-900 font-medium mr-3">
                                            {faq.number}.
                                        </span>
                                        <span className="text-left font-medium text-slate-800">
                                            {faq.question}
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-5 pt-2 border-t">
                                    <div className="pl-8 text-slate-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
