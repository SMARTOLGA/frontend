import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
    return (
        <section id="faq" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-8 bg-blue-600"></div>
                    <h2 className="text-blue-600 font-medium">FAQs</h2>
                </div>

                <h3 className="text-3xl font-bold text-gray-800 mb-8">
                    Still having a doubt? Let's be more clearer!
                </h3>

                <div className="max-w-3xl mx-autok">
                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem
                            value="item-1"
                            className="border rounded-lg bg-white overflow-hidden"
                        >
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                <div className="flex items-start">
                                    <span className="text-blue-900 font-medium mr-3">
                                        01.
                                    </span>
                                    <span className="text-left font-medium">
                                        How does OLGA generate course
                                        recommendations?
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 pt-3 border-t">
                                <div className="pl-8 text-gray-600">
                                    OLGA uses AI algorithms to analyze your
                                    academic profile, career goals, and program
                                    requirements to suggest the most relevant
                                    courses for your journey. The system
                                    considers factors such as prerequisites,
                                    course difficulty, your learning
                                    preferences, and graduation requirements.
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-2"
                            className="border rounded-lg bg-white overflow-hidden"
                        >
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                <div className="flex items-start">
                                    <span className="text-blue-900 font-medium mr-3">
                                        02.
                                    </span>
                                    <span className="text-left font-medium">
                                        Can I modify my course plan after it's
                                        generated?
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 pt-3 border-t">
                                <div className="pl-8 text-gray-600">
                                    Yes! OLGA offers flexible course swapping
                                    while ensuring you stay on track with your
                                    degree requirements. OLGA uses AI to analyze
                                    your academic profile, career goals, and
                                    program requirements to suggest the most
                                    relevant courses for your journey.
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-3"
                            className="border rounded-lg bg-white overflow-hidden"
                        >
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                <div className="flex items-start">
                                    <span className="text-blue-900 font-medium mr-3">
                                        03.
                                    </span>
                                    <span className="text-left font-medium">
                                        How does OLGA integrate with existing
                                        CMU systems?
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 pt-3 border-t">
                                <div className="pl-8 text-gray-600">
                                    OLGA seamlessly integrates with CMU's
                                    academic systems to access course catalogs,
                                    degree requirements, and scheduling
                                    information. This integration ensures
                                    recommendations are always based on the most
                                    current and accurate institutional data.
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-4"
                            className="border rounded-lg bg-white overflow-hidden"
                        >
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                <div className="flex items-start">
                                    <span className="text-blue-900 font-medium mr-3">
                                        04.
                                    </span>
                                    <span className="text-left font-medium">
                                        How can I book a session with Olga?
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 pt-3 border-t">
                                <div className="pl-8 text-gray-600">
                                    You can schedule a consultation through the
                                    "Get Started" button on our homepage. After
                                    creating your account, you'll have access to
                                    our booking calendar where you can select a
                                    convenient time for your initial academic
                                    planning session.
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-5"
                            className="border rounded-lg bg-white overflow-hidden"
                        >
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                <div className="flex items-start">
                                    <span className="text-blue-900 font-medium mr-3">
                                        05.
                                    </span>
                                    <span className="text-left font-medium">
                                        What if I have a question that isn't
                                        answered here?
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 pt-3 border-t">
                                <div className="pl-8 text-gray-600">
                                    Feel free to contact our support team at
                                    support@olga@cmu.edu with any additional
                                    questions or concerns. We're here to help
                                    ensure your academic journey at CMU-Africa
                                    is successful and tailored to your unique
                                    goals.
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
