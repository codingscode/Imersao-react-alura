import estilo from 'styled-components'



const Botao = estilo.button`

        color: var(--branco);
        border: 1px solid var(--branco);
        box-sizing: border-box;
        cursor: pointer;
        padding: 16px 24px;
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
