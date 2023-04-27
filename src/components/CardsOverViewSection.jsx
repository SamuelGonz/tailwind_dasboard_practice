import { RiLineChartLine } from "react-icons/ri";

export const CardsOverViewSection = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-8">
            {/* Card 1 */}
            <div className="bg-primary-light p-8 rounded-xl flex flex-col gap-4 text-gray-100">
                <RiLineChartLine className="text-5xl" />
                <h5 className="text-xl">Earnings</h5>
                <p className="text-4xl text-white mb-3">€8,350</p>
                <p>
                    <span className="bg-primary-main/50 rounded-full px-3 py-1 text-sm">+ 10% since last month</span>
                </p>
            </div>
            {/* Card 2 */}
            <div className="p-8 bg-white rounded-xl flex flex-col gap-4">
                <div className="flex gap-4 items-center bg-primary-light/10 p-2 rounded-xl">
                    <p className="bg-primary-light text-gray-100 tracking-widest p-4 rounded-xl text-2xl">98</p>
                    <div>
                        <h5 className="font-bold">Rank</h5>
                        <p className="text-gray-500 text-sm">In top 30%</p>
                    </div>
                </div>
                <div className="flex flex-col bg-primary-light/10 p-2 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                        <p className="bg-primary-light text-gray-100 tracking-widest p-4 rounded-xl text-2xl">32</p>
                        <div>
                            <h5 className="font-bold">Projects</h5>
                            <p className="text-gray-500 text-sm">8 this month</p>
                        </div>
                    </div>
                    <div>
                        <span className="bg-primary-light/10 py-1 px-2 rounded-full">Mobile app</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
