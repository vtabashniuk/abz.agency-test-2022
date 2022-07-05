import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes.js';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import ButtonLink from '../../components/ButtonLink';

const Header = () => {
  return (
    <div className='headerContainer'>
      <header className="header">
        <NavLink to={routes.home} className="logoLink">
          <Logo />
        </NavLink>
        <ul className="linkBlock">
          <li>
            <ButtonLink label="users" />
          </li>
          <li>
            <ButtonLink label="sign_up" />
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
