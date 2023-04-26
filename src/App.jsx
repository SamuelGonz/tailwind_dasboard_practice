import { Sidebar } from "./components";

const App = () => {
    return (
        <div className="grid grid-cols-6 min-h-screen">
            <Sidebar />
            <main>Content</main>
        </div>
    );
};

export default App;
