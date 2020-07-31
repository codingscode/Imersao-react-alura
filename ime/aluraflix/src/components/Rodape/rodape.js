import React from 'react'
import { BaseRodape } from './rodape_estilo'

function Rodape() {
  return (
    <BaseRodape>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </BaseRodape>
  );
}

export default Rodape;
