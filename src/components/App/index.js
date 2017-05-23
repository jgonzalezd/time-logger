
import './index.scss'
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../Home'

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
    </BrowserRouter>
  </div>
);

export default App;
