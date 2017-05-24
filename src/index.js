import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App'

render(
  <div className="container">
    <BrowserRouter>
      <Route exact path="/" component={App}/>
    </BrowserRouter>
  </div>,
document.getElementById('root'))
