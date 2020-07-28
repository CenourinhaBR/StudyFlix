import React from 'react';
import '../../global.css';
import Default from '../../components/Default'
import { Link } from 'react-router-dom';


function NewVideo() {
  return (
    <Default>
        <h1>Cadastro de Video</h1>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
    
    </Default>
  );
}

export default NewVideo;
