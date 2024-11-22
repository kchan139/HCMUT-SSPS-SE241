import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg";
import "./choosePrinter.css";
import { IconPrinter } from "icons";
import { ButtonGroup, Navigation } from "primitives";
import { Button } from "primitives";

function ChoosePrinter(){
    return(
        <div>
            <Navbar property="Registered User" />
            <div className="background">
                <img
                    src={BackgroundSVG}
                    alt="Background"
                    className="background-image"
                />{
                    <div className="content">
                        <div className="border">
                            <div className="header">Máy in khả dụng</div>
                            <div className="bar"><IconPrinter size="32" className="printerIcon"/>
                                <span className="line">A4 - 402: Printer 1</span>
                                <input type="radio" name="printer" className="radioButton"/>
                            </div>
                            <div className="bar"><IconPrinter size="32" className="printerIcon"/>
                                <text className="line">A4 - 402: Printer 2</text>
                                <input type="radio" name="printer" className="radioButton"/>
                            </div>
                            <div className="bar"><IconPrinter size="32" className="printerIcon"/>
                                <text className="line">A4 - 402: Printer 3</text>
                                <input type="radio" name="printer" className="radioButton"/>
                            </div>
                            <div className="bar"><IconPrinter size="32" className="printerIcon"/>
                                <text className="line">A4 - 402: Printer 4</text>
                                <input type="radio" name="printer" className="radioButton"/>
                            </div>
                            <ButtonGroup align="justify">
                                <Button onPress={() => {}} variant="subtle">Quay lại</Button>
                                <Button onPress={() => {}} variant="primary">Tiếp tục</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default ChoosePrinter