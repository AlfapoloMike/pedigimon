import { addToCart } from "./addToCart.js"
import { digimons } from "./db.js"


export const addListeners = () => {

    digimons.map(digimon => {
        const substractLocation = document.querySelector(` #${digimon.nombre} > form > button.substract `)
        const increaseLocation = document.querySelector(` #${digimon.nombre} > form > button.increase `)
        const quantityValue = document.querySelector(` #${digimon.nombre} > form > input.quatity `)
        
        
        increaseLocation.addEventListener('click', (e) => {
            e.defaultPrevented
            if (e.target === increaseLocation) {
                let quantityValueNow = quantityValue.value
                if(quantityValueNow >=0){
                    quantityValue.value++
                    addToCart('+', digimon.precio)
                }
                   
                            
            }
        })
        substractLocation.addEventListener('click', (e) => {
            e.defaultPrevented
            if (e.target === substractLocation) {
                let quantityValueNow = quantityValue.value
                if(quantityValueNow > 0){
                    quantityValue.value--
                    addToCart('-', digimon.precio) 
                }   
                         
            }
        })

    })
    

}

