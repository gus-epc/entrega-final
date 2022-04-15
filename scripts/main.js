document.getElementById("marcas").style.display = "none";
// let precio;
// const producto = {
//     hannabach: 1000,
//     knobloch: 2000,
//     savarez: 3000,
//     daddario: 4000,
//     augustine: 5000,
//     sonatina: 6000
// }

// const carrito = [];

let enviar;
    enviar = document.querySelector("#enviar");

const verificar = () => {
    const listaNombres = ["Gustavo" , "Marco" , "Yael", ""]
    const listaApellidos = ["Flores", "Serlik", "Roufe", ""]
    let nombre;
    nombre = document.querySelector("#nombre").value;
    let apellido;
    apellido = document.querySelector("#apellido").value;
    if (listaNombres.includes(nombre) && listaApellidos.includes(apellido)) {
        document.getElementById("marcas").style.display = "";

    }
    else {
        alert("Usuario no válido")
    }    
}
enviar.addEventListener("click", verificar);


// document.getElementById("marcas").remove();


