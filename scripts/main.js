const listaUsuarios = ["Gustavo" , "Marco" , "Yael",];
const listaContrasenias = ["Flores", "Serlik", "Roufe",];
// const nuestrasMarcas = [
//   {nombre: "HANNABACH", 
//   id: "hannabach",
//   src:"../assets/marcas/hannabach.png"},
//   {nombre: "KNOBLOCH",
//   id: "knobloch",
//   src:"../assets/marcas/knobloch.png"},
//   {nombre: "SAVAREZ",
//   id: "savarez",
//   src:"../assets/marcas/savarez.png"},
//   {nombre: "D'ADDARIO",
//   id: "daddario",
//   src:"../assets/marcas/daddario.png"},
//   {nombre: "AUGUSTINE",
//   id: "augustine",
//   src:"../assets/marcas/augustine.png"},
//   {nombre: "SONATINA",
//   id: "sonatina",
//   src:"../assets/marcas/sonatina.png"}
// ];
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
let car = document.getElementById("car");
let carrito = document.getElementById("carrito");













car.addEventListener("click",()=>{
if (carrito.classList.contains("abierto")){
  carrito.classList.remove("abierto");
}
else{
  carrito.classList.add("abierto");
}
  
})





const enSesion = []
const usuarioSesionado = JSON.parse(localStorage.getItem("validado"));

if (usuarioSesionado != null) {
saludar();
imprimir();
}
setTimeout(() => {
accionarHannabach();
accionarOtra();
}, 100);


         
              
const verificar = () => {

    let usuario = document.querySelector("#usuario").value;
    let contrasenia = document.querySelector("#contrasenia").value;

    
    if (listaUsuarios.includes(usuario) && listaContrasenias.includes(contrasenia)) {
      Swal.fire(
        'Inicio de sesión exitoso!',
        '',
        'success'
      )
        enSesion.push(usuario)
        localStorage.setItem('validado', JSON.stringify(enSesion))

          document.getElementById("formulario").remove();
          let saludo = document.getElementById("saludo");
          saludo.innerText = `Hola ${usuario}!`;
        imprimir();
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

let enviar = document.querySelector("#enviar");
if (enviar != null) {
      enviar.addEventListener("click", () => {
    verificar()
});

}




setTimeout(() => {
  
}, 0);

function accionarHannabach() {

    let marcas = document.getElementById("marcas");

   document.getElementById("hannabach").addEventListener("click", (e) => {
      e.preventDefault();
      marcas.innerHTML = ""
     for (const prod of productosHannabach) {
       marcas.innerHTML += `
       <div>
       <div class="card bg-black" style="width: 18rem;">
       <img src="${prod.imgSrc}" class="card-img-top" alt="${prod.modelo}">
       <div class="card-body">
         <h5 class="card-title">${prod.modelo}</h5>
         <p class="card-text">$${prod.precio}</p>
         <button type="button" class="btn btn-secondary agregar">Agregar al carrito</button>
       </div>
     </div>
     </div>`

    let agregar = document.getElementsByClassName("agregar");
    for (let i=0; i < agregar.length; i++) {
      let boton = agregar[i];
      boton.addEventListener("click", agregarCarrito)
     function agregarCarrito(e) {
      let boton = e.target;
      let elemento = boton.parentElement;
      let titulo = elemento.querySelector("h5").innerText;
      let costo = elemento.querySelector("p").innerText;
      let paElemento = elemento.parentElement;
      let fotito = paElemento.querySelector(".card-img-top").src;

      agregarElemento(titulo, costo, fotito)
}  
     }
 }})
}


function agregarElemento(titulo, costo, fotito){
  let producto = document.createElement("div");
  let productos = document.getElementById("productos");
  let listaProductos = document.getElementsByClassName("producto");
 
 for(let i=0; i < listaProductos.length; i++) {
  if(listaProductos[i].getAttribute("id")== titulo) {
      alert("Este producto ya existe en el carrito");

  }
 }}


function accionarOtra() {
  let falla = "Lo sentimos, estamos trabajando en esta sección!"
  function error(){
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: `${falla}`,
  })
  }  
  document.getElementById("knobloch").addEventListener("click", function(e){
    e.preventDefault()
    error()
  });
  document.getElementById("savarez").addEventListener("click", function(e){
    e.preventDefault()
    error();
  });
  document.getElementById("daddario").addEventListener("click", function(e){
    e.preventDefault()
    error()
  });
  document.getElementById("augustine").addEventListener("click", function(e){
    e.preventDefault()
    error()
  });
  document.getElementById("sonatina").addEventListener("click", function(e){
    e.preventDefault()
    error()
  })
}
function saludar(){
  document.getElementById("formulario").remove();
  let saludo = document.getElementById("saludo");
  saludo.innerText = `Hola ${usuarioSesionado || usuario}!`;
}

function imprimir() {
  obtenerDatos()
    function obtenerDatos(){
      fetch("../scripts/listas.json")
        .then(response => response.json())
        .then((resultado) => {
          let nuestrasMarcas = resultado;
          nuestrasMarcas.forEach(marca => {
             let nodo = document.createElement("div");
            nodo.innerHTML =
              `<a class='m' id='${marca.id}' href=''>
                <img class='marca' src='${marca.src}'  alt='${marca.id}'>
                <h3>${marca.nombre}</h3>
              </a>`;
            document.getElementById("marcas").appendChild(nodo)
            ;})    
          }
          );
    }
    } 
  
// function imprimir() {
// obtenerDatos()
//   function obtenerDatos(){
//     fetch("../scripts/listas.json")
//       .then(response => response.json())
//       .then((resultado) => {
//         let nuestrasMarcas = resultado;
//         for (const marca of nuestrasMarcas) {      
//           let nodo = document.createElement("div");
//           nodo.innerHTML =
//             `<a class='m' id='${marca.id}' href=''>
//               <img class='marca' src='${marca.src}'  alt='${marca.id}'>
//               <h3>${marca.nombre}</h3>
//             </a>`;
//           document.getElementById("marcas").appendChild(nodo)
//           ;}    
//       })
//       .catch(error => console.log(error))
//       console.log(resultado);
  
//   }
//   } 
