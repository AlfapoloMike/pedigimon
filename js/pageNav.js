export const pageChange =()=>{
    const pageNav =  document.querySelector('.pageNav')
    const countAll = document.querySelectorAll('.card').length;
    const pages = parseInt(countAll / 16)
    
    for(let i=0 ; i < pages+1; i++){
        const page = document.createElement('button')
        page.classList =`pageNumber`
        page.id = (i+1)
        page.innerText = i+1
        pageNav.appendChild(page)
    }
    pageNav.addEventListener('click', (e)=>{
        e.preventDefault()
        const fullPage = document.querySelector('#items')
        fullPage.classList = `page${e.target.id}`
    })
}
