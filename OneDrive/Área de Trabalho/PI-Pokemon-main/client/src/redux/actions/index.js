//Altera la propiedad pokemons del estado global
const setEstado = (info)=>{
    // console.log('entra a la action');
    return{type:'SET_ESTADO', payload:info}
}

//Altera lo que hay en la propiedad pokemonsMostrar del estado, esta propiedad es pasada a 
//cards como props, por lo tanto esta accion culmina en un re-renderizado de los pokemons en home
const cambiarPokemons = (info)=>{
    return({
        type:'CAMBIAR_POKEMONS',
        payload:info,
    })
}
//Altera el numero de página en el cuál estamos parados
const actualizarPagina = (info)=>{
    return({
        type:'ACTUALIZAR_PAGINA',
        payload:info,
    })
};
//agrega todos los tipos de pokemons a la propiedad tipos del estado global -> va a la barra de busqueda por tipos
const agregarTipos = (info)=>{
    return({
        type:'AGREGAR_TIPOS',
        payload:info,
    })
}
//cambia los propiedades de filtro en el estado global, estas propiedades son utilizadas para que los
//filtros ascendente y descendente funcionen bien
const agregarFiltro = (name, info)=>{
    return({
        type:'AGREGAR_FILTRO',
        name: name,
        payload:info,
    })
}
//agrega los pokemons filtrados por tipo en un array
const aplicarFiltroPorTipo = (info)=>{
    return({
        type:'FILTRO_POR_TIPO',
        payload:info,
    })
}
const crearnuevaCopia = (info)=>{
    return({
        type:'AGREGAR_COPIA2',
        payload:info
    })
}
module.exports = {
    setEstado,
    cambiarPokemons,
    actualizarPagina,
    agregarFiltro,
    agregarTipos,
    aplicarFiltroPorTipo,
    crearnuevaCopia,
} 