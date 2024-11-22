import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg";
import "./userLog.css"

function UserLog(){
    return(
        <div>
            <Navbar property="Registered User"/>
            <div className="background">
                <img
                    src={BackgroundSVG}
                    alt="Background"
                    className="background-image"
                />{
                    
                }
            </div>
            <Footer />
        </div>

    )
}

export default UserLog