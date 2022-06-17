export const addToCart = (operador, valor) =>{

    const totalUnits = document.querySelector('#totalUnits')
    const totalPrice = document.querySelector('#totalPrice') 
    if(totalUnits.value > 0 && operador === '-' && parseInt(totalPrice.textContent) > 0){
        totalUnits.value--
        totalPrice.textContent = parseInt(totalPrice.textContent) - parseInt(valor)  
    }
    if(totalUnits.value >=0 && operador === '+'){
        totalUnits.value++
        totalPrice.textContent = parseInt(totalPrice.textContent) + parseInt(valor)    
    }
}