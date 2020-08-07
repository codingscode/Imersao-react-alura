import React, {useEffect} from 'react'

import Menu from './components/Menu/menu'
import './App.css'
import dadosIniciais from './data/dados_iniciais.json'
import BannerPrincipal from './components/BannerPrincipal/bannerprincipal'
import Carrosel from './components/Carrossel/Carrosel'
import Rodape from './components/Rodape/rodape'
import repositoriosCategorias from './repositorios/categ'


function App() {

      // http://localhost:8080/categorias?_embed=videos

      useEffect(() => {
            repositoriosCategorias.acessarTodoscomVideo()
                .then((categcomvideos) => {
                 console.log(categcomvideos)
                })
                .catch((erro) => {
                  console.log(erro.message)
                })
                
      })
  

  return (
    <div className="App">
        <Menu />
        
        <BannerPrincipal videoTitulo={dadosIniciais.categorias[0].videos[0].titulo} 
         url={dadosIniciais.categorias[0].videos[0].url} videoDescricao={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"} />

        <Carrosel ignorar1Video categoria={dadosIniciais.categorias[0]} />

        <Carrosel categoria={dadosIniciais.categorias[1]} />

        <Carrosel categoria={dadosIniciais.categorias[2]} />      

        <Carrosel categoria={dadosIniciais.categorias[3]} />      

        <Carrosel categoria={dadosIniciais.categorias[4]} />      

        <Carrosel categoria={dadosIniciais.categorias[5]} />      

        <Rodape  />
    </div>
  );
}

export default App;
