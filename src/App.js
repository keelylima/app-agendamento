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

function App() {
  return (
    <div className="bg containerGrid">
      <Header></Header>
      {/* <Intro></Intro> */}
      <RedesSociais></RedesSociais>
      <DataPublicacao></DataPublicacao>
      <TextoPost></TextoPost>
      <UploadDeImagem></UploadDeImagem>
      <VisualizacaoPost></VisualizacaoPost>
      {/* <DisplayImage></DisplayImage> */}
    </div>
  );
}

export default App;
