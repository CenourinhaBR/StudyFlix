import React from 'react';
import '../../global.css';
import Default from '../../components/Default'
import { Link } from 'react-router-dom';


function CadastroCategoria() {
  return (
    <Default>
        <h1>Cadastro de Categorias</h1>

        <Link to="/cadastro/categoria">
            Cadastrar Video
        </Link>
    
    </Default>
  );
}

export default CadastroCategoria;
