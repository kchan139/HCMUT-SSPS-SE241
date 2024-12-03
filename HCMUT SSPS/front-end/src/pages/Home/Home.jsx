import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg";
import { IconFilePlus } from "icons"
import { Button } from "primitives"
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
    return (
        <div>
            <Navbar property="Registered User" />
            <div className="background">
                <img
                    src={BackgroundSVG}
                    alt="Background"
                    className="background-image"
                />
                <div className="home-frame">
                    <div className="text-wrapper">Tải tài liệu</div>
                    <div className="home-frame-wrapper">
                        <div className="button-div">
                            <Button
                                onPress={() => {}}
                                variant="primary"
                            >
                                <IconFilePlus />
                                Chọn tệp từ thiết bị
                            </Button>
                            <p className="text-wrapper-2">
                                Hoặc kéo thả tệp của bạn vào đây
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;