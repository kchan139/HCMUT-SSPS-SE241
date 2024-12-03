import React, { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg";
import "./Manage_Printer.css";
import { IconPrinter } from "icons";

const Manage_Printer = () => {

  // Initial data for the printers (Should use useEffect to set the initial data based on backend data)
  const [printers, setPrinters] = useState([
    { id: 1, label: "A4 - 402: Printer 1" },
    { id: 2, label: "A3 - 403: Printer 2" },
    { id: 3, label: "A4 - 404: Printer 3" },
  ]);

  const [selectedPrinters, setSelectedPrinters] = useState([]);
  const [newPrinter, setNewPrinter] = useState("");

  //Modify the selectedPrinters whichs contains the checked Printer id
  const togglePrinterSelection = (id) => {
    if (selectedPrinters.includes(id)) {
      setSelectedPrinters(selectedPrinters.filter((printerId) => printerId !== id));
    } else {
      setSelectedPrinters([...selectedPrinters, id]);
    }
  };

  // Add a new Printer in the newPrinter state to the printers state
  const addPrinter = () => {
    if (newPrinter.trim()) {
      setPrinters([
        ...printers,
        { id: printers.length + 1, label: newPrinter },
      ]);
      setNewPrinter(""); // Clear the input field after adding
    }
  };

  return (
    <div>
      <Navbar property="Admin" />
      <div
        style={{
          backgroundImage: `url(${BackgroundSVG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          paddingBottom: "50px"
        }}
      >
        <h1 style={{ color: "#fff", marginBottom: "30px", marginTop: "50px", fontSize: "50px" }}>
          Quản lý máy in
        </h1>

        {/* Add Printer Section */}
        <div className="add-printer-section">
        <input
            type="text"
            placeholder="Enter printer information"
            value={newPrinter}
            onChange={(e) => setNewPrinter(e.target.value)}
            className="add-printer-input"
        />
        <button onClick={addPrinter} className="add-printer-button">
            Add Printer
        </button>
        </div>

        <div className="container">
          {printers.map((printer) => (
            <div className="printer-card" key={printer.id}>
              <div className="printer-info">
                <IconPrinter size="32" className="icon-black" />
                <span>{printer.label}</span>
              </div>
              <input
                type="checkbox"
                checked={selectedPrinters.includes(printer.id)}
                onChange={() => togglePrinterSelection(printer.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Manage_Printer;
