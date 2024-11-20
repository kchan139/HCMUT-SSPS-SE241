import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo/Logo";
import "./Navbar.css";

export const Navbar = ({ property1, className }) => {
    return (
        <div className={`navbar ${property1} ${className}`}>
            <div className="navbar-content">
                {["admin", "guest", "registered-user"].includes(property1) && (
                    <>
                        <div className="group">
                            <div className="links">
                                <Logo
                                    className="logo-instance"
                                    elementLogobachkhoatoi={
                                        property1 === "guest"
                                            ? "01-logobachkhoatoi-2.png"
                                            : property1 === "admin"
                                                ? "01-logobachkhoatoi-2-2.png"
                                                : "image.png"
                                    }
                                    property1="default"
                                    text="SPSS"
                                />

                                {["admin", "registered-user"].includes(property1) && (
                                    <>
                                        <button className="button">
                                            <button className="text-wrapper">Trang chủ</button>
                                        </button>

                                        <button className="button">
                                            <button className="text-wrapper">Lịch sử</button>
                                        </button>
                                    </>
                                )}

                                {property1 === "admin" && (
                                    <>
                                        <button className="button">
                                            <button className="text-wrapper">Thống kê</button>
                                        </button>

                                        <button className="button">
                                            <button className="text-wrapper">Quản lý</button>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="button-wrapper">
                            <div className="div-wrapper">
                                <div className="div">
                                    {["admin", "registered-user"].includes(property1) && (
                                        <>Đăng xuất</>
                                    )}

                                    {property1 === "guest" && <>Đăng nhập</>}
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {property1 === "CAS" && (
                    <div className="links-wrapper">
                        <div className="logo-wrapper">
                            <Logo
                                className="instance-node"
                                divClassName="logo-2"
                                elementLogobachkhoatoi="01-logobachkhoatoi-2-3.png"
                                property1="default"
                                text="Central Authentication Service"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

Navbar.propTypes = {
    property1: PropTypes.oneOf(["CAS", "registered-user", "admin", "guest"]),
};
