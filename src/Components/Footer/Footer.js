import React from 'react';
import stylesFooter from '../Footer/Footer.module.css';

const Footer = () => {
  return (
    <footer className={stylesFooter.footer}>
      <button>Cancelar</button>
      <button>Salvar rascunho</button>
      <button>Agendar</button>
    </footer>
  );
};

export default Footer;
