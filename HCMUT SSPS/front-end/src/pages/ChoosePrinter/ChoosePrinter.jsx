import React, { useState, useEffect } from 'react';
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg";
import "./choosePrinter.css";
import { IconPrinter } from "icons";
import { ButtonGroup, Navigation } from "primitives";
import { Button } from "primitives";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NavigationButtons(){
    const navigate = useNavigate();
    return(
        <ButtonGroup align="justify">
            <Button onPress={() => navigate("/Home")} variant="subtle">Quay lại</Button>
            <Button onPress={() => navigate("/Configurations")} variant="primary">Tiếp tục</Button>
        </ButtonGroup>
    )
}

function ChoosePrinter(){
    // State to hold the printers data
    const [printers, setPrinters] = useState([]);
    
    // Fetch printers when the component mounts
    useEffect(() => {
        // Fetch data from Flask backend
        axios.get("http://127.0.0.1:5000/api/printers")
            .then(response => {
                // Set the printers data to state
                setPrinters(response.data);
            })
            .catch(error => {
                console.error("Error fetching printers:", error);
            });
    }, []);

    return (
        <div>
            <Navbar property="Registered User" />
            <div className="background_choosePrinter">
                <img
                    src={BackgroundSVG}
                    alt="Background_choosePrinter"
                    className="background-image_choosePrinter"
                />
                <div className="content_choosePrinter">
                    <div className="border_choosePrinter">
                        <div className="header_choosePrinter">Máy in khả dụng</div>

                        {/* Dynamically render printers */}
                        {printers.map(printer => (
                            <div key={printer.id} className="bar_choosePrinter">
                                <IconPrinter size="32" className="printerIcon_choosePrinter" />
                                <span className="line_choosePrinter">
                                    {printer.name}
                                </span>
                                <input type="radio" name="printer" className="radioButton_choosePrinter" />
                            </div>
                        ))}

                        <NavigationButtons />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ChoosePrinter