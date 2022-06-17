import { showDatos } from './card.js';
import { digimons } from './db.js';
import { addListeners } from './listener.js';


const digimonItems = document.querySelector('#items')



document.addEventListener('DOMContentLoaded', ()=>{
    showDigimon();
    addListeners();
} )

const showDigimon = () =>{
    digimons.map(digimon =>{
        showDatos(digimon.nombre, digimon.tipo, digimon.nivel, digimonItems, digimon.imagen, digimon.precio)
    })
}

