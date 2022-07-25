import { cleanHTML } from "./cleanHtml.js"
import { showItemCart } from "./showItemCart.js"
import { createCartTable, createCartTotal } from "./table.js"


export let cartItems = []
 


export const addToCart = (operador, digimon) => {

    if(!localStorage.getItem('cartStorage')){
        let strCart = JSON.stringify(cartItems)
        localStorage.setItem('cartStorage', strCart)
    }else{
        let localCart = localStorage.getItem('cartStorage')
        cartItems =  JSON.parse(localCart)
    }

    const cartTable = document.querySelector('#tableContainer')    

    const addItem = {
        img: digimon.imagen,
        nombre: digimon.nombre,
        precio: digimon.precio,
        cantidad: 1,
    }
    const created = cartItems.some(digi => digi.nombre === addItem.nombre)

    if (created && operador === '+') {
        cartItems.map(digi => {
            if (digi.nombre === addItem.nombre) {
                digi.cantidad++
                return
            }
        })
    } else if (created && operador === '-') {
        cartItems.map(digi => {
            if (digi.nombre === addItem.nombre) {
                digi.cantidad--
                if (digi.cantidad === 0) {
                    cartItems = cartItems.filter(item => item.nombre !== addItem.nombre)
                    
                }
            }
        })
    } else {
        cartItems = [...cartItems, addItem]
    }

    
    cleanHTML(cartTable);
    createCartTable();
    showItemCart(cartItems);
    createCartTotal(cartItems);
    
    let strCart = JSON.stringify(cartItems)
    localStorage.setItem('cartStorage', strCart)




    // const addItem = {
    //     img: digimon.imagen,
    //     nombre: digimon.nombre,
    //     precio: digimon.precio,
    //     cantidad: 1,
    // }
    // const created = cartItems.some(digi => digi.nombre === addItem.nombre)

    // if (created && operador === '+') {
    //     cartItems.map(digi => {
    //         if (digi.nombre === addItem.nombre) {
    //             digi.cantidad++
    //             return
    //         }
    //     })
    // } else if (created && operador === '-') {
    //     cartItems.map(digi => {
    //         if (digi.nombre === addItem.nombre) {
    //             digi.cantidad--
    //             if (digi.cantidad === 0) {
    //                 cartItems = cartItems.filter(item => item.nombre !== addItem.nombre)
    //             }
    //         }
    //     })
    // } else {
    //     cartItems = [...cartItems, addItem]
    // }


    // const cartStrinified = JSON.stringify(cartItems)

    // localStorage.setItem("cartStorage", cartStrinified)



    // cleanHTML(cartTable);
    // createCartTable();
    // showItemCart(cartItems);
    // createCartTotal(cartItems);

}