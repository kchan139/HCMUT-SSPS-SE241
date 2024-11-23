import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg"; // Path to the SVG
import "./userLog.css"
import {
	Pagination,
	PaginationPrevious,
	PaginationNext,
	PaginationList,
	PaginationPage,
	PaginationGap,
} from "primitives";
import { IconSearch } from "icons";
import { Button } from "primitives";

function UserLog() {
    return (
        <div>
            <Navbar property="Registered User"/>
            <div className="background">
                <img
                    src={BackgroundSVG}
                    alt="Background"
                    className="background-image"
                />{
                    <div className="content">
                        
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
}

export default UserLog;
