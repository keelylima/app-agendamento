import React from 'react';
import classnames from 'classnames';
import styles from '../../Styles/geral.module.css';
import stylesUploadImagens from '../UploadDeImagem/UploadDeImagem.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const UploadDeImagem = ({ dadosProps }) => {
  const [dados, setDados] = React.useState(null);

  function handleChange(event) {
    if (event.target.files && event.target.files[0]) {
      console.log('entrou aqui');
      let img = event.target.files[0];
      setDados({ ...dados, image: URL.createObjectURL(img) });
    }
  }

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
          onChange={handleChange}
        />
        {/* mostrar a foto */}
        {dados && <img src={dados.image} />}
      </div>
    </div>
  );
};

export default UploadDeImagem;
