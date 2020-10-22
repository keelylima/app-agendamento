import React from 'react';
import classnames from 'classnames';
import styles from '../../../Styles/geral.module.css';
import stylesTemplateInstagram from '../TemplateInstagram/TemplateInstagram.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { GlobalContext } from '../../GlobalContext/GlobalContext';

const TemplateInstagram = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);
  return (
    <div
      className={classnames(
        styles.containerBorder,
        stylesTemplateInstagram.containerInstagram,
      )}
    >
      <div className={stylesTemplateInstagram.containerIcon}>
        <FontAwesomeIcon
          icon={faInstagram}
          className={stylesTemplateInstagram.iconInstagram}
        ></FontAwesomeIcon>
        <span>Anselmo Carlos</span>
      </div>

      {/* imagem de upload */}
      <img src={global.dados.image} alt="" />

      {/* icons curtir/comentar/salvar */}
      <div className={stylesTemplateInstagram.containerIconsInteraction}>
        <div className={stylesTemplateInstagram.iconsInteraction}>
          <FontAwesomeIcon
            icon={faHeart}
            className={stylesTemplateInstagram.heartIcon}
          ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
        </div>
        <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
      </div>
      <p>Aqui vai o texto descritivo desse post</p>
    </div>
  );
};

export default TemplateInstagram;
