import { showItemCart } from "./showItemCart.js"
import { createCartTotal } from "./table.js"

export const checkStorage = () =>{
    const digimonStorage = JSON.parse(localStorage.getItem("cartStorage"))
    if(digimonStorage){
        digimonStorage.map(digimon =>{
            const quantityValue = document.querySelector(` #${digimon.nombre} > form > input.quatity `)
            quantityValue.value = digimon.cantidad
            
        })
        showItemCart(digimonStorage)
        createCartTotal(digimonStorage)
    }
}