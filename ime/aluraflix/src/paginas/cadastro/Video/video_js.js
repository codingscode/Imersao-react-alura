import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import PaginaDefault from '../../../components/Paginadefault/paginadefault'
import useForm from '../../../Hooks/useForm'
import CampoForm from '../../../components/CampoForm/campoform'
import Botao from '../../../components/Btn_stl/btn_stl'

function CadastroVideo() {
    const historico = useHistory()
    const {tratarMudanca, valores} = useForm({})

    console.log('video_cadastro***', valores)
    return (
       <PaginaDefault>
          <h1>Cadastro de Vídeo</h1>

          <form onSubmit={(evento) => {
                evento.preventDefault()
                //eslint-disable-next-line no-alert
                alert('Video cadastrado com sucesso')
                historico.push('/')
             }}>
                  <CampoForm etiqueta="Título do Vídeo" nome={"titulo"} valor={valores.titulo} mudanca={tratarMudanca} /> 
                  <Botao type={"submit"}>Cadastrar</Botao>  {/* tinha botado o botão fora errado */}
          
          </form>
          <br></br>
          <Link to="/cadastro/categoria" >
              Cadastrar Categoria
          </Link>
       </PaginaDefault>
    )
}

export default CadastroVideo