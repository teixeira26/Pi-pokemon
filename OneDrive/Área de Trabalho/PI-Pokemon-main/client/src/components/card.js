import react from  'react';
import React from 'react';
import './css/card.css'
import controllerImg from './image/controllerImg.js'
import {NavLink} from 'react-router-dom'




function Card(props) {
    //console.log(props)
    // console.log(props.data.image)
  return (

    <react.Fragment>
      <NavLink to={`/detalle/${props.data.id}`} className='card'> 
      <div>
        <h1 className='cardText'>{props.data.nombre}</h1>
        <img src={props.data.image||props.data.imagen} alt='pokemon' className='pokemonImg'/>
        <div>{!props.data.createdinDb && props.data.tipos?props.data.tipos.map((x, index)=>{
            return <img src={controllerImg(x)} alt='tipo' key={index} className='tiposImg'/>
        }):null}
        </div>
        <div>{props.data.createdinDb && props.data.tipos?props.data.tipos.map((x, index)=>{
            return <img src={controllerImg(x.nombre)||controllerImg(x)} alt='tipo' key={index} className='tiposImg'/>
        }):null}
        </div>
      </div>
      </NavLink>
    </react.Fragment>
  );
}

export default Card;