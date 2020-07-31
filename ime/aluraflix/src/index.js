import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom'


function CadastroVideo() {
  return (
     <div>
        Página de Cadastro de Vídeo
     </div>
  )
}


ReactDOM.render(
  
  <BrowserRouter>
      <Switch>
          <Route path="/cadastro/video" component={CadastroVideo} />
          <Route path="/" component={App} exact/>
          
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
