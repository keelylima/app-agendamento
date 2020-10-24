import React from 'react';
import stylesFooter from '../Footer/Footer.module.css';

import { GlobalContext } from '../GlobalContext/GlobalContext';

const Footer = () => {
  const global = React.useContext(GlobalContext);
  console.log(global.btnState);
  return (
    <footer className={stylesFooter.footer}>
      <button>Cancelar</button>
      <button>Salvar rascunho</button>
      <button disabled={!global.btnState}>Agendar</button>
    </footer>
  );
};

export default Footer;
