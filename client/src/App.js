import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Nav from './components/Nav'
import Home from './components/Home'
import Creater from './components/Creater';
import Details from './components/Details';
import DietsTypes from './components/DietsTypes';

function App() {
  return (
    <>
      <Route exact path='/' component={LandingPage} />
      <Route path='/food' component={Nav} />
      <Route path='/food/home' component={Home} />
      <Route path='/food/create' component={Creater} />
      <Route path='/food/recipe/:id' component={Details} />
      <Route path='/food/diets-types' component={DietsTypes} />
    </>
  );
}

export default App;
