import React from 'react';
import './App.css';
import DataPublicacao from './Components/DataPublicacao/DataPublicacao';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import RedesSociais from './Components/RedesSociais/RedesSociais';
import TextoPost from './Components/TextoPost/TextoPost';
import UploadDeImagem from './Components/UploadDeImagem/UploadDeImagem';
import DisplayImage from './Components/VisualizacaoPost/DisplayImage/DisplayImage';
import VisualizacaoPost from './Components/VisualizacaoPost/VisualizacaoPost';
import { GlobalStorage } from './Components/GlobalContext/GlobalContext';
import TemplateInstagram from './Components/VisualizacaoPost/TemplateInstagram/TemplateInstagram';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="bg containerGrid">
      <Header></Header>
      {/* <Intro></Intro> */}
      <RedesSociais></RedesSociais>
      <DataPublicacao></DataPublicacao>
      <TextoPost></TextoPost>
      <GlobalStorage>
        <UploadDeImagem></UploadDeImagem>
        <VisualizacaoPost></VisualizacaoPost>
      </GlobalStorage>
      <Footer></Footer>
    </div>
  );
}

export default App;
