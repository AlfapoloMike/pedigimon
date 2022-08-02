export const errorFilter = () =>{
    const cardsContainer = document.querySelector('#items')
    const showError = document.createElement('div')
    showError.classList = 'error'
    showError.innerHTML = 
    `<div>
    <p>No se encontraron coincidencias</p>
    <p>Verifica nuevamente los filtros seleccionados</p>
    <img src="/assets/egg.gif" alt="">
    </div>
    `
    cardsContainer.appendChild(showError)
}