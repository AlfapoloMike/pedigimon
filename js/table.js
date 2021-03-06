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
export const createCartTotal =(cart)=>{

    const t = document.querySelector('#tableContainer')
    const table = document.createElement('tbody')
    let cartCount = 0
    let totalPrice = 0
    cart.map(c =>{
        cartCount = cartCount + c.cantidad
        totalPrice = totalPrice + (c.precio * c.cantidad)
    })

    table.innerHTML = `
    <tr>
    <th>Unidades</th>
    <th id="totalUnits">${cartCount}</th>
    <th>Precio total</th>
    <th id="totalPrice">${totalPrice}</th>
    </tr>
    `
    t.appendChild(table)
}
