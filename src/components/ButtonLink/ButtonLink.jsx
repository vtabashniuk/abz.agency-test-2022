import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes.js';
import labelFormatting from '../../utils/labelFormatting.js';

const ButtonLink = ({ label }) => {
  return (
    <NavLink to={routes[label]} className="buttonLink">
      {labelFormatting(label)}
    </NavLink>
  );
};

export default ButtonLink;
