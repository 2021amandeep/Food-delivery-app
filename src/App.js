import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './component/form';
import Cart from './component/section/Cart';
import Home from './component/Home'
import Account from './component/Account';
import Login from './component/Login';
import Products from './component/section/Products';
import {DataProvider} from './component/Context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <DataProvider>
      <Router>

        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Login} />
          <Route path="/account" exact component={Account} />
          <Route path="/form" component={Form} />
          <Route path="/cart" component={Cart} />
          <Route path="/product" component={Products} />
        </Switch>
      </Router>
      </DataProvider>
    </>
  );
}

export default App;
