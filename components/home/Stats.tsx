const Stats = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Stat 1 */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-4xl font-bold text-orange-500 mb-2">
                            53%
                        </h3>
                        <p className="text-gray-700">
                            Higher graduation rate with proper academic guidance
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-4xl font-bold text-orange-400 mb-2">
                            25%
                        </h3>
                        <p className="text-gray-700">
                            Reduction in academic probation
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-4xl font-bold text-orange-300 mb-2">
                            15%
                        </h3>
                        <p className="text-gray-700">
                            Increase in student retention
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
