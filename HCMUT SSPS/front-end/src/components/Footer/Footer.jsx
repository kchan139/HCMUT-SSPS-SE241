import React from "react";
import PropTypes from "prop-types";
import { Logo } from "../Logo/Logo";
import GithubIcon from "./Github.svg";
import PhoneIcon from "./Phone.svg";
import MailIcon from "./Mail.svg"
import "./Footer.css";

export const Footer = ({ className }) => {
    return (
        <footer className={`footer ${className}`}>
            <div className="content">
                {/* Pane Left */}
                <div className="pane-left">
                    <Logo className="footer-logo" />

                    <div className="frame-7">
                        <p className="footer-text">© Dự án SSPS 2024. Bản quyền thuộc về nhóm CC02-07.</p>
                        <p className="footer-text">
                            Quyền riêng tư — Điều khoản sử dụng
                        </p>
                        <div className="frame-icon">
                            <a href="https://github.com" className="github-link">
                                <img
                                    src={GithubIcon}
                                    alt="GitHub"
                                    className="icon"
                                />
                            </a>
                            <p className="footer-text">GitHub</p>
                        </div>
                    </div>
                </div>

                {/* Pane Right */}
                <div className="pane-right">
                    {/* First Box Links */}
                    <div className="box-links">
                        <div className="header-links">
                            <h4 className="sub-title">Thông tin</h4>
                        </div>
                        <div className="body-links-left">
                            <p className="link">Trường Đại học Bách khoa - ĐHQG TP.HCM</p>
                            <p className="link">Công nghệ phần mềm - CO3001 - HK241</p>
                            <p className="link">GVHD: Trương Thị Thái Minh</p>
                        </div>
                    </div>

                    {/* Second Box Links */}
                    <div className="box-links">
                        <div className="header-links">
                            <h4 className="sub-title">Liên hệ</h4>
                        </div>
                        <div className="body-links-right">
                            <p className="link">268 Lý Thường Kiệt, phường 14, quận 10, TP.HCM</p>
                            <div className="frame-icon">
                                <img
                                    src={PhoneIcon}
                                    alt="Phone"
                                    className="icon"
                                />
                                <p className="footer-text">*insert fake phone number*</p>
                            </div>
                            <div className="frame-icon">
                                <img
                                    src={MailIcon}
                                    alt="Mail"
                                    className="icon"
                                />
                                <p className="footer-text">ssps.241@hcmut.edu.vn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
};
