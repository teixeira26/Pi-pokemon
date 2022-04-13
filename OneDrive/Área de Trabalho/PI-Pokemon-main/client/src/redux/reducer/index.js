const estadoInicial = {
    pokemons:[],
    pokemonsFiltradosTipo:[],
    pokemonsCopia2:[],
    tipos:[],
    pagInicial:{
        paginaActual:1,
        pokemonsPerPag:12,
        pokemonsMostrar:[],

    },
    filtros:{
        orden:'',
        valor:'',
    }
}


const rootReducer = (estado = estadoInicial, accion)=>{
    switch (accion.type) {
        case 'SET_ESTADO':
            // console.log(`entra al reducer con ${accion.payload}`);
            // console.log(accion);
            return Object.assign({},estado,{
                ...estado,
                pokemons: [...accion.payload],
            })
        case 'CAMBIAR_POKEMONS':
            console.log(`entra al reducer`);
            console.log(accion.payload)
            return Object.assign({},estado, {
                ...estado,
                pagInicial:{
                    ...estado.pagInicial,
                    pokemonsMostrar: [...accion.payload],
                }
            })

        case 'ACTUALIZAR_PAGINA':
            return Object.assign({},estado, {
                ...estado,
                pagInicial:{
                    ...estado.pagInicial,
                    paginaActual:accion.payload,
                }
            })

        case 'AGREGAR_FILTRO':
            // console.log('entra al reducer')
            return (Object.assign(estado, {
                ...estado,
                filtros:{
                    ...estado.filtros,
                    [accion.name]:accion.payload,
                }
            }))

        case 'AGREGAR_TIPOS':
            
            return Object.assign(estado, {
                ...estado,
                tipos:[...accion.payload],
            })
        
        
        case 'FILTRO_POR_TIPO':
            return({
                ...estado,
                pokemonsFiltradosTipo:accion.payload
            })
        case 'AGREGAR_COPIA2':
            return({
                ...estado,
                pokemonsCopia2:[...accion.payload],
            })
        default:
            return estado;
    }
}

export default rootReducer;