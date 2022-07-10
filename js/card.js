
import { digimons } from './db.js';

export const showDigimon = () =>{
    const cardsContainer = document.querySelector('#items')
    digimons.map(digimon =>{
        // ----------- valido stock
        let stockStatus = ''
        if(digimon.stock > 0){
            stockStatus = 'stockOK'
        }else{
            stockStatus = 'stockOff'
        }
        // ------------ creo la card 
        const showCard = document.createElement('div')
        showCard.classList = 'card'
        showCard.id = digimon.nombre
        showCard.innerHTML = 
        `<div class="stockStatus"></div>
        <img src="${digimon.imagen}" alt="">
        <div>
                <div class="tipoIMG"></div>
                <div class="elemento"></div>
                <div class="borde"></div>
                <div class="${stockStatus}"></div>
                <h2 class="name">
                    ${digimon.nombre}
                </h2>
                <p class="level">
                    ${digimon.nivel}
                </p>
                <p class="tipo">
                    ${digimon.tipo}
                </p>
                <p class="precio">
                    $${digimon.precio}
                </p>
        </div>
        <form action="">
            <button type="button" class="substract">-</button>
            <input class="quatity" type="text" inputmode="numeric" value="0" max="${digimon.stock}" min="0" name="" id="">
            <button type="button" class="increase">+</button>
        </form>
        `
        cardsContainer.appendChild(showCard)
    })
}
