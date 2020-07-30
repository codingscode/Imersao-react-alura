import React from 'react'

import logo from '../../assets/imagens/alura.png'
import './menu.css'
import LinkBotao from './LinkBotao/linkBotao'


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
               <img className="Logo" src={logo} alt="aluraflix" />              
            </a>
              
            <LinkBotao className="linkBotao" href="/">
              Prop específica chamada children (ver console)
            </LinkBotao>
        </nav>
    )
}


export default Menu