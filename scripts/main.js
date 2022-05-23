const listaUsuarios = ["Gustavo" , "Marco" , "Yael",];
const listaContrasenias = ["Flores", "Serlik", "Roufe",];
let car = document.getElementById("car");
let carrito = document.getElementById("carrito");
const enSesion = []
const usuarioSesionado = JSON.parse(localStorage.getItem("validado"));
let listaDeProductos = document.getElementsByClassName("producto-nuevo");

const productosHannabach = [
  {modelo: "HANNABACH 1869",
  precio: "999",
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

  car.addEventListener("click",()=>{
  if (carrito.classList.contains("abierto")){
    carrito.classList.remove("abierto");
  }
  else{
    carrito.classList.add("abierto");
  }  })

    


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
          }, 100);
                 
      }   

    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Lo sentimos, el usuairo no es válido!',
      })
    }   
}
function saludar(){
  document.getElementById("formulario").remove();
  let saludo = document.getElementById("saludo");
  saludo.innerText = `Hola ${usuarioSesionado}!`;
}
function imprimir() {
  obtenerDatos()

    }  

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

      if (carrito.querySelector("h2")!= null) {
        carrito.querySelector("h2").remove()
      }
      carrito.classList.add("abierto");

      agregarElemento(titulo, costo, fotito)
}  
     }
 }})
}





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





function agregarElemento(titulo, costo, fotito){
      let producto = document.createElement("div");
      let productos = document.getElementById("productos");
      let listaProductos = document.getElementsByClassName("producto-nuevo");
    
      productoNuevo =  `
      <div id="${titulo}" class="producto-nuevo">
      <img src="${fotito}" alt="${titulo}">
        <h5>${titulo}</h5>
        <p class="costo-producto">${costo}</p>
        <input type="number" class="cantidad" min="1" value="1">
        <button type="button" class="btn btn-danger">Eliminar</button>
      </div>   
      `    

     
for(let i=0; i < listaProductos.length; i++) {
    if(listaProductos[i].getAttribute("id")== titulo) {
        let timerInterval
        Swal.fire({
          icon: 'error',
          title: 'Este producto ya está en el carrito!',
          html: '',
          timer: 1000,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
        return;
      }
     }
    
    producto.innerHTML = productoNuevo;
    productos.append(producto);
    let eliminarElemento = document.getElementsByClassName("btn-danger");
    for (let i=0; i < eliminarElemento.length; i++) {
      let boton = eliminarElemento[i];
    boton.addEventListener("click", eliminarDelCarrito);
    }
    let agregarCantidad = document.getElementsByClassName("cantidad"); 
    for (let i=0; i < agregarCantidad.length; i++) {
      let boton = agregarCantidad[i];
    boton.addEventListener("click", cambiarCantidad);
    }
    calcularTotal();
    
    }
    
function eliminarDelCarrito(e) {
        let boton = e.target
             boton.parentElement.parentElement.remove();   
      calcularTotal()
}
function cambiarCantidad(e) {
      let cantidad = e.target;
      if (cantidad <= 0) {
        cantidad = 1;
      }
      calcularTotal();
}
function calcularTotal() {
      let total = 0;
      for (const producto of listaDeProductos) {
        let precioProducto = producto.querySelector(".costo-producto").innerText.replace("$", "");
        let cantidad = parseInt(producto.querySelector(".cantidad").value)
        titulo = producto.querySelector("h5").innerText
        total += precioProducto * cantidad;
      }
    
      document.querySelector("#total").innerText = `Total = $${total}`;


}

      let comprar = document.getElementById("comprar")
      comprar.addEventListener("click", mostrarTotal = () =>{
       total = document.querySelector("#total").innerText.replace("Total = $", "")
        if (total > 0) {
            Swal.fire({
            title: 'Muchas gracias por tu compra!',
            text: `Serás redireccionado a la pasarela de pago por un total de $${total}`,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'ok!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Tu compra ha sido realizada',
                'Gracias por probar el simulador',
                'success'
              )
            }
          })}
          else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Tu carrito está vacio',
              footer: 'Agrega algunos productos '
            })
          }
        }
      )






console.log(total);
let enviar = document.querySelector("#enviar");
    if (enviar != null) {
          enviar.addEventListener("click", () => {
        verificar()
    });
    
    }

