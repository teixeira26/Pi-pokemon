import react, {useState } from  'react';
import React from 'react';
import { useSelector } from 'react-redux';
import Card from './card'

const elementosPorPag = 12;

function Cards(props) {

  const estado = useSelector(estado=>estado);
  // console.log(estado.pagInicial.pokemonsMostrar);
  
  return (
    <react.Fragment>
      
        {props.estado.length>0?props.estado.map((x, index) => {
            return (
                <Card data={x} key={index}></Card>
            )
        }):<div><h2>TODAVIA NO HAY POKEMONES CON LAS CARACTERISTICAS BUSCADAS</h2><img src='/assets/error.png' alt='error'/></div>}
        
    </react.Fragment>
  );
}

export default Cards;