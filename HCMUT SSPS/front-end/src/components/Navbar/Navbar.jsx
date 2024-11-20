import React from "react";
import PropTypes from "prop-types";
import { Logo } from "../Logo/Logo";
import { Button } from "primitives"; // Replace with your Button import
import "./Navbar.css";

export const Navbar = ({ property }) => {
    return (
        <div className="navbar">
            {/* Navbar Content */}
            <div className="navbar-content">
                {/* Links Section */}
                <div className="links">
                    {/* Logo */}
                    <Logo />

                    {/* Buttons based on property */}
                    {property === "Admin" && (
                        <>
                            <Button className="navbar-button" onPress={() => alert("Trang chủ clicked!")}>
                                Trang chủ
                            </Button>
                            <Button className="navbar-button" onPress={() => alert("Lịch sử clicked!")}>
                                Lịch sử
                            </Button>
                            <Button className="navbar-button" onPress={() => alert("Thống kê clicked!")}>
                                Thống kê
                            </Button>
                            <Button className="navbar-button" onPress={() => alert("Quản lý clicked!")}>
                                Quản lý
                            </Button>
                        </>
                    )}
                    {property === "Registered User" && (
                        <>
                            <Button className="navbar-button" onPress={() => alert("Trang chủ clicked!")}>
                                Trang chủ
                            </Button>
                            <Button className="navbar-button" onPress={() => alert("Lịch sử clicked!")}>
                                Lịch sử
                            </Button>
                        </>
                    )}
                    {property === "Guest" && (
                        <>
                            <Button className="navbar-button" onPress={() => alert("Trang chủ clicked!")}>
                                Trang chủ
                            </Button>
                        </>
                    )}
                </div>

                {/* Additional Links */}
                <div className="links">
                    {property === "Guest" ? (
                        <Button className="navbar-button" onPress={() => alert("Đăng nhập clicked!")}>
                            Đăng nhập
                        </Button>
                    ) : (
                        <Button className="navbar-button" onPress={() => alert("Đăng xuất clicked!")}>
                            Đăng xuất
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

// PropTypes validation
Navbar.propTypes = {
    property: PropTypes.oneOf(["Admin", "Registered User", "Guest"]).isRequired,
};
