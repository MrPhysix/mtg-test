import React from 'react';
import styles from './header.module.css';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import Watch from '../Watch/Watch';
import { logoUrl } from '../../utils/config';

function Header() {
  return (
    <header className={styles.header}>
      <LangSwitcher />
      <img className={styles.logo} src={logoUrl} alt="logo" />
      <Watch />
    </header>
  );
}

export default Header;
