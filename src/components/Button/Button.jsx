import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ label }) => {
    return <NavLink to={'/'}>{label}</NavLink>;
}

export default Button;