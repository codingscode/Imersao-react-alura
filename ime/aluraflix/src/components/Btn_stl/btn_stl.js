import styled from 'styled-components'



const Botao = styled.button`

        color: var(--branco);
        border: 1px solid var(--branco);
        background-color: var(--preto);
        box-sizing: border-box;
        cursor: pointer;
        padding: 16px 24px;
        margin-top: 8px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        outline: none;
        border-radius: 5px;
        text-decoration: none;
        display: inline-block;
        transition: opacity .3s;

        &:hover, &:focus {
            opacity: .5;
        }
`

export default Botao
