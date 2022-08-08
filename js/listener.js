import { addToCart } from "./addToCart.js"

export const addListeners = (digimones) => {

    digimones.map(digimon => {
        const substractLocation = document.querySelector(` #${digimon.nombre} > form > button.substract `)
        const increaseLocation = document.querySelector(` #${digimon.nombre} > form > button.increase `)
        const quantityValue = document.querySelector(` #${digimon.nombre} > form > input.quatity `)
        

        increaseLocation.addEventListener('click', (e) => {
            e.preventDefault()
            if (e.target === increaseLocation && quantityValue.value < quantityValue.getAttribute('max')) {
                if (quantityValue.value >= 0) {
                    quantityValue.value++
                    addToCart('+', digimon)
                }


            }
        })
        
        substractLocation.addEventListener('click', (e) => {
            e.preventDefault()
            if (e.target === substractLocation) {
                if (quantityValue.value > 0) {
                    quantityValue.value--
                    addToCart('-', digimon)
                }

            }
        })

    })


}

