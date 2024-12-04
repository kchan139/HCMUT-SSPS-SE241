import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg";
import "./Manage_Printer.css";
import { IconPrinter } from "icons";

const Manage_Printer = () => {
  const [printers, setPrinters] = useState([]);
  const [selectedPrinters, setSelectedPrinters] = useState([]);
  const [newPrinter, setNewPrinter] = useState("");

  useEffect(() => {
    // Fetch printers from the backend
    axios
      .get("http://127.0.0.1:5000/api/printers-admin")
      .then((response) => {
        setPrinters(response.data);
      })
      .catch((error) => {
        console.error("Error fetching printers:", error);
      });
  }, []);

  const togglePrinterStatus = (id, currentStatus) => {
    const updatedStatus = currentStatus === "Available" ? "Unavailable" : "Available";

    axios
      .put(`http://127.0.0.1:5000/api/printers/${id}`, { status: updatedStatus })
      .then((response) => {
        setPrinters((prevPrinters) =>
          prevPrinters.map((printer) =>
            printer.id === id ? { ...printer, status: updatedStatus } : printer
          )
        );
      })
      .catch((error) => {
        console.error("Error updating printer status:", error);
      });
  };

  const addPrinter = () => {
    if (newPrinter.trim()) {
      const newPrinterData = { name: newPrinter, status: "Available" };
      axios
        .post("http://127.0.0.1:5000/api/printers", newPrinterData)
        .then((response) => {
          setPrinters((prevPrinters) => [...prevPrinters, response.data]);
          setNewPrinter("");
        })
        .catch((error) => {
          console.error("Error adding new printer:", error);
        });
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
          paddingBottom: "50px",
        }}
      >
        <h1
          style={{
            color: "#fff",
            marginBottom: "30px",
            marginTop: "50px",
            fontSize: "50px",
          }}
        >
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
                <span>
                  {printer.name} - {printer.status}
                </span>
              </div>
              <input
                type="checkbox"
                checked={printer.status === "Available"}
                onChange={() => togglePrinterStatus(printer.id, printer.status)}
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
