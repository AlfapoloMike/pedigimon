import { cleanHTML } from "./cleanHtml.js"

export const showMenu = () =>{

    const container = document.querySelector('.loginContainer')
    const menu = document.createElement('div')
    menu.classList = 'container'
    menu.innerHTML = `
        <button id="registerBtn" class="option registerBtn">Registrarse</button>
        <button id="loginBtn" class="option loginBtn">Ingresar</button>
    `
    container.appendChild(menu)
    container.addEventListener('click', (e)=>{
        if(e.target.id === 'registerBtn'){
            cleanHTML(container)
            showForm()
        }
        if(e.target.id === 'loginBtn'){
            cleanHTML(container)
            showLogin()
        }
    })
}

export const showLogin = () =>{
    const container = document.querySelector('.loginContainer')
    const login = document.createElement('div')
    login.classList = 'login'
    login.innerHTML = `
        <label class="loginOption" for="userLogin">Inicio de sesión</label>
        <input class="loginOption" type="text" placeholder="Usuario">
        <input class="loginOption" type="password" placeholder="Contraseña">
        <button class="loginOption">Ingresar</button>
        <a id="createAccount" href="#">Crear una cuenta</a>
    `
    container.appendChild(login)
    container.addEventListener('click',(e)=>{
        if(e.target.id === 'createAccount'){
            cleanHTML(container)
            showForm()
        }
    })
}

export const showForm = () =>{
    const container = document.querySelector('.loginContainer')
    const register = document.createElement('form')
    register.classList = 'register'
    register.innerHTML = `
    <label class="formOption" for="user">Usuario</label>
    <input class="formOption" type="text" placeholder="ejemplo123" required>
    <label class="formOption" for="password">Contraseña</label>
    <input class="formOption"  type="password" required> 
    <label class="formOption" for="mail">Correo electronico</label>
    <input class="formOption" type="email" placeholder="ejemplo@hotmail.com" required pattern="[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+">
    <label class="formOption" for="birthDate">Fecha de nacimiento</label>
    <input class="formOption" type="date">
    <div class="formOption">
        <label  for="promotion">Recibir promociones sobre la web</label>
        <input  type="checkbox">
    </div>
    <input class="formOption" type="submit">
    `
    container.appendChild(register)
    container.addEventListener('submit',()=>{
       cleanHTML(container)
       showSucces()
    })
}
export const showSucces = () =>{
    const container = document.querySelector('.loginContainer')
    const succes = document.createElement('form')
    succes.classList = 'register'
    succes.innerHTML =`
    <h3>Felicidades !! Se ha registrado de manera exitosa. </h3>
    <a href="#" id="loginRedirection">Conectarse</a>
    `
    container.appendChild(succes)
    container.addEventListener('click',(e)=>{
        if(e.target.id === 'loginRedirection'){
            cleanHTML(container)
            showLogin()
        }
    })
}