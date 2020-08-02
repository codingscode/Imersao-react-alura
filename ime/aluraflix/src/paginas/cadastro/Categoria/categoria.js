import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import PaginaDefault from '../../../components/Paginadefault/paginadefault'


function CadastroCategoria() {

    const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes')

    console.log('nomeDaCategoria', nomeDaCategoria)


    return (
       <PaginaDefault>
          <h1>Cadastro de Categoria: </h1>

          <form>
                <label>
                    Nome da Categoria:
                    <input type="text"/>
                </label>
                <button>Cadastrar</button>
         </form>
         
          <Link to="/" >
              Ir para Inicio
          </Link>
       </PaginaDefault>
    )
}

export default CadastroCategoria
