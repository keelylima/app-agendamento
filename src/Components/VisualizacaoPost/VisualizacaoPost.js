import React from 'react';
import classnames from 'classnames';
import styles from '../../Styles/geral.module.css';
import stylesVisualizacaoPost from '../VisualizacaoPost/VisualizacaoPost.module.css';
import TemplateInstagram from './TemplateInstagram/TemplateInstagram';

import PostPreviewPhoto from '../../Assets/post-preview.png';

const VisualizacaoPost = () => {
  return (
    <div
      className={classnames(
        styles.containerBorder,
        stylesVisualizacaoPost.gridArea,
      )}
    >
      <h3>Visualização do post</h3>

      <div className={stylesVisualizacaoPost.containerPreview}>
        <span>
          Aguardando conteúdo. Informe os canais e as mídias desejadas para
          visualização.
        </span>
        {/* {global.dados.image && <img src={global.dados.image} />} */}
      </div>
      <TemplateInstagram></TemplateInstagram>
    </div>
  );
};

export default VisualizacaoPost;
