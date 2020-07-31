import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/imagens/alura.png'
import './menu.css'
//import LinkBotao from './LinkBotao/linkBotao'
import LinkBotao_cstylcmp from '../Btn_stl/btn_stl'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
               <img className="Logo" src={logo} alt="aluraflix" />              
            </Link>
              
            <LinkBotao_cstylcmp as={Link} to="/cadastro/video" className="linkBotao"> 
               Novo vídeo
            </LinkBotao_cstylcmp>
        </nav>
    )
}


export default Menu