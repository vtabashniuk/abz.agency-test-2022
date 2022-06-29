import React from "react";
import { NavLink } from "react-router-dom";

const ButtonLink = ({ label }) => {
    return <NavLink to={`/${label}`}>{label}</NavLink>;
}

export default ButtonLink;