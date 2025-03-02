import { Card, CardContent } from "../ui/card";

const Stats = () => {
    return (
        <section className="py-0 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                    <StatCard
                        percentage="53%"
                        description="Higher graduation rate with proper academic guidance"
                    />
                    <StatCard
                        percentage="25%"
                        description="Reduction in academic probation"
                    />
                    <StatCard
                        percentage="15%"
                        description="Increase in student retention"
                    />
                </div>
            </div>
        </section>
    );
};

export default Stats;

function StatCard({
    percentage,
    description,
}: {
    readonly percentage: string;
    readonly description: string;
}) {
    return (
        <Card className="border-none shadow-sm bg-white/90 backdrop-blur-md">
            <CardContent className="p-6">
                <h3 className="text-3xl font-bold text-blue-900">
                    {percentage}
                </h3>
                <p className="text-gray-700 mt-2">{description}</p>
            </CardContent>
        </Card>
    );
}
