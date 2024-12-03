import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg";
import { IconFilePlus } from "icons"
import { Button } from "primitives"
import "./adminLogin.css";
import { useNavigate } from "react-router-dom";

function NavigationButtons(){
    const navigate = useNavigate();
    return(
        <Button onPress={() => navigate("/Admin_history")}
                variant="primary"
                state="default"
                size="medium"
        >Đăng nhập
        </Button>
    )
}

function AdminLogin() {
    return (
        <div>
            <Navbar property="Admin" />

            <div className="login-section_AdminLogin">
                <div className="login-content_AdminLogin">
                    <div className="left-pane_AdminLogin">
                        <form className="login-form_AdminLogin">
                            {/* Caption */}

                            <div className="form-content_AdminLogin">
                                {/* Username Field */}
                                <div className="form-group_AdminLogin">
                                    <label htmlFor="username" className="form-label_AdminLogin">
                                        Tên đăng nhập
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        className="form-input_AdminLogin"
                                    />
                                </div>

                                {/* Password Field */}
                                <div className="form-group_AdminLogin">
                                    <label htmlFor="password" className="form-label_AdminLogin">
                                        Mật khẩu
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        className="form-input_AdminLogin"
                                    />
                                </div>

                                {/* Remember Me Checkbox */}
                                <div className="form-group_AdminLogin">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        className="form-checkbox_AdminLogin"
                                    />
                                    <label htmlFor="remember-me" className="form-checkbox-label_AdminLogin">
                                        Ghi nhớ đăng nhập
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <div className="form-group_AdminLogin">
                                    <NavigationButtons/>
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

export default AdminLogin;