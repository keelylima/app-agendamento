import React from 'react';
import styles from '../../Styles/geral.module.css';
import stylesData from '../DataPublicacao/DataPublicacao.module.css';
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const DataPublicacao = () => {
  return (
    <div className={classnames(styles.containerBorder, stylesData.gridArea)}>
      <h3>Data de publicação</h3>
      <div className={stylesData.containerInputs}>
        <form action="">
          <input type="date" name="" id="" placeholder="DD/MM/AAAA" />
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className={stylesData.iconCalendar}
          ></FontAwesomeIcon>
          <input type="time" name="" id="" placeholder="HH:MM" />
          <FontAwesomeIcon
            icon={faClock}
            className={stylesData.iconClock}
          ></FontAwesomeIcon>
        </form>
      </div>
    </div>
  );
};

export default DataPublicacao;
