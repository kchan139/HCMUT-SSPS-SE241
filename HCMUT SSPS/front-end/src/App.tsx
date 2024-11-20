import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"

function App() {
    return (
        <div>
            <Navbar property="Admin" />
            <div className="content">
                {/* Page content goes here */}
            </div>
            <Footer />
        </div>
    );
}

export default App;
