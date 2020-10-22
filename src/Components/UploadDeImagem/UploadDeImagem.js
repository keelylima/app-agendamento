import React from 'react';
import classnames from 'classnames';
import styles from '../../Styles/geral.module.css';
import stylesUploadImagens from '../UploadDeImagem/UploadDeImagem.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

import { GlobalContext } from '../GlobalContext/GlobalContext';

const UploadDeImagem = () => {
  const global = React.useContext(GlobalContext);

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
        <label htmlFor="imageUpload">Pesquisar imagens</label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(event) => global.handleChange(event)}
        />
      </div>
    </div>
  );
};

export default UploadDeImagem;
