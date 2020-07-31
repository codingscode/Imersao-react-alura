import React from 'react'

import Menu from '../Menu/menu'
import Rodape from '../Rodape/rodape'


function PaginaDefault(props) {  // ou {children}
     return (
         <div>
            <Menu />
             {props.children}   {/* ou {children} */}
            <Rodape />
         
         </div>
          
     )

}

export default PaginaDefault
// ver http://localhost:3000/cadastro/video