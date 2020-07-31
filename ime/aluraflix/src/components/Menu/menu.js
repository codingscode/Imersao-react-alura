import React from 'react'

import logo from '../../assets/imagens/alura.png'
import './menu.css'
//import LinkBotao from './LinkBotao/linkBotao'
import LinkBotao_cstylcmp from '../Btn_stl/btn_stl'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
               <img className="Logo" src={logo} alt="aluraflix" />              
            </a>
              
            <LinkBotao_cstylcmp as="a" href="/"> {/* className="linkBotao" */}
               Novo vídeo
            </LinkBotao_cstylcmp>
        </nav>
    )
}


export default Menu