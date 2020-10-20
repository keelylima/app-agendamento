import React from 'react';
import classnames from 'classnames';
import styles from '../../Styles/geral.module.css';
import stylesUploadImagens from '../UploadDeImagem/UploadDeImagem.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const UploadDeImagem = () => {
  return (
    <div
      className={classnames(
        styles.containerBorder,
        stylesUploadImagens.gridArea,
      )}
    >
      <h3>Upload de imagem</h3>
      <div className={stylesUploadImagens.containerUpload}>
        <FontAwesomeIcon
          icon={faCloudUploadAlt}
          className={stylesUploadImagens.iconUpload}
        ></FontAwesomeIcon>
        <span>Arraste solte uma imagem aqui ou clique no botão abaixo</span>
        <button>Pesquisar imagens</button>
      </div>
    </div>
  );
};

export default UploadDeImagem;
