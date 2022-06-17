// import { addListeners } from "./listener.js"

export const showDatos = (name, type, level, appendLocation, img, price) =>{
    const showCard = document.createElement('div')
    showCard.classList = 'card'
    showCard.id = name
    showCard.innerHTML = 
    `
    <img src='${img}'>
    <h3 class='name'> Digimon: ${name} </h3>
    <p class='type' > Tipo: ${type} </p>
    <p class='level' > Nivel: ${level} </p>
    <p class='digimonPrice' id='digimonPrice' > Precio: $${price} </p>
    <form action="">
    <button type="button" class="substract">-</button>
    <input class="quatity" type="number" value="0" name="" id="">
    <button type="button" class="increase">+</button>
    </form>
    `
    appendLocation.appendChild(showCard)
}