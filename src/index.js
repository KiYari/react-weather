import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './index.css';
import Main from './Pages/Main';
import GeoPage from './Pages/GeoPage'
import DFcast from './Pages/DFcast'
import CIPage from './Pages/CIPage'
import GeoSearchPage from './Pages/GeoSearchPage'





ReactDOM.render(<Router>
  <Switch>
    <Route exact="exact" path="/"><Main/></Route>
    <Route path="/geo"><GeoPage/></Route>
    <Route path="/dfc"><DFcast/></Route>
    <Route path="/city"><CIPage/></Route>
    <Route path="/geos"><GeoSearchPage/></Route>

  </Switch>

</Router>,
  document.getElementById('root')
);
