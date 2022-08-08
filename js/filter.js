import { showDigimon } from "./card.js"
import { checkStorage } from "./checkLocalStorage.js"
import { cleanHTML } from "./cleanHtml.js"
import { digimons } from "./db.js"
import { errorFilter } from "./error.js"
import { addListeners } from "./listener.js"



export const cardFilter = ()=>{
    const filterContainer = document.querySelector('.filterContainer')
    const digimonType = document.querySelector('.typeFilter')
    const digimonLevel = document.querySelector('.levelFilter')
    const digimonElement = document.querySelector('.elementFilter')
    const cardsContainer = document.querySelector('#items')

    filterContainer.addEventListener('change', (e) =>{
        e.preventDefault()
        const digimonFiltered = digimons.filter(digi => typeSelect(digi)).filter(digi => levelSelect(digi)).filter(digi => elementSelect(digi))

        if(digimonFiltered.length === 0){
            cleanHTML(cardsContainer)
            errorFilter();
        }else{
            cleanHTML(cardsContainer)
            showDigimon(digimonFiltered)
            addListeners(digimonFiltered)
            checkStorage()
        }
    })
const typeSelect =(digi)=>{
    if(digi.tipo.toLocaleLowerCase() === digimonType.value){
        return digi
    }else if(digimonType.value === ''){
        return digi
    }
    
}
const elementSelect =(digi) =>{
    if(digi.elemento.toLocaleLowerCase() === digimonElement.value){
        return digi
    }else if(digimonElement.value === ''){
        return digi
    }
}

const levelSelect =(digi) =>{
    if(digi.nivel.toLocaleLowerCase() === digimonLevel.value){
        return digi
    }else if(digimonLevel.value === ''){
        return digi
    }
}

}

