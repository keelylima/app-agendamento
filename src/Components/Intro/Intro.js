import React from 'react';
import IntroIlustration from '../../Assets/ilustration.svg';

import styles from '../Intro/Intro.module.css';

const Intro = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <img src={IntroIlustration} alt="Ilustração" />
        <button className={styles.btnAgendar}>Agendar post</button>
      </div>
    </div>
  );
};

export default Intro;
