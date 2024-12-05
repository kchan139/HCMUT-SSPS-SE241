import React, { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg";
import { IconFilePlus } from "icons";
import { Button } from "primitives";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import "./home.css";

function Home() {
    // State to hold the selected file and allowed extensions
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [allowedExtensions, setAllowedExtensions] = useState([]);
    const [acceptExtensions, setAcceptExtensions] = useState(""); // State for dynamic accept value

    const NavigationButtons = () => {
        const navigate = useNavigate();
        return (
            <Button onClick={handleUpload} variant="primary">
                <IconFilePlus />
                Chọn tệp từ thiết bị
            </Button>
        );
    }

    // Fetch allowed extensions from the backend on component mount
    useEffect(() => {
        const fetchAllowedExtensions = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:5000/api/allowed-extensions");
                setAllowedExtensions(response.data.allowed_extensions);

                // Generate the accept attribute based on allowed extensions
                const extensions = response.data.allowed_extensions
                    .filter(ext => ext.Status === "Allow")
                    .map(ext => `.${ext.Extension}`)
                    .join(",");
                setAcceptExtensions(extensions); // Set the dynamic accept value
            } catch (error) {
                console.error("Error fetching allowed extensions:", error);
                alert("Error fetching allowed extensions.");
            }
        };

        fetchAllowedExtensions();
    }, []);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]; // Get the first file selected
        const fileExtension = selectedFile?.name.split(".").pop()?.toLowerCase();
    
        // Validate if the file extension is allowed
        if (selectedFile && allowedExtensions.some(ext => ext.Extension === fileExtension && ext.Status === "Allow")) {
            setFile(selectedFile);  // Store the file in state
        } else {
            alert("Please select a valid file with one of the allowed extensions.");
            // Reset the input field by clearing the file input
            event.target.value = "";
            // Optionally, reset the file state to null (or set it to an empty string)
            setFile(null); 
        }
    };

    const handleUpload = () => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }
    
        // First, delete the uploads directory
        axios
            .delete("http://127.0.0.1:5000/api/delete-uploads")
            .then((response) => {
                if (response.status === 200) {
                    console.log("Uploads directory deleted successfully.");
    
                    // Now proceed with the file upload
                    const formData = new FormData();
                    formData.append("file", file); // Add the selected file to form data
    
                    axios
                        .post("http://127.0.0.1:5000/upload", formData, {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        })
                        .then((uploadResponse) => {
                            if (uploadResponse.status === 200) {
                                alert("File uploaded successfully!");
                                navigate("/ChoosePrinter");
                            } else {
                                alert("File upload failed.");
                            }
                        })
                        .catch((uploadError) => {
                            console.error("Error uploading file:", uploadError);
                            alert("Error uploading file.");
                        });
                } else {
                    alert("Failed to delete uploads directory.");
                }
            })
            .catch((deleteError) => {
                console.error("Error deleting uploads directory:", deleteError);
                alert("Error deleting uploads directory.");
            });
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
                                Allow file extensions: {acceptExtensions}
                            </p>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="file-input"
                                accept={acceptExtensions}
                            />

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
