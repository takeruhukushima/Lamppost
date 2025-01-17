// src/components/Header/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link to="/" className={styles.logoLink}>Lamppost</Link>
        </h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {/* 他のナビゲーションリンク */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
