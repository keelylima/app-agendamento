import React from 'react';
import Logo from '../../Assets/logo.png';
import iconUser from '../../Assets/icon-user.svg';

import styles from '../Header/Header.module.css';

const Header = () => {
  return (
    <header className={styles.bg}>
      <div className={styles.containerFlex}>
        <img src={Logo} alt="Logo da MLabs" />
        <div className={styles.containerUser}>
          <img src={iconUser} alt="Ícone de usuário" />
          <span>Anselmo Carlos</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
