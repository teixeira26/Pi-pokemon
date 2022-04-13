import React from "react";
import { NavLink } from "react-router-dom";
import './css/landing.css'

const Landing = ()=>{
    return(
        <div className="fondo">
            <div className='contentContainer'>
                <h1>BIENVENIDO A MI POKEDEX</h1>
                <NavLink to='/home'><img src='/assets/pokebola.png' alt="pokebola" className="pokebola"/></NavLink>
            </div>
            
        </div>
    )
}


export default Landing;