import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg"; // Path to the SVG
import "./printingComplete.css"
import { ButtonGroup } from "primitives"
import { Button } from "primitives"

function PrintingComplete(){
    return(
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
                            <div className="header">Gửi yêu cầu in thành công</div>
                            <div className="line1">Tài liệu in của bạn đang được xử lý, cảm ơn vì đã sử dụng dịch vụ</div>
                            <div className="line2"><b>Thông tin</b></div>
                            <div className="line2">Họ và tên: </div>
                            <div className="line2">Mã số sinh viên: </div>
                            <div className="line2">Email: </div>
                            <div className="line2">Khoa: </div>
                            
                            <div style={{width:"100px", height:"100px"}}></div>
                            <ButtonGroup style={{marginTop: "20px"}}>
                            <Button onPress={() => {}} variant="primary">Trở về trang chủ</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default PrintingComplete