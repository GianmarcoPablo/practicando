const formulario = document.querySelector("#formulario")
let links = []
const resultado = document.querySelector("#resultado")

cargarEventListeners()
function cargarEventListeners() {
  formulario.addEventListener("submit", agregarLink)
}

function agregarLink(e){
    e.preventDefault()
    const input = document.querySelector("#input").value
   if(input.length > 0){
        const linkObj = {
            id: Date.now(),
            text: input
        }
        links = [...links, linkObj]
        crearHTML()
        formulario.reset()
   }else{
        mostrarError("El campo no puede estar vacio")
   }
}

function crearHTML() {
    limpiarHTML()
    links.forEach(link=>{
        const parrafo = document.createElement("p")
        parrafo.textContent = link.text
        parrafo.classList.add("text-center")
        resultado.appendChild(parrafo)
    })
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}




function mostrarError(mensaje) {
    const error = document.createElement("p")
    error.textContent = mensaje
    error.classList.add("error")
    setTimeout(() => {
        error.remove()
    }, 3000);

    const errores = document.querySelectorAll(".error")
    if(errores.length === 0) {
        formulario.appendChild(error)
    }
}