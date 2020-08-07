import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PaginaDefault from '../../../components/Paginadefault/paginadefault'
import CampoForm from '../../../components/CampoForm/campoform'
import Botao from '../../../components/Btn_stl/btn_stl'
import useForm from '../../../Hooks/useForm'



function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#203a46'
    }

    const {tratarMudanca, valores, limparForm} = useForm(valoresIniciais)
    
    const [categorias, setCategorias] = useState([])
    
    useEffect(() => {
        console.log('oi oi oi')

        const url_top = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : ''
        fetch(url_top).then(async (res) => {
            const resposta = await res.json()
            setCategorias([
                ...resposta,
            ])
        })
        /* setTimeout(() => {
            setCategorias([
                ...categorias,
                {
                    "id": 1,
                    "nome": "Front End",
                    "descricao": "Uma categoria legal",
                    "cor": "#cbd1ff"
                 },
                 {
                    "id": 2,
                    "nome": "Back End",
                    "descricao": "Outra categoria legal",
                    "cor": "#cbd1ff"
                 } // aparece embaixo de Cadastrar
            ])
        }, 4000) // 4s */
     }, [])
    
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

                    limparForm() 
                }}>

               <CampoForm etiqueta={'Nome da Categoria'} tipo={'text'} valor={valores.nome} nome="nome" mudanca={tratarMudanca} />

               <CampoForm  etiqueta={'Descrição'} tipo={'textarea'} valor={valores.descricao} nome="descricao" mudanca={tratarMudanca} />
                
               <CampoForm  etiqueta={'Cor'} tipo={'color'} valor={valores.cor} nome="cor" mudanca={tratarMudanca} />

               <Botao>Cadastrar</Botao>
                        
         </form>

          {/* demora 4s */}
         {categorias.length === 0 &&
             (<div>
                  Carregando...
             </div>)
         }

         <ul>
              {categorias.map((cada) => {
                    return (
                    <li key={`${cada.titulo}`}>
                        {cada.titulo}   
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
