import React from "react";
import { Logo } from "../Logo/Logo";
import { Button } from "primitives"; // Replace with your actual Button import
import "./Navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            {/* Navbar Content */}
            <div className="navbar-content">
                {/* Group 2 */}
                <div className="group-2">
                    {/* Links Section */}
                    <div className="links">
                        {/* Logo */}
                        <Logo />

                        {/* Buttons */}
                        <Button className="navbar-button" variant="subtle" onPress={() => alert("Trang chủ clicked!")}>
                            Trang chủ
                        </Button>
                        <Button className="navbar-button" variant="subtle" onPress={() => alert("Lịch sử clicked!")}>
                            Lịch sử
                        </Button>
                    </div>
                </div>

                {/* Additional Links Section */}
                <div className="links">
                    <Button className="navbar-button" variant="subtle" onPress={() => alert("Đăng xuất clicked!")}>
                        Đăng xuất
                    </Button>
                </div>
            </div>
        </div>
    );
};
