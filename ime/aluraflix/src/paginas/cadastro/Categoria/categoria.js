import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import PaginaDefault from '../../../components/Paginadefault/paginadefault'


function CadastroCategoria() {
    const [categorias, setCategorias] = useState([])

    const valoresIniciais = {
        nome: 'algo1',
        descricao: 'algo2',
        cor: '#000'
    }
    const [valores, setValores] = useState(valoresIniciais)

    function setarValor(chave, valor) {
        // chave: nome, descricao, blablá
        setValores({
            ...valores,
            [chave]: valor
        })
    }
    
    return (
       <PaginaDefault>
          <h1>Cadastro de Categoria: {valores.nome}</h1>

          <form onSubmit={(evento) => {
                    evento.preventDefault()
                    console.log('tentativa de envio', evento)
                    setCategorias([
                        ...categorias,
                        valores
                    ])

                    setValores(valoresIniciais) // se for um objeto vazio dá problema
                }}>

                <div>
                        <label>
                            Nome da Categoria:
                            <input type="text" value={valores.nome} onChange={(evento) => { 
                                setarValor('nome', evento.target.value)
                                
                            }} />
                        </label>
                </div>
                <div>
                        <label>
                            Descrição:
                            <textarea type="text" value={valores.descricao} onChange={(evento) => { 
                                setarValor('descricao', evento.target.value)
                            }} />
                        </label>
               </div>
               <div>
                        <label>
                            Cor:
                            <input type="color" value={valores.cor} onChange={(evento) => { 
                                setarValor('cor', evento.target.value)
                            }} />
                        </label>
               </div>
               <button>Cadastrar</button>
                        
         </form>

         <ul>
              {categorias.map((cada, indice) => {
                    return (
                    <li key={`${cada}${indice}`}>
                        {cada.nome}    {/* usar a extensão react components no browser */}
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
