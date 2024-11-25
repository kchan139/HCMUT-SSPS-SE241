import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home";
import ChoosePrinter from "./pages/ChoosePrinter/ChoosePrinter";
import Configurations from "./pages/Configurations/Configurations";
import UserLog from "./pages/UserLog/UserLog";

function App() {
    return (
        <div>
            {/* <Configurations/> */}
            {/* <ChoosePrinter /> */}
            {/* <Home/> */}
            <Login/>
        </div>
    );
}

export default App;
