import React from 'react'

import Menu from '../Menu/menu'
import Rodape from '../Rodape/rodape'
import styled, {css} from 'styled-components'


const Principal = styled.main`
     background-color: var(--preto);
     color: var(--branco);
     flex: 1;
     padding-top: 50px;
     padding-right: 5%;
     padding-left: 5%;
     ${({paddingAll}) => css`
         padding: ${paddingAll};
     `}
`


function PaginaDefault({children, paddinAll}) { 
     return (
         <>
            <Menu />
            <Principal paddinAll = {paddinAll}>
                    {children}  
            </Principal>
            <Rodape />
         </>
     )
}

export default PaginaDefault
// ver http://localhost:3000/cadastro/video