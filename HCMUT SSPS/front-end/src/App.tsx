import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ChoosePrinter from "./pages/ChoosePrinter/ChoosePrinter";
import Configurations from "./pages/Configurations/Configurations";
import PrintingComplete from "./pages/PrintingComplete/PrintingComplete";
import UserLog from "./pages/UserLog/UserLog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/ChoosePrinter" element={<ChoosePrinter />} />
                    <Route path="/Configurations" element={<Configurations />} />
                    <Route path="/PrintingComplete" element={<PrintingComplete />} />
                    <Route path="/UserLog" element={<UserLog />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
