import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contex from './context/context-state';

ReactDOM.render(
  <React.StrictMode>
    <Contex>
      <App />
    </Contex>
  </React.StrictMode>,
  document.getElementById('root')
);
