import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Hist_Admin from './pages/Printing_History(Admin)/hist_Admin';
import Manage_Printer from './pages/Manage_Printer/Manage_Printer';
import Buy_Page from './pages/Buy_Page/Buy_Page';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history-admin" element={<Hist_Admin />} />
                <Route path="/manage-printer" element={<Manage_Printer />} />
                <Route path="/buy" element={<Buy_Page />} />
            </Routes>
        </Router>
    );
}

export default App;
