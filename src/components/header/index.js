import React from 'react';
import styles from './header.module.css';
import logo from './../../assets/logo_v1.png';

const Header = props => (
  <header className={styles.header}>
    <div className={styles.headerCorner}>
      <button onClick={props.onToggleSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44px"
          height="44px"
          viewBox="0 0 24 24"
          fill="#3155DC"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>
    </div>
    <div className={styles.headerLockup}>
      <img src={logo} width="40" />
      <span className={styles.title}>Vault</span>
    </div>
  </header>
);

export default Header;