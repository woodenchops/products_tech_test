import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {MasterProvider} from './contexts/MasterContext';
import './App.css';
import AllProducts from './components/AllProducts';
import SingleProduct from './components/SingleProduct';
import StyledWelcomePage from './components/StyledWelcomePage';
import Home from './components/Home';
import Nav from './components/Nav';
import WelcomePage from './components/WelcomePage';
import MaxPrice from './components/MaxPrice';


function App() {
  return (
    <div className="App">

       <BrowserRouter>
        <MasterProvider>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/contents" component={Nav}/>
              <Route exact path="/welcome" component={WelcomePage}/>
              <Route exact path="/welcome-styled" component={StyledWelcomePage}/>
              <Route exact path="/products" component={AllProducts}/>
              <Route exact path="/products/:slug" component={SingleProduct}/>
              <Route exact path="/maxPrice/:slug" component={MaxPrice}/>
          </Switch>
        </MasterProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
