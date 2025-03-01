const WhyOLGASection = () => {
    return (
        <section id="why-olga" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-8 bg-blue-600"></div>
                    <h2 className="text-blue-600 font-medium">Why OLGA</h2>
                </div>

                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    Key features
                </h3>
                <p className="text-gray-600 mb-12 max-w-3xl">
                    OLGA combines AI-powered guidance with deep academic
                    insights to provide a comprehensive course planning
                    experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Feature 1 */}
                    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-900"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-blue-900 mb-4">
                            Personalized Profile Creation
                        </h4>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-blue-900 mr-2">•</span>
                                <span className="text-gray-600">
                                    Academic interests tracking
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-900 mr-2">•</span>
                                <span className="text-gray-600">
                                    Career path alignment
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-900 mr-2">•</span>
                                <span className="text-gray-600">
                                    Learning style preferences
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-900 mr-2">•</span>
                                <span className="text-gray-600">
                                    Concentration selection
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Feature 2 */}
                    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-900"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-blue-900 mb-4">
                            Smart Course Planning
                        </h4>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-blue-900 mr-2">•</span>
                                <span className="text-gray-600">
                                    AI-powered recommendations
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-900 mr-2">•</span>
                                <span className="text-gray-600">
                                    Course difficulty ratings
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-900 mr-2">•</span>
                                <span className="text-gray-600">
                                    Prerequisites tracking
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-900 mr-2">•</span>
                                <span className="text-gray-600">
                                    Degree requirement monitoring
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Feature 3 */}
                    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-900"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-blue-900 mb-4">
                            Interactive Course Management
                        </h4>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-blue-900 mr-2">•</span>
                                <span className="text-gray-600">
                                    Flexible course swapping
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-900 mr-2">•</span>
                                <span className="text-gray-600">
                                    Real-time plan updates
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-900 mr-2">•</span>
                                <span className="text-gray-600">
                                    Progress visualization
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-900 mr-2">•</span>
                                <span className="text-gray-600">
                                    Automated registration
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyOLGASection;
