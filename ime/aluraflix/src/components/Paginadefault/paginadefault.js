import React from 'react'

import Menu from '../Menu/menu'
import Rodape from '../Rodape/rodape'
import styled from 'styled-components'


const Principal = styled.main`
     background-color: var(--preto);
     color: var(--branco);
     flex: 1;
     padding-top: 50px;
     padding-right: 5%;
     padding-left: 5%;
`


function PaginaDefault({children}) { 
     return (
         <div>
            <Menu />
               <Principal>
                    {children}  

               </Principal>
            <Rodape />
         
         </div>
          
     )

}

export default PaginaDefault
// ver http://localhost:3000/cadastro/video