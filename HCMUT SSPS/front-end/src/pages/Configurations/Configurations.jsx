import React, { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg"; // Path to the SVG
import "./configurations.css"
import { Select, SelectItem } from "primitives"
import { ButtonGroup, Navigation } from "primitives";
import { Button } from "primitives";
import { InputField } from "primitives";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import mammoth from 'mammoth';

let print_info = JSON.parse(localStorage.getItem('print_info'))

const record = {
    Name: "Nguyen Van Teo",
    ID: print_info.MSSV,
    Email: "TeoVanNg@gmail.com",
    Faculty: "Computer Science",
    Code: "MF125241242",
    Area: "A4 - 402",
    Time: "32 - 11 - 2024"
}

function Configurations() {
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();

    function NavigationButtons(){
        return(
            <ButtonGroup style={{marginLeft: "90px", marginTop: "30px"}}>
                <Button onPress={() => navigate("/ChoosePrinter")} variant="subtle">Quay lại</Button>
                <Button onPress={addRecord} variant="primary">Tiếp tục</Button>
            </ButtonGroup>
        )
    }

    const addRecord = () => {
        console.log(print_info.MSSV)
        axios
            .put(`http://127.0.0.1:5000/api/records/${print_info.MSSV}`, print_info)
            .then((response) => {
                console.log(response.data);
                alert('Record added successfully!');
                navigate("/PrintingComplete")
            })
            .catch((error) => {
                console.error('Error adding record:', error);
                alert('Failed to add record.');
            });
    };

    useEffect(() => {
        // Fetch the file preview from the backend
        print_info = JSON.parse(localStorage.getItem('print_info'))
        axios
            .get("http://127.0.0.1:5000/api/get-file", { responseType: "blob" }) // Adjust the endpoint as needed
            .then((response) => {
                const file = response.data;
                const fileType = response.headers["content-type"];
                const fileUrl = URL.createObjectURL(file);
                console.log(file, fileType, fileUrl);
    
                // Check the content type to determine how to handle the preview
                if (fileType.startsWith("image/")) {
                    // For image previews (e.g., PNG for the first page of a PDF or DOCX)
                    setPreview(<img src={fileUrl} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "contain" }} />);
                } else if (fileType === "application/pdf") {
                    // If the backend still returns PDFs for some reason (not expected here)
                    setPreview(<iframe src={fileUrl} style={{ width: "100%", height: "400px" }} title="PDF Preview" />);
                } else {
                    alert("Unsupported file type.");
                }
            })
            .catch((error) => {
                console.error("Error fetching file:", error);
            });
    }, []);
    

    return (
        <div>
            <Navbar property="Registered User"/>
            <div className="background_Configurations">
                <img
                    src={BackgroundSVG}
                    alt="Background_Configurations"
                    className="background-image_Configurations"
                />{
                    <div className="content_Configurations">
                        <div className="border_Configurations">
                            <div className="header_Configurations">In tài liệu</div>
                            <div className="line_Configurations">In hai mặt
                                <select className="box_Configurations" style={{marginLeft: "99px"}}>
                                    <option value="Yes">Có</option>
                                    <option value="No">Không</option>
                                </select>
                            </div><br />
                            <div className="line_Configurations">Số bản sao<input className="box_Configurations" type="number" min="1" defaultValue={1} style={{marginLeft: "88px", width: "100px"}}/></div><br />
                            <div className="line_Configurations">Loại giấy
                                <select className="box_Configurations" style={{marginLeft: "105px"}}>
                                    <option value="Letter">Letter</option>
                                    <option value="Tabloid">Tabloid</option>
                                    <option value="A3">A3</option>
                                    <option value="A4" selected>A4</option>
                                    <option value="A5">A5</option>
                                </select>
                            </div><br />
                            <div className="line_Configurations">Hướng in
                                <select className="box_Configurations" style={{marginLeft: "105px"}}>
                                    <option value="Vertical" selected>Dọc</option>
                                    <option value="Horizontal">Ngang</option>
                                </select>
                            </div><br />
                            <div className="line_Configurations">Tỉ lệ in
                                <input className="box_Configurations" type="number" min="1" max="1000" defaultValue={100} style={{marginLeft: "123px"}}/>
                                <span class="input-group-text">%</span>    
                            </div><br />

                            <div className="line_Configurations" style={{fontSize: "20px", marginTop: "10px", marginBottom: "10px"}}><b>Thông tin sinh viên</b></div>
                            <div className="line_Configurations">Họ và tên: <span style={{marginLeft:"10px"}}>{record.Name}</span></div>
                            <div className="line_Configurations">Mã số sinh viên: <span style={{marginLeft:"10px"}}>{record.ID}</span></div>
                            <div className="line_Configurations">Email: <span style={{marginLeft:"10px"}}>{record.Email}</span></div>
                            <div className="line_Configurations">Khoa: <span style={{marginLeft:"10px"}}>{record.Faculty}</span></div>
                            {preview && <div className="preview-container" style={{ marginTop: "20px" }}>{preview}</div>}
                            <NavigationButtons/>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default Configurations;
