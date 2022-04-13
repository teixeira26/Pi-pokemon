import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarFiltro, agregarTipos, cambiarPokemons, setEstado, aplicarFiltroPorTipo } from '../redux/actions';
import './css/barra.css'
const BarraBusqueda = (props)=>{
    const [barrita, setBarrita] = useState('');
    const [cargado, setCargado] = useState(false);
    const estadoInicial = useSelector(estado=>estado.pokemonsCopia2)
    const pokemons = useSelector(estado => estado.pokemons);
    const pokemonsFiltro = useSelector(estado=> estado.pokemonsFiltradosTipo);
    const numeroPag = useSelector(estado=> estado.pagInicial.paginaActual);
    const pokesPerPag = useSelector(estado=> estado.pagInicial.pokemonsPerPag);
    const dispatch = useDispatch();
    const referenciaTipo = useRef();
    const referenciaNombre = useRef();
    const referenciaAsc = useRef();
    const estado = useSelector(estado=>estado);
    const tipoos = useSelector(estado=>estado.tipos);
    const totalPokemons = useSelector(estado=>estado.pokemons);
    const pokemonsPerPag = useSelector(estado=>estado.pagInicial.pokemonsPerPag);
    const container = useRef();
    
    
    useEffect(async ()=>{
        dispatch(setEstado(estadoInicial));
        dispatch(aplicarFiltroPorTipo(estadoInicial));
        async function tipos(){
            if(!tipoos[0]){
                const tipos = await axios.get('http://localhost:3001/types');
                dispatch(agregarTipos(tipos.data));
            }
            setCargado(true);
        }
        tipos();
    },[]);
    // useEffect(()=>{
    //     referencia.current.value = 'todos';
    //     console.log(referencia.current.value)
    // }, [pokemons])

    const mirar  = ()=>{
        if(container.current.className === 'containerBarra'){
            console.log(container.current.className)
            container.current.className = 'mostrar';
            console.log(container.current.className)
        }
        else container.current.className = 'containerBarra';
       
    }
    const actualizarEstado = (e)=>{
        setBarrita(e.target.value);
    }
    const enviarRedux = (e)=>{
        e.preventDefault();
        const coincidencia = pokemons.filter(x=>x.nombre === barrita);
        if (coincidencia.length>0) dispatch(cambiarPokemons(coincidencia));
        else {
            alert('no hay coincidencias');
            dispatch(cambiarPokemons(pokemons.slice(0, pokesPerPag)))
        };
    }
    const buscarPorTipo = async(e)=>{
        if(e.target.value !== '-'){
            if(pokemons.length!=pokemonsFiltro.length){
                dispatch(setEstado(pokemonsFiltro));
            }
            const nuevoEstado = pokemonsFiltro.filter(x=>{
                if(x.createdinDb){
                    if (x.tipos.map(x=>x.nombre).includes(e.target.value)) return x;
                }
                else if(x.tipos.includes(e.target.value)){ return x}
            });
            dispatch(setEstado(nuevoEstado));
            dispatch(cambiarPokemons(nuevoEstado.slice(0, pokesPerPag)));
        }
        else {
            let rec = pokemonsFiltro;
            dispatch(setEstado(rec))
            dispatch(cambiarPokemons(rec.slice(0,pokesPerPag)));
        };
    }
    const aplicarCategoria = (e)=>{
        if(e.target.value === 'todos'){
            referenciaTipo.current.value = '';
            console.log(referenciaTipo.current.value)
            dispatch(setEstado(estadoInicial));
            dispatch(aplicarFiltroPorTipo(estadoInicial));
            dispatch(cambiarPokemons(estadoInicial.slice(0,pokesPerPag)));
        }
        else if(e.target.value === 'original'){
            let originales = estadoInicial.filter(x=>{
                if (!x.createdinDb) return x;
            })
            dispatch(setEstado(originales));
            dispatch(aplicarFiltroPorTipo(originales));
            dispatch(cambiarPokemons(originales.slice(0,pokesPerPag)));
        }
        else if(e.target.value === 'customizados'){
            let customizados = estadoInicial.filter(x=>{
                if(x.createdinDb) return x;
            })
            dispatch(setEstado(customizados));
            dispatch(aplicarFiltroPorTipo(customizados));
            dispatch(cambiarPokemons(customizados.slice(0,pokesPerPag)));
        }
        referenciaTipo.current.value = '-';
        referenciaNombre.current.value = '-';
        referenciaAsc.current.value = '-';
        console.log(referenciaTipo.current.value)
        
    }
    const ordenar = ()=>{
        if(estado.filtros.orden && estado.filtros.valor){
            if(estado.filtros.orden === 'asc' && estado.filtros.valor === 'nombre'){
            let nuevoEstado = estado.pokemons.sort((x, y)=>{
                if(x.nombre.toLowerCase()<y.nombre.toLowerCase())return -1;
                if(x.nombre.toLowerCase()>y.nombre.toLowerCase())return 1;
                else return 0;
            })
            dispatch(setEstado(nuevoEstado));
            dispatch(cambiarPokemons(totalPokemons.slice(0, pokemonsPerPag)));
            // console.log(estado)
            }
            if(estado.filtros.orden === 'desc' && estado.filtros.valor === 'nombre'){
                let nuevoEstado = estado.pokemons.sort((x, y)=>{
                    if(x.nombre.toLowerCase()<y.nombre.toLowerCase())return 1;
                    if(x.nombre.toLowerCase()>y.nombre.toLowerCase())return -1;
                    else return 0;
                })
                dispatch(setEstado(nuevoEstado));
                dispatch(cambiarPokemons(totalPokemons.slice(0, pokemonsPerPag)))
                // console.log(estado)
            }
            if(estado.filtros.orden === 'asc' && estado.filtros.valor === 'fuerza'){
                let nuevoEstado = estado.pokemons.sort((x, y)=>{
                    if(x.fuerza<y.fuerza)return -1;
                    if(x.fuerza>y.fuerza)return 1;
                    else return 0;
                })
                dispatch(setEstado(nuevoEstado));
                dispatch(cambiarPokemons(totalPokemons.slice(0, pokemonsPerPag)))
                // console.log(estado)
                }
                if(estado.filtros.orden === 'desc' && estado.filtros.valor === 'fuerza'){
                    let nuevoEstado = estado.pokemons.sort((x, y)=>{
                        if(x.fuerza<y.fuerza)return 1;
                        if(x.fuerza>y.fuerza)return -1;
                        else return 0;
                    })
                    dispatch(setEstado(nuevoEstado));
                    dispatch(cambiarPokemons(totalPokemons.slice(0, pokemonsPerPag)))
                    // console.log(estado)
                }

            
        }
    }
    const orden =(e)=>{
        dispatch(agregarFiltro('orden',e.target.value));
        ordenar();
    };  
    const valor =(e)=>{
        dispatch(agregarFiltro('valor',e.target.value));
        ordenar();
    };

    return (
        <div>
        <div className='containerBarra' ref={container}>
        <div className='buscar'>
            <form onSubmit={enviarRedux}>
                <label htmlFor="buscador">Buscar por Nombre:</label>
                <input type='text' placeholder='Pikachu' name='buscador' onChange={actualizarEstado} className='input'></input>
                <input type='submit' value='Buscar'className='button'></input>
            </form>
        </div>
        <div className='buscar'>

            <form>
                <label htmlFor="opciones">Buscar por tipo:</label>
                <select name='opciones' onChange={buscarPorTipo} ref={referenciaTipo} className='input'>
                    <option value='-'>-</option>
                {cargado?tipoos.map(x=>{
                     return <option value={x}key={x}>{x}</option>
                }):null}
                </select>
            </form>

            
            <form>
                <label htmlFor="opciones">Categoria:</label>
                <select name='opciones' onChange={aplicarCategoria} className='input'>
                    <option value='-'>-</option>
                    <option value='todos'>Todos</option>
                    <option value='original'>Original</option>
                    <option value='customizados'>customizados</option>
                </select>
            </form>
        </div>
        <div className='buscar'>
            <form>
                <label htmlFor="opciones">Ordenar por: </label>
                <select name='opciones1' onChange={orden} ref={referenciaAsc} className='input'>
                    <option value=''>-</option>
                    <option value='asc'>ascendente</option>
                    <option value='desc'>descendente</option>
                </select>
                <select name='opciones2' onChange={valor} ref={referenciaNombre} className='input'>
                    <option value=''>-</option>
                    <option value='nombre'>Nombre</option>
                    <option value='fuerza'>Fuerza</option>
                </select>
            </form>
        </div>
        </div>
        <div className='flecha'>
        <button onClick={mirar} >▼</button>
        </div>
        </div>
    )
}

export default BarraBusqueda;