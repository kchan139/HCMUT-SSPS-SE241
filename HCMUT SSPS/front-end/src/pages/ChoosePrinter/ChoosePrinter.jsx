import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg";
import "./choosePrinter.css";
import { IconPrinter } from "icons";
import { ButtonGroup, Navigation } from "primitives";
import { Button } from "primitives";
import { useNavigate } from "react-router-dom";

function NavigationButtons(){
    const navigate = useNavigate();
    return(
        <ButtonGroup align="justify">
            <Button onPress={() => {}} variant="subtle">Quay lại</Button>
            <Button onPress={() => navigate("/Configurations")} variant="primary">Tiếp tục</Button>
        </ButtonGroup>
    )
}

function ChoosePrinter(){

    return(
        <div>
            <Navbar property="Registered User" />
            <div className="background_choosePrinter">
                <img
                    src={BackgroundSVG}
                    alt="Background_choosePrinter"
                    className="background-image_choosePrinter"
                />{
                    <div className="content_choosePrinter">
                        <div className="border_choosePrinter">
                            <div className="header_choosePrinter">Máy in khả dụng</div>
                            <div className="bar_choosePrinter"><IconPrinter size="32" className="printerIcon_choosePrinter"/>
                                <span className="line_choosePrinter">A4 - 402: Printer 1</span>
                                <input type="radio" name="printer" className="radioButton_choosePrinter"/>
                            </div>
                            <div className="bar_choosePrinter"><IconPrinter size="32" className="printerIcon_choosePrinter"/>
                                <text className="line_choosePrinter">A4 - 402: Printer 2</text>
                                <input type="radio" name="printer" className="radioButton_choosePrinter"/>
                            </div>
                            <div className="bar_choosePrinter"><IconPrinter size="32" className="printerIcon_choosePrinter"/>
                                <text className="line_choosePrinter">A4 - 402: Printer 3</text>
                                <input type="radio" name="printer" className="radioButton_choosePrinter"/>
                            </div>
                            <div className="bar_choosePrinter"><IconPrinter size="32" className="printerIcon_choosePrinter"/>
                                <text className="line_choosePrinter">A4 - 402: Printer 4</text>
                                <input type="radio" name="printer" className="radioButton_choosePrinter"/>
                            </div>
                            
                            <NavigationButtons/>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default ChoosePrinter