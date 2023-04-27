import { useState } from "react";
import { RiMore2Fill, RiCloseLine } from "react-icons/ri";

import { Header, Sidebar, CardsOverViewSection } from "./components";

const App = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => setShowMenu(!showMenu);

    return (
        <div className="grid lg:grid-cols-6 xl:grid-cols-6 min-h-screen">
            <Sidebar showMenu={showMenu} />
            <main className="lg:col-span-4 xl:col-span-5 bg-gray-100 p-8">
                <Header />
                <CardsOverViewSection />
            </main>
            {/* Btn movil */}
            <button
                onClick={handleShowMenu}
                className="fixed bottom-8 right-4 p-2 bg-primary-light rounded-full text-gray-200 text-xl lg:hidden z-40"
            >
                {showMenu ? <RiCloseLine /> : <RiMore2Fill />}
            </button>
        </div>
    );
};

export default App;
