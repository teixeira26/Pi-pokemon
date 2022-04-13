const controlerImg = (nombre)=>{
    switch (nombre) {
        case 'normal':
            return './assets/normal.png';
        case 'rock':
            return './assets/roca.png';  
        case 'fighting':
            return './assets/lucha.png'; 
        case 'flying':
            return './assets/volador.png'; 
        case 'poison':
            return './assets/venenoso.png'; 
        case 'ground':
            return './assets/tierra.png'; 
        case 'bug':
        return './assets/bicho.png';
        case 'ghost':
            return './assets/fantasma.png';
        case 'fire':
            return './assets/fuego.png';  
        case 'water':
            return './assets/agua.png'; 
        case 'steel':
            return './assets/acero.png'; 
        case 'grass':
            return './assets/planta.png'; 
        case 'electric':
            return './assets/electrico.png'; 
        case 'psychic':
        return './assets/psiquico.png';
        case 'dragon':
            return './assets/dragon.png';
        case 'ice':
            return './assets/hielo.png';  
        case 'dark':
            return './assets/siniestro.png'; 
        case 'fairy':
            return './assets/hada.png';
        case 'unknown':
            return './assets/unknown.png';
        case 'shadow':
            return './assets/shadow.png';
    }
}

export default controlerImg;