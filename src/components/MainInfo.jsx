import { RiHashtag } from "react-icons/ri";

export const MainInfo = () => {
    return (
        <section className="grid md:grid-cols-2 gap-4">
            {/* First column */}
            <div>
                <p className="text-xl font-semibold mb-4">Recent invoices</p>
                {/* Card 1 */}
                <div className="bg-white p-4 rounded-xl shadow-xl mb-8">
                    <div className="flex items-center gap-4 justify-between mb-4">
                        <div className="flex items-center gap-4 basis-1/2 flex-col sm:flex-row md:flex-col xl:flex-row">
                            <img
                                className="w-12 h-12 object-cover rounded-xl"
                                src="https://img.freepik.com/foto-gratis/cintura-arriba-retrato-hombre-guapo-afeitar-serio-mantiene-manos-juntas-vestido-camisa-azul-oscuro-ha-hablado-interlocutor-parado-contra-pared-blanca-freelancer-hombre-seguro-si-mismo_273609-16320.jpg"
                            />
                            <div>
                                <p className="font-semibold text-md">Alexander Willians</p>
                                <p className="text-gray-500 text-sm">JQ Holdings</p>
                            </div>
                        </div>
                        <div className="flex gap-2 flex-col sm:flex-row md:flex-col xl:flex-row items-center justify-between basis-1/2">
                            <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full font-medium text-sm">
                                Paid
                            </span>
                            <span className="font-bold">€ 1.000,87</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 justify-between mb-4">
                        <div className="flex items-center gap-4 basis-1/2 flex-col sm:flex-row md:flex-col xl:flex-row">
                            <img
                                className="w-12 h-12 object-cover rounded-xl"
                                src="https://img.freepik.com/foto-gratis/cintura-arriba-retrato-hombre-guapo-afeitar-serio-mantiene-manos-juntas-vestido-camisa-azul-oscuro-ha-hablado-interlocutor-parado-contra-pared-blanca-freelancer-hombre-seguro-si-mismo_273609-16320.jpg"
                            />
                            <div>
                                <p className="font-semibold text-md">Jhon Philips</p>
                                <p className="text-gray-500 text-sm">Inchor Techs</p>
                            </div>
                        </div>
                        <div className="flex gap-2 flex-col sm:flex-row md:flex-col xl:flex-row items-center justify-between basis-1/2">
                            <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full font-medium text-sm">
                                Late
                            </span>
                            <span className="font-bold">€ 12.789,00</span>
                        </div>
                    </div>
                </div>
                <div className="bg-primary-dark text-gray-300 p-8 rounded-xl shadow-xl flex items-center justify-between">
                    <div>
                        <RiHashtag className="text-4xl -rotate-12" />
                    </div>
                    <div>
                        <p className="font-semibold text-white">Engage with clients</p>
                        <p>Jonh slack channel</p>
                    </div>
                    <div>
                        <button className="bg-primary-light py-3 px-6 rounded-xl text-white">Join now</button>
                    </div>
                </div>
            </div>
            {/* Seconnd Column */}
            <div>
                <p className="text-xl font-semibold mb-4">Recommended Project</p>
                <div className="bg-white p-8 rounded-xl shadow-2xl mb-8">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <img
                                className="w-12 h-12 object-cover rounded-full"
                                src="https://img.freepik.com/foto-gratis/cintura-arriba-retrato-hombre-guapo-afeitar-serio-mantiene-manos-juntas-vestido-camisa-azul-oscuro-ha-hablado-interlocutor-parado-contra-pared-blanca-freelancer-hombre-seguro-si-mismo_273609-16320.jpg"
                            />
                            <div className="">
                                <p className="font-bold">Thomas Martin</p>
                                <p className="text-gray-500 text-sm">Updated 10m ago</p>
                            </div>
                        </div>
                        <div>
                            <span className="bg-primary-light rounded-full px-3 py-2 text-white text-sm">Design</span>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold mt-6">
                            Need a desinger to form branding essntials for my business.
                        </h5>
                        <p className="text-gray-500">
                            Looking for a talented brand desinger to create all the branding materials my new startup.
                        </p>
                    </div>
                    <div className="bg-primary-light/10 flex items-center md:flex-col xl:flex-row justify-between gap-4 p-8 rounded-lg">
                        <div className="flex items-center gap-2">
                            <span className="text-sx text-gray-500">€</span>{" "}
                            <span className="text-2xl font-bold">8.700</span>
                            <span className="text-sx text-gray-500 ml-1">/ month</span>
                        </div>
                        <div>
                            <span className="border border-gray-500 text-sm py-2 px-4 rounded-full ">Full time</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
