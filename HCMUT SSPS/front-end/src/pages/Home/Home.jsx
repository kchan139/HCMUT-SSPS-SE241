import React, { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg";
import { IconFilePlus } from "icons";
import { Button } from "primitives";
import { useNavigate } from "react-router-dom";
import "./home.css";

function NavigationButtons() {
    const navigate = useNavigate();
    return (
        <Button onClick={() => navigate("/ChoosePrinter")} variant="primary">
            <IconFilePlus />
            Chọn tệp từ thiết bị
        </Button>
    );
}

function Home() {
    // State to hold the selected file
    const [file, setFile] = useState(null);

    // Handle file selection
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]; // Get the first file selected
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);  // Store the file in state
        } else {
            alert("Please select a valid PDF file.");
        }
    };

    // Handle file upload
    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            // Send the file to the backend (change URL as per your backend endpoint)
            const response = await fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("File uploaded successfully!");
            } else {
                alert("File upload failed.");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Error uploading file.");
        }
    };

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
                            <p className="text-wrapper-2">
                                Hoặc kéo thả tệp của bạn vào đây
                            </p>
                            <button onClick={handleUpload} className="upload-button">
                                Tải lên
                            </button>

                            <NavigationButtons />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
