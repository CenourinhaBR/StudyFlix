import React from 'react';
import '../../global.css';

import './style.css'

import Img404 from '../../assets/Img/Error404.png'
import Logo from '../../assets/Img/Logo.png'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="Container404">
        <img src={Logo} alt="Imagem de Erro" className="Logo_Error"/>
        <h1>Você se perdeu do seu Caminho?</h1>
        <h2>Infeslimente não encontrei o seu caminho. Que tal voltar?<Link  className="Link"   to="/"> Clique aqui</Link>  </h2>
        <img src={Img404} alt="Imagem de Erro"/>
    </div>
  );
}

export default Error;
