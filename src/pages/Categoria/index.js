import React, { useState } from 'react';
import '../../global.css';
import Default from '../../components/Default'
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';


function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  
  const [categorias, setCategorias] = useState(['']);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(info) {
    const { value } = info.target;
    setValue (
      info.target.getAttribute('name'),
      value
    )
  }


  

  return (
    <Default>
      <h1>Cadastro de Categorias: {values.nome}</h1>
      <form onSubmit={function handleSubmit(info) {
        info.preventDefault()
        setCategorias([
          ...categorias,
          values
        ]);
        
        setValues(valoresIniciais)
      }}>

<FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

<FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

<FormField
          label="Cor"
          type="color"
          name="descricao"
          value={values.color}
          onChange={handleChange}
      />


        <button>
          Cadastrar
            </button>
      </form>

      <ul>
        {categorias.map((categorias, indice) => {
          return (
            <li key={`${categorias}${indice}`}>
              {categorias.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/cadastro/categoria">
        Cadastrar Video
        </Link>

    </Default>
  );
}

export default CadastroCategoria;
