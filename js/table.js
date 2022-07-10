export const createCartTable =()=>{
    const t = document.querySelector('#tableContainer')
    const table = document.createElement('tbody')
    table.innerHTML = `
    <tr>
    <th>Foto</th>
    <th>Nombre</th>
    <th>Precio</th>
    <th>Cantidad</th>
    </tr>
    `
    t.appendChild(table)
}
