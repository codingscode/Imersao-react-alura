import styled from 'styled-components'


export const BaseRodape = styled.footer`
  background: var(--preto);
  border-top: 2px solid var(--primario);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--branco);
  text-align: center;

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`
