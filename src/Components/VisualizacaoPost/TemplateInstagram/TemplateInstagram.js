import React from 'react';
import classnames from 'classnames';
import styles from '../../../Styles/geral.module.css';
import stylesTemplateInstagram from '../TemplateInstagram/TemplateInstagram.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const TemplateInstagram = () => {
  return (
    <div
      className={classnames(
        styles.containerBorder,
        stylesTemplateInstagram.gridArea,
      )}
    >
      <img src="" alt="" />
      <span>Anselmo Carlos</span>

      {/* imagem de upload */}
      {/* <img src={dados.image} alt="" /> */}

      {/* icons curtir/comentar/salvar */}
      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
    </div>
  );
};

export default TemplateInstagram;
