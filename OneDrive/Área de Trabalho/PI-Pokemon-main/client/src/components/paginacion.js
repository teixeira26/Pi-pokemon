import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cambiarPokemons } from "../redux/actions";



 function Paginacion(){
    const dispatch = useDispatch();
    const totalPokemons = useSelector(state=>state.pokemons);
    const pokemonsPerPag = useSelector(state=>state.pagInicial.pokemonsPerPag);
    const [maximo, setMaximo] = useState(0);
    const [paginaActual, setPaginaActual] = useState(0)
    const [pags, setPags] = useState([]);

    useEffect(()=>{ 
        setMaximo(Math.floor((totalPokemons.length-1)/pokemonsPerPag));
        setPaginaActual(0)
    },[totalPokemons]);

    useEffect(()=>{
        let array = [];
        for(let x=1;x<=maximo+1;x++){
            array.push(x);
        }
        setPags(array)
    },[maximo])
    useEffect(()=>{
        let pokeInicial = paginaActual * pokemonsPerPag;
        //console.log('se ejecuta useEffect')
        dispatch(cambiarPokemons(totalPokemons.slice(pokeInicial, pokeInicial+pokemonsPerPag)))
    },[paginaActual])


    const prev = ()=>{
        if(paginaActual>=1){
            setPaginaActual(paginaActual-1)
        }
    }
    const next = ()=>{
       if(paginaActual<=maximo-1){
           setPaginaActual(paginaActual+1)
       }

    }
    const paginacionNumerica = (e)=>{
        setPaginaActual(e.target.value-1)
    }
    return(
        <div>
            <button onClick={prev}>prev</button>
            {pags&&pags.length>1?pags.map(x=>{
                return(
                    <button key={x} onClick={paginacionNumerica} value={x}>{x}</button>
                )
            }):null}
            <button onClick={next}>next</button>
        </div>
    );
}



export default Paginacion;
