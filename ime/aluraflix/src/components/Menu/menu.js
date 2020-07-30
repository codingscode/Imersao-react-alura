import React from 'react'

import logo from '../../assets/imagens/alura.png'
import './menu.css'


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
               <img className="Logo" src={logo} alt="aluraflix" />              
            </a>
              
            <a className="linkBotao" href="/">
               Novo vídeo
            </a>
        </nav>
    )
}


export default Menu