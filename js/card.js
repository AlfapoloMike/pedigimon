
import { digimons } from './db.js';

export const showDigimon = () =>{
    const cardsContainer = document.querySelector('#items')
    digimons.map(digimon =>{
        const showCard = document.createElement('div')
        showCard.classList = 'card'
        showCard.id = digimon.nombre
        showCard.innerHTML = 
        `
        <img src='${digimon.imagen}'>
        <h3 class='name'> Digimon: ${digimon.nombre} </h3>
        <p class='type' > Tipo: ${digimon.tipo} </p>
        <p class='level' > Nivel: ${digimon.nivel} </p>
        <p class='digimonPrice' id='digimonPrice' > Precio: $${digimon.precio} </p>
        <form action="">
        <button type="button" class="substract">-</button>
        <input class="quatity" type="number" value="0" max="${digimon.stock}" min="0" name="" id="">
        <button type="button" class="increase">+</button>
        </form>
        `
        cardsContainer.appendChild(showCard)
    })
}