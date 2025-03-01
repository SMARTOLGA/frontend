import Image from "next/image";

const AboutSection = () => {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-8 bg-blue-600"></div>
                    <h2 className="text-blue-600 font-medium">About us</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-6">
                            Who we are
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            We help undergraduate students at CMU-Africa pursue
                            their degree efficiently with their career goal due
                            to limited advising resources and tight decision
                            timeframes. OLGA was developed as a solution to help
                            students efficiently match courses to their
                            individual career aspirations.
                        </p>
                    </div>

                    <div className="relative">
                        <Image
                            src="/img/olga-dashboard.png"
                            alt="OLGA Dashboard demonstration"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
