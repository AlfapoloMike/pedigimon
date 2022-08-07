import {digimonElementIcon, digimonTypesIcon} from "./db.js"



export const showDigimon = (digi) =>{
    const cardsContainer = document.querySelector('#items')
    digi.map(digimon =>{
        // ----------- valido stock
        let elementIcon = ''
        let stockStatus = ''
        let tipoIcon = ''
        if(digimon.stock > 0){
            stockStatus = 'stockOK'
        }else{
            stockStatus = 'stockOff'
        }
        digimonTypesIcon.map(tipo =>{
            if(digimon.tipo === tipo.tipo){
                return tipoIcon = tipo.icono
            }
        })
        digimonElementIcon.map(elemento =>{
            if(digimon.elemento === elemento.elemento){
                return elementIcon = elemento.icono
            }
        } 
        )
        // ------------ creo la card 
        const showCard = document.createElement('div')
        showCard.classList = 'card'
        showCard.id = digimon.nombre
        showCard.innerHTML = 
        `<div class="stockStatus"></div>
        <img src="${digimon.imagen}" alt="">
        <div>
                <div class="tipoIMG" style="background-image: url(${tipoIcon});"></div>
                <div class="elemento" style="background-image: url(${elementIcon})"></div>
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

// {/* <div class="tipoIMG ${digimon.tipo} "></div>
// <div class="elemento ${digimon.elemento} "></div> */}
