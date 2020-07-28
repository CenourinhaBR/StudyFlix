import React from 'react';
import './global.css';

import Menu from './components/Menu'
import Footer from './components/Footer'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'

import data from './dados_iniciais.json'


aaaa
function App() {
  return (
    <div style={ { backgroundColor: '#141414' } }>
        <Menu />
        <BannerMain 
          videoTitle={data.categorias[0].videos[0].titulo}
          url={data.categorias[0].videos[0].url}
          videoDescription={""}
          
        />
        <Carousel 
          ignoreFirstVideo
          category={data.categorias[0]}
        />

        <Carousel 
          ignoreFirstVideo
          category={data.categorias[1]}
        />

        <Carousel 
          ignoreFirstVideo
          category={data.categorias[2]}
        />

        <Carousel 
          ignoreFirstVideo
          category={data.categorias[3]}
        />

        <Carousel 
          ignoreFirstVideo
          category={data.categorias[4]}
        />

        <Carousel 
          ignoreFirstVideo
          category={data.categorias[5]}
        />

        




        <Footer />
    
    </div>
  );
}

export default App;
