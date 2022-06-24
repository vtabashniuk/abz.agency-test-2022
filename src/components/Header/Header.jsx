import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import ButtonLink from '../ButtonLink';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ul className={styles.buttonList}>
        <li>
          <ButtonLink label='users' />
        </li>
        <li>
          <ButtonLink label='sign up' />
        </li>
      </ul>
    </header>
  );
};

export default Header;
