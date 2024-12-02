import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg"; // Path to the SVG
import "./configurations.css"
import { Select, SelectItem } from "primitives"
import { ButtonGroup, Navigation } from "primitives";
import { Button } from "primitives";
import { InputField } from "primitives";
import { useNavigate } from "react-router-dom";

const record = {
    Name: "Nguyen Van Teo",
    ID: "2252623",
    Email: "TeoVanNg@gmail.com",
    Faculty: "Computer Science",
    Code: "MF125241242",
    Area: "A4 - 402",
    Time: "32 - 11 - 2024"
}

function NavigationButtons(){
    const navigate = useNavigate();
    return(
        <ButtonGroup style={{marginLeft: "90px", marginTop: "30px"}}>
            <Button onPress={() => navigate("/")} variant="subtle">Quay lại</Button>
            <Button onPress={() => navigate("/PrintingComplete")} variant="primary">Tiếp tục</Button>
        </ButtonGroup>
    )
}

function Configurations() {
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
