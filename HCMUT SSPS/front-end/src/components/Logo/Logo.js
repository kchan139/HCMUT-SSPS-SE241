import PropTypes from "prop-types";
import React from "react";
import Logobachkhoatoi2 from "./01_logobachkhoatoi 2.svg";
import "./Logo.css";

export const Logo = ({ property1, className }) => {
    return (
        <div className={`logo ${className}`}>
            <div className="frame">
                <img
                    className="element-logobachkhoatoi"
                    alt="Element logobachkhoatoi"
                    src={Logobachkhoatoi2}
                />

                <div className="text-wrapper">SPSS</div>
            </div>
        </div>
    );
};

Logo.propTypes = {
    property1: PropTypes.oneOf(["default"]),
};
