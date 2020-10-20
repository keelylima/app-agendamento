import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import stylesRedes from '../RedesSociais/RedesSociais.module.css';
import styles from '../../Styles/geral.module.css';

function RedesSociais({ margin }) {
  return (
    <div className={classnames(styles.containerBorder, stylesRedes.gridArea)}>
      <h3>Redes Sociais</h3>
      <ul className={stylesRedes.ListRedesSociais}>
        <li>
          <button className={stylesRedes.btnRedesSociais}>
            <FontAwesomeIcon
              icon={faInstagram}
              className={stylesRedes.containerImg}
            ></FontAwesomeIcon>
          </button>
        </li>
        <li>
          <button className={stylesRedes.btnRedesSociais}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className={stylesRedes.containerImg}
            ></FontAwesomeIcon>
          </button>
        </li>
        <li>
          <button className={stylesRedes.btnRedesSociais}>
            <FontAwesomeIcon
              icon={faYoutube}
              className={stylesRedes.containerImg}
            ></FontAwesomeIcon>
          </button>
        </li>
        <li>
          <button className={stylesRedes.btnRedesSociais}>
            <FontAwesomeIcon
              icon={faPinterest}
              className={stylesRedes.containerImg}
            ></FontAwesomeIcon>
          </button>
        </li>
        <li>
          <button className={stylesRedes.btnRedesSociais}>
            <FontAwesomeIcon
              icon={faTwitter}
              className={stylesRedes.containerImg}
            ></FontAwesomeIcon>
          </button>
        </li>
        <li>
          <button className={stylesRedes.btnRedesSociais}>
            <FontAwesomeIcon
              icon={faFacebookF}
              className={stylesRedes.containerImg}
            ></FontAwesomeIcon>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default RedesSociais;
