const listaUsuarios = ["Gustavo" , "Marco" , "Yael",];
const listaContrasenias = ["Flores", "Serlik", "Roufe",];
const marcas = [
  {nombre: "HANNABACH", 
  id: "hannabach",
  src:"../assets/marcas/hannabach.png"},
  {nombre: "KNOBLOCH",
  id: "knobloch",
  src:"../assets/marcas/knobloch.png"},
  {nombre: "SAVAREZ",
  id: "savarez",
  src:"../assets/marcas/savarez.png"},
  {nombre: "D'ADDARIO",
  id: "daddario",
  src:"../assets/marcas/daddario.png"},
  {nombre: "AUGUSTINE",
  id: "augustine",
  src:"../assets/marcas/augustine.png"},
  {nombre: "SONATINA",
  id: "sonatina",
  src:"../assets/marcas/sonatina.png"}
];
const productosHannabach = [
  {modelo: "HANNABACH 1869",
  precio: "1,149",
  imgSrc: "../assets/hannabach/1869.jpg"
  },
  {modelo: "HANNABACH EXCLUSIVE",
  precio: "827",
  imgSrc: "../assets/hannabach/exclusive.jpg"
  },
  {modelo: "HANNABACH GOLDIN",
  precio: "765",
  imgSrc: "../assets/hannabach/goldin.jpg"
  },
  {modelo: "HANNABACH SP CARBÓN",
  precio: "596",
  imgSrc: "../assets/hannabach/cus-car.jpg"
  },
  {modelo: "HANNABACH CUSTOM-MADE",
  precio: "425",
  imgSrc: "../assets/hannabach/cus.png"
  },
  {modelo: "HANNABACH SILVER SPECIAL",
  precio: "765",
  imgSrc: "../assets/hannabach/815.png"
  },

];
const enSesion = []
const usuarioSesionado = JSON.parse(localStorage.getItem("validado"));

if (usuarioSesionado != null) {
    document.getElementById("formulario").remove();
    let saludo = document.getElementById("saludo");
    saludo.innerText = `Hola ${usuarioSesionado}!`;
for (const marca of marcas) {      
  let nodo = document.createElement("div");
  nodo.innerHTML =
    `<a class='m' id='${marca.id}' href=''>
      <img class='marca' src='${marca.src}'  alt='${marca.id}'>
      <h3>${marca.nombre}</h3>
    </a>`;
  document.getElementById("marcas").appendChild(nodo)
  ;}    
}
setTimeout(() => {
accionarHannabach();
accionarOtra();
}
, 0);
         
              


let enviar = document.querySelector("#enviar");


const verificar = () => {

    let usuario = document.querySelector("#usuario").value;
    let contrasenia = document.querySelector("#contrasenia").value;

    
    if (listaUsuarios.includes(usuario) && listaContrasenias.includes(contrasenia)) {
      Swal.fire(
        'Inicio de sesión exitoso!',
        '',
        'success'
      )
        document.getElementById("formulario").remove();
        enSesion.push(usuario)
        localStorage.setItem('validado', JSON.stringify(enSesion))

        let saludo = document.getElementById("saludo");
        saludo.innerText = `Hola ${usuario}!`;
  
        for (const marca of marcas) {      
          let nodo = document.createElement("div");
          nodo.innerHTML =
            `<a class="m" id="${marca.id}" href="">
              <img  class="marca" src='${marca.src}'  alt="${marca.id}">
              <h3>${marca.nombre}</h3>
            </a>`;
          document.getElementById("marcas").appendChild(nodo);}  
          setTimeout(() => {
            accionarHannabach();
            accionarOtra();
            }, 0);
                     
      }    
    
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Lo sentimos, el usuairo no es válido!',
      })
    }    
}
enviar.addEventListener("click", () => {
    verificar()
});


function accionarHannabach() {

    let marcas = document.getElementById("marcas");
    document.getElementById("hannabach").addEventListener("click", function(e){
      e.preventDefault()

    })
   document.getElementById("hannabach").addEventListener("click", () => {
     marcas.innerHTML = ""
     for (const prod of productosHannabach) {
       marcas.innerHTML += `
       <div class="card bg-black" style="width: 18rem;">
       <img src="${prod.imgSrc}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${prod.modelo}</h5>
         <p class="card-text">$${prod.precio}</p>
         <button type="button" class="btn btn-secondary">Agregar al carrito</button>
       </div>
     </div>`
       
     }
 })
}
function accionarOtra() {
  let falla = "Lo sentimos, estamos trabajando en esta sección!"
  document.getElementById("knobloch").addEventListener("click", function(e){
    e.preventDefault()
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${falla}`,
    })
  });
  document.getElementById("savarez").addEventListener("click", function(e){
    e.preventDefault()
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${falla}`,
    })
  });
  document.getElementById("daddario").addEventListener("click", function(e){
    e.preventDefault()
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${falla}`,
    })
  });
  document.getElementById("augustine").addEventListener("click", function(e){
    e.preventDefault()
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${falla}`,
    })
  });
  document.getElementById("sonatina").addEventListener("click", function(e){
    e.preventDefault()
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${falla}`,
    })
  })
}