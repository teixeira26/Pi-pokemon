import react from  'react';
import React from 'react';
import {NavLink} from 'react-router-dom'
import './css/navbar.css'


function Navbar() {
  
  return (
    <react.Fragment>
      <div className='nav'>
        <ul>
            <li><NavLink to="/home">Pokedex</NavLink></li>
            <li><NavLink to="/form">Crear tu propio pokemon</NavLink></li>
            
        </ul>
      </div>
    </react.Fragment>
  );
}

export default Navbar;