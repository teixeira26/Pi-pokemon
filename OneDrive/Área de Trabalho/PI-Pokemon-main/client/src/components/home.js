import './css/home.css';
import react, { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import Cards from './cards.js';
import {useDispatch, useSelector} from 'react-redux';
import {aplicarFiltroPorTipo, cambiarPokemons, crearnuevaCopia, setEstado} from '../redux/actions';
import Paginacion from './paginacion'
import BarraBusqueda from './barra_busqueda';

function Home() {
  const [cargado, setCargado] = useState(false);
  const [pokemons, setPokemons] = useState([])
  const estadoGlobal = useSelector(state=>state);
  let dispatch = useDispatch()
  useEffect(async()=>{
    if(estadoGlobal.pokemonsCopia2.length>1){
      let all = estadoGlobal.pokemonsCopia2
      setPokemons([estadoGlobal.pokemonsCopia2]);
      dispatch(cambiarPokemons(all.slice(0,estadoGlobal.pagInicial.pokemonsPerPag)));
    }
    if(!estadoGlobal.pokemonsCopia2[0]){
      await load();
      setCargado(true);
    }
  },[])

  const load = async()=>{
    const a = await axios.get('http://localhost:3001/');
    dispatch(setEstado(a.data));
    dispatch(aplicarFiltroPorTipo(a.data));
    dispatch(crearnuevaCopia(a.data));
    //console.log(estadoGlobal)
    dispatch(cambiarPokemons(a.data.slice(0, estadoGlobal.pagInicial.pokemonsPerPag)))
    // console.log(estadoGlobal);

  };
  return (
    <react.Fragment>

      <div className="App">
        <Paginacion></Paginacion>
        <div className='container'>
          {cargado||pokemons[0]?<Cards estado = {estadoGlobal.pagInicial.pokemonsMostrar}></Cards>:
          <div>
            <h1>Loading...</h1>
            <img src='./assets/loading.gif' alt='pikachu' className='pikachu'/>
          </div>}
        </div>
        <div className='filterContainer'>
          <BarraBusqueda estado = {estadoGlobal} load={load}></BarraBusqueda>
          <Paginacion></Paginacion>
        </div>
      </div>
    </react.Fragment>
  );
}

export default Home;