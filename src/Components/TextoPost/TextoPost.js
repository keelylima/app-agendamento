import React from 'react';
import styles from '../../Styles/geral.module.css';
import stylesTextoPost from '../TextoPost/TextoPost.module.css';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinAlt } from '@fortawesome/free-regular-svg-icons';

function TextoPost() {
  return (
    <div
      className={classnames(styles.containerBorder, stylesTextoPost.gridArea)}
    >
      <h3>Texto do post</h3>
      <div className={stylesTextoPost.containerTextPost}>
        <textarea
          name=""
          id=""
          placeholder="Aqui vai o texto descritivo desse post"
          className={stylesTextoPost.textAreaCustom}
        ></textarea>
        <FontAwesomeIcon
          icon={faGrinAlt}
          className={stylesTextoPost.iconSmile}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default TextoPost;
