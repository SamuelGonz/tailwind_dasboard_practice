import { RiLineChartLine } from "react-icons/ri";

export const CardsOverViewSection = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-5 gap-8 mb-8">
            {/* Card 1 */}
            <div className="bg-primary-light p-8 rounded-xl flex flex-col gap-4 text-gray-100 drop-shadow-xl">
                <RiLineChartLine className="text-5xl" />
                <h5 className="text-xl">Earnings</h5>
                <p className="text-4xl text-white mb-3">€8,350</p>
                <p>
                    <span className="bg-primary-main/50 rounded-full px-3 py-1 text-sm">+ 10% since last month</span>
                </p>
            </div>
            {/* Card 2 */}
            <div className="p-8 bg-white rounded-xl flex flex-col gap-4 drop-shadow-xl">
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
                    <div className="flex items-center gap-2">
                        <span className="bg-primary-light/20 py-1 px-2 rounded-full text-gray-500 text-xs">
                            Mobile app
                        </span>
                        <span className="bg-primary-light/20 py-1 px-2 rounded-full text-gray-500 text-xs">
                            Branding
                        </span>
                    </div>
                </div>
            </div>
            {/* Card 3 */}
            <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
                <h6 className="text-xl font-semibold mb-4">Your projects</h6>
                <div className="bg-white p-8 pb-4 rounded-xl drop-shadow-xl">
                    <div className="flex items-center gap-4 mb-8">
                        <img
                            className="w-12 h-12 object-cover rounded-full"
                            src="https://img.freepik.com/foto-gratis/cintura-arriba-retrato-hombre-guapo-afeitar-serio-mantiene-manos-juntas-vestido-camisa-azul-oscuro-ha-hablado-interlocutor-parado-contra-pared-blanca-freelancer-hombre-seguro-si-mismo_273609-16320.jpg"
                        />

                        <div>
                            <p className="font-semibold">Logo desing for bakery</p>
                            <p className="text-gray-500 text-sm">1 day reaming</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                        <img
                            className="w-12 h-12 object-cover rounded-full"
                            src="https://img.freepik.com/foto-gratis/cintura-arriba-retrato-hombre-guapo-afeitar-serio-mantiene-manos-juntas-vestido-camisa-azul-oscuro-ha-hablado-interlocutor-parado-contra-pared-blanca-freelancer-hombre-seguro-si-mismo_273609-16320.jpg"
                        />

                        <div>
                            <p className="font-semibold">Logo desing for bakery</p>
                            <p className="text-gray-500 text-sm">1 day reaming</p>
                        </div>
                    </div>

                    <p className="text-right">See more projects</p>
                </div>
            </div>
        </section>
    );
};
