import { RiHome3Line, RiFileCopyLine, RiWalletLine, RiPieChartLine } from "react-icons/ri";

export const Sidebar = ({ showMenu }) => {
    return (
        <div
            className={`bg-primary-dark h-full fixed lg:static w-[80%] lg:w-full ${
                showMenu ? "bottom-0" : "-bottom-full"
            } left-0 transition-all`}
        >
            {/* Profile */}
            <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
                <img
                    src="https://img.freepik.com/foto-gratis/cintura-arriba-retrato-hombre-guapo-afeitar-serio-mantiene-manos-juntas-vestido-camisa-azul-oscuro-ha-hablado-interlocutor-parado-contra-pared-blanca-freelancer-hombre-seguro-si-mismo_273609-16320.jpg"
                    className="w-16 h-16 object-cover rounded-full"
                />

                <h1 className="text-xl text-white font-medium">Samuel González</h1>
                <p className="bg-primary-light py-1 px-3 rounded-full text-white text-xs">Pro level</p>
            </div>
            {/* Nav */}
            <div className="bg-primary-main p-8 rounded-tr-[100px] h-[70vh] overflow-y-auto flex flex-col justify-between gap-8">
                <nav>
                    <a href="#" className="link hover:bg-primary-dark">
                        <RiHome3Line /> Home
                    </a>
                    <a href="#" className="link hover:bg-primary-dark">
                        <RiFileCopyLine /> Projects
                    </a>
                    <a href="#" className="link hover:bg-primary-dark">
                        <RiWalletLine /> Invoices
                    </a>
                    <a href="#" className="link hover:bg-primary-dark">
                        <RiPieChartLine /> Reports
                    </a>
                </nav>
                <div className="bg-primary-dark text-white p-4 rounded-xl">
                    <p className="text-gray-400 font-light">Having troubles?</p>
                    <a href="#">Contact us</a>
                </div>
            </div>
        </div>
    );
};
