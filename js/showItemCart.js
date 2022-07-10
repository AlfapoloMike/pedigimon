export const showItemCart =(digimonesCart)=>{
    digimonesCart.map(digimon =>{
        const t = document.querySelector('#tableContainer')
        const table = document.createElement('tbody')
        table.innerHTML = `
        <tr class='table_${digimon.nombre}'>
        <th><img src="${digimon.img}" alt=""></th>
        <th>${digimon.nombre} </th>
        <th>${digimon.precio} </th>
        <th>${digimon.cantidad} </th>
        </tr>
        `
        t.appendChild(table)
    })
}