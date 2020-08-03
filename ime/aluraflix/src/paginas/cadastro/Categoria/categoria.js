import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import PaginaDefault from '../../../components/Paginadefault/paginadefault'


function CadastroCategoria() {
    const [categorias, setCategorias] = useState(['Teste'])
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial')

    
    return (
       <PaginaDefault>
          <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

          <form onSubmit={(evento) => {
                    evento.preventDefault()
                    console.log('tentativa de envio', evento)
                    setCategorias([
                        ...categorias,
                        nomeDaCategoria
                    ])
                }}>
                <label>
                    Nome da Categoria:
                    <input type="text" value={nomeDaCategoria} onChange={(evento) => { 
                        setNomeDaCategoria(evento.target.value)
                        
                    }} />
                </label>
                <button>Cadastrar</button>
         </form>

         <ul>
              {categorias.map((cada) => {
                    return (
                    <li key={cada}>
                        {cada}
                    </li>
                    )
              })}
         </ul>
         
          <Link to="/" >
              Ir para Inicio
          </Link>
       </PaginaDefault>
    )
}

export default CadastroCategoria
