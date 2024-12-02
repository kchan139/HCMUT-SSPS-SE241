import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg";
import { IconFilePlus } from "icons"
import { Button } from "primitives"
import "./login.css";

function Home() {
    return (
        <div>
            <Navbar property="Registered User" />

            <div className="login-section">
                <div className="login-content">
                    <div className="left-pane">
                        <form className="login-form">
                            {/* Caption */}
                            <p className="form-caption">
                                Bạn là quản trị viên? <u>Đăng nhập dưới quyền quản trị để tiếp tục.</u>
                            </p>

                            <div className="form-content">
                                {/* Username Field */}
                                <div className="form-group">
                                    <label htmlFor="username" className="form-label">
                                        Tên đăng nhập
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        className="form-input"
                                    />
                                </div>

                                {/* Password Field */}
                                <div className="form-group">
                                    <label htmlFor="password" className="form-label">
                                        Mật khẩu
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        className="form-input"
                                    />
                                </div>

                                {/* Remember Me Checkbox */}
                                <div className="form-group">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        className="form-checkbox"
                                    />
                                    <label htmlFor="remember-me" className="form-checkbox-label">
                                        Ghi nhớ đăng nhập
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <div className="form-group">
                                    <Button
                                        onPress={() => alert("Đăng nhập thành công!")}
                                        variant="primary"
                                        state="default"
                                        size="medium"
                                        
                                    >
                                        Đăng nhập
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;