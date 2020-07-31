import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './paginas/cadastro/Video/video_js'



ReactDOM.render(
  
  <BrowserRouter>
      <Switch>
          <Route path="/" component={App} exact/>
          <Route path="/cadastro/video" component={CadastroVideo} />
          <Route component={() => (<div>Página 404</div>)} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
