import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Button from '../Button';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ul className={styles.buttonList}>
        <li>
          <Button label='users' />
        </li>
        <li>
          <Button label='sign up' />
        </li>
      </ul>
    </header>
  );
};

export default Header;
