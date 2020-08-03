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

                <div>
                        <label>
                            Nome da Categoria:
                            <input type="text" value={nomeDaCategoria} onChange={(evento) => { 
                                setNomeDaCategoria(evento.target.value)
                                
                            }} />
                        </label>
                </div>
                <div>
                        <label>
                            Descrição:
                            <textarea type="text" value={nomeDaCategoria} onChange={(evento) => { 
                                setNomeDaCategoria(evento.target.value)
                                
                            }} />
                        </label>
               </div>
               <div>
                        <label>
                            Cor:
                            <input type="color" value={nomeDaCategoria} onChange={(evento) => { 
                                setNomeDaCategoria(evento.target.value)
                                
                            }} />
                        </label>
               </div>
               <button>Cadastrar</button>
                        
         </form>

         <ul>
              {categorias.map((cada, indice) => {
                    return (
                    <li key={`${cada}${indice}`}>
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
