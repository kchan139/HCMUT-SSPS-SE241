import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg"; // Path to the SVG

function Home() {
    return (
        <div>
            <Navbar property="Registered User"/>
            <div className="background">
                <img
                    src={BackgroundSVG}
                    alt="Background"
                    className="background-image"
                />
                {/* <div className="content">
                    <h1 className="title">Tải tài liệu</h1>
                    <div className="upload-section">
                        <button className="upload-button">
                            <img
                                src="../../assets/FilePlus.svg"
                                alt="File Icon"
                                className="file-icon"
                            />
                            <span>Chọn tệp từ thiết bị</span>
                        </button>
                        <p className="drag-and-drop-text">
                            Hoặc kéo thả tệp của bạn vào đây
                        </p>
                    </div>
                </div> */}
            </div>
            <Footer />
        </div>
    );
}


export default Home;
