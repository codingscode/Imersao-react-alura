import React from 'react'
import {Link} from 'react-router-dom'
import PaginaDefault from '../../../components/Paginadefault/paginadefault'
import useForm from '../../../Hooks/useForm'
import CampoForm from '../../../components/CampoForm/campoform'

function CadastroVideo() {
    const {tratarMudanca, valores} = useForm({})

    console.log('video_cadastro***', valores)
    return (
       <PaginaDefault>
          <h1>Cadastro de Vídeo</h1>

          <form>
                  <CampoForm etiqueta="Título do Vídeo" nome={"titulo"} valor={valores.titulo} mudanca={tratarMudanca} /> 
          </form>
          <Link to="/cadastro/categoria" >
              Cadastrar Categoria
          </Link>
       </PaginaDefault>
    )
}

export default CadastroVideo