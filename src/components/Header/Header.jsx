import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import ButtonLink from '../ButtonLink';

const Header = () => {
  return (
    <header className="header">
      <NavLink to={'/'}>
        <Logo />
      </NavLink>
      <ul>
        <li>
          <ButtonLink label="users" />
        </li>
        <li>
          <ButtonLink label="sign up" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
