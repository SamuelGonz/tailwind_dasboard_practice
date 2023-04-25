export const Sidebar = () => {
    return (
        <div className="bg-primary-dark h-full overflow-y-auto">
            <div className="flex flex-col items-center justify-center p-8 gap-2">
                <img
                    src="https://img.freepik.com/foto-gratis/cintura-arriba-retrato-hombre-guapo-afeitar-serio-mantiene-manos-juntas-vestido-camisa-azul-oscuro-ha-hablado-interlocutor-parado-contra-pared-blanca-freelancer-hombre-seguro-si-mismo_273609-16320.jpg"
                    className="w-16 h-16 object-cover rounded-full"
                />

                <h1 className="text-xl text-white font-medium">Samuel González</h1>
                <p className="bg-primary-light py-1 px-3 rounded-full text-white text-xs">Pro level</p>
            </div>
        </div>
    );
};
