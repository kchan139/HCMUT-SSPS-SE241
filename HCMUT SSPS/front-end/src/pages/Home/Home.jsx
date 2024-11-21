// import React from "react";
// import { Navbar } from "../../components/Navbar/Navbar";
// import { Footer } from "../../components/Footer/Footer";
// import BackgroundSVG from "../../assets/background.svg"; // Path to the SVG
// import "./home.css"

// function Home() {
//     return (
//         <div className="home">
//             <div className="div-2">
//                 <Footer />
//                 <Navbar property1="Registered User"/>
//                 <div className="frame-3">
//                     <div className="text-wrapper-2">Tải tài liệu</div>

//                     <div className="frame-wrapper">
//                         <div className="frame-4">
//                             <div className="button-4">
//                                 <FilePlus className="file-plus" />
//                                 <p className="button-5">Chọn tệp từ thiết bị</p>
//                             </div>

//                             <p className="text-wrapper-3">Hoặc kéo thả tệp của bạn vào đây</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// export default Home;



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
