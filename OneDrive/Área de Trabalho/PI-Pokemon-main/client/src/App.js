
import react from  'react';
import React from 'react';
import { Route } from 'react-router-dom';
import Detalle from './components/detalle';
import Form from './components/form';
import Home from './components/home';
import Landing from './components/landing';
import Navbar from './components/navbar';


function App() {
  
  return (
    <react.Fragment>
      <Route exact path='/'>
        <Landing></Landing>
      </Route>
      <Route exact path='/home'>
        <Navbar></Navbar>
        <Home></Home>
      </Route>
      <Route path='/form'>
        <Navbar></Navbar>
        <Form></Form>
      </Route>
      <Route path='/detalle/:id'>
        <Navbar></Navbar>
        <Detalle></Detalle>
      </Route>
    </react.Fragment>
  );
}

export default App;
