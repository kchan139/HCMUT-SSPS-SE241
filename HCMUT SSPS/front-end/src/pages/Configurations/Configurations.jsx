import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg"; // Path to the SVG
import "./configurations.css"
import { Select, SelectItem } from "primitives"
import { ButtonGroup, Navigation } from "primitives";
import { Button } from "primitives";
import { InputField } from "primitives";

function Configurations() {
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
                        <div className="border">
                            <div className="header">In tài liệu</div>
                            <div className="line">In hai mặt
                                <select className="box" style={{marginLeft: "99px"}}>
                                    <option value="Yes">Có</option>
                                    <option value="No">Không</option>
                                </select>
                            </div><br />
                            <div className="line">Số bản sao<input className="box" type="number" min="1" defaultValue={1} style={{marginLeft: "85px", width: "100px"}}/></div><br />
                            <div className="line">Loại giấy
                                <select className="box" style={{marginLeft: "105px"}}>
                                    <option value="Letter">Letter</option>
                                    <option value="Tabloid">Tabloid</option>
                                    <option value="A3">A3</option>
                                    <option value="A4" selected>A4</option>
                                    <option value="A5">A5</option>
                                </select>
                            </div><br />
                            <div className="line">Hướng in
                                <select className="box" style={{marginLeft: "105px"}}>
                                    <option value="Vertical" selected>Dọc</option>
                                    <option value="Horizontal">Ngang</option>
                                </select>
                            </div><br />
                            <div className="line">Tỉ lệ in
                                <input className="box" type="number" min="1" max="1000" defaultValue={100} style={{marginLeft: "127px"}}/>
                                <span class="input-group-text">%</span>    
                            </div><br />

                            <div className="line" style={{fontSize: "20px", marginTop: "10px", marginBottom: "10px"}}><b>Thông tin sinh viên</b></div>
                            <div className="line">Họ và tên: </div>
                            <div className="line">Mã số sinh viên: </div>
                            <div className="line">Email: </div>
                            <div className="line">Khoa: </div>

                            <ButtonGroup style={{marginLeft: "90px", marginTop: "30px"}}>
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

export default Configurations;
