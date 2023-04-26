import { useState } from "react";
import { RiMore2Fill, RiCloseLine } from "react-icons/ri";

import { Sidebar } from "./components";

const App = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => setShowMenu(!showMenu);

    return (
        <div className="grid grid-cols-6 min-h-screen">
            <Sidebar showMenu={showMenu} />
            <main>Content</main>
            {/* Btn movil */}

            <button
                onClick={handleShowMenu}
                className="fixed bottom-8 right-4 p-2 bg-primary-light rounded-full text-gray-200 text-xl lg:hidden"
            >
                {showMenu ? <RiCloseLine /> : <RiMore2Fill />}
            </button>
        </div>
    );
};

export default App;
