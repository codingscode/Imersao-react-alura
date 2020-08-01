import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/imagens/alura.png'
import './menu.css'
//import LinkBotao from './LinkBotao/linkBotao'
import LinkBotaocstylcmp from '../Btn_stl/btn_stl'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
               <img className="Logo" src={logo} alt="aluraflix" />              
            </Link>
              
            <LinkBotaocstylcmp as={Link} to="/cadastro/video" className="linkBotao"> 
               Novo vídeo
            </LinkBotaocstylcmp>
        </nav>
    )
}


export default Menu