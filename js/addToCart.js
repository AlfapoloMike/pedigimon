export let cartItems = []
export const addToCart = (operador, digimon ) =>{


    const totalUnits = document.querySelector('#totalUnits')
    const totalPrice = document.querySelector('#totalPrice') 
    if(totalUnits.value > 0 && operador === '-' && parseInt(totalPrice.textContent) > 0){
        totalUnits.value--
        totalPrice.textContent = parseInt(totalPrice.textContent) - parseInt(digimon.precio)  
    }
    if(totalUnits.value >=0 && operador === '+'){
        totalUnits.value++
        totalPrice.textContent = parseInt(totalPrice.textContent) + parseInt(digimon.precio)    
    }

    const addItem ={
        img: digimon.imagen,
        nombre: digimon.nombre,
        precio: digimon.precio,
        cantidad: 1
    }
    const created = cartItems.some(digi => digi.nombre === addItem.nombre)

    if(created && operador === '+'){
        cartItems.map(digi =>{
            if(digi.nombre === addItem.nombre){
                digi.cantidad++
                return
            }
        })
    }else if(created && operador ==='-'){
        cartItems.map(digi =>{
            if(digi.nombre === addItem.nombre){
                digi.cantidad--
                return
            }
        })
    }else{
        cartItems = [...cartItems, addItem]
    }

}