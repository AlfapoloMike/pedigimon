// export const pageChange =()=>{
//     const pageNav =  document.querySelector('.pageNav')
//     const countAll = document.querySelectorAll('.card').length;
//     const pages = parseInt(countAll / 16)

import { showDigimon } from "./card.js"
import { checkStorage } from "./checkLocalStorage.js"
import { cleanHTML } from "./cleanHtml.js"
import { addListeners } from "./listener.js"

//     for(let i=0 ; i < pages+1; i++){
//         const page = document.createElement('button')
//         page.classList =`pageNumber`
//         page.id = (i+1)
//         page.innerText = i+1
//         pageNav.appendChild(page)
//     }
//     pageNav.addEventListener('click', (e)=>{
//         e.preventDefault()
//         const fullPage = document.querySelector('#items')
//         fullPage.classList = `page${e.target.id}`
//     })

//     if(countAll <= 16 ){
//         console.log('1 pagina');
//     }
//     else if(countAll > 16 && countAll <= 32){
//         console.log('2 paginas');
//     }
//     if(countAll > 32){
//         console.log('3 paginas');
//     }

// }
export const pageChange = (digimons) => {
    const pageNav = document.querySelector('.pageNav')
    const cardsContainer = document.querySelector('#items')
    const countAll = (digimons.length)
    const pages = parseInt(countAll / 16)

    for (let i = 0; i < pages + 1; i++) {
        const page = document.createElement('button')
        page.classList = `pageNumber`
        page.id = (16 * (1+i))
        page.innerText = i + 1
        pageNav.appendChild(page)
    }
    
    pageNav.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.id == 16 ) {
            cleanHTML(cardsContainer)
            cleanHTML(pageNav)
            showDigimon(digimons.slice(0,16))
            addListeners(digimons.slice(0,16))
            pageChange(digimons.slice(0,16))
            checkStorage()
            console.log(digimons.slice(0,16));
        }

        if(e.target.id == 32) {
            
            console.log(digimons.slice(16,32));
            cleanHTML(cardsContainer)
            cleanHTML(pageNav)
            showDigimon(digimons.slice(16,32))
            addListeners(digimons.slice(16,32))
            pageChange(digimons.slice(16,32))
            checkStorage()
        }

        if (e.target.id == 48) {            
            console.log(digimons.slice(32,48));
            let page3 = digimons.slice(32,48)
            cleanHTML(cardsContainer)
            cleanHTML(pageNav)
            showDigimon(page3)
            addListeners(page3)
            pageChange(page3)
            checkStorage()
        }
    })
}