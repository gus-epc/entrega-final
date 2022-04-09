const listaNombres = ["Gustavo" , "Marco" , "Yael"]
const listaApellidos = ["Flores", "Serlik", "Roufe"]
let nombre;
do {
    nombre = prompt("Por favor ingresa tu nombre");
   verificacion =(listaNombres.includes(nombre));
} while (verificacion == false);
let apellido;
do {
    apellido = prompt("Por favor ingresa tu apellido");
    verificacion =(listaApellidos.includes(apellido));
} while (verificacion == false);


let precio;
const producto = {
    hannabach: 1000,
    knobloch: 2000,
    savarez: 3000,
    daddario: 4000,
    augustine: 5000,
    sonatina: 6000
}

const carrito = [];
do{
    let eleccion = prompt("Elige un producto");
    carrito.push(eleccion)
    precio = producto[eleccion];
    let cupon = prompt("Ingresa tu cupón");
    if (cupon == "descuento10") {
        precio *= .9;
        alert(`Su descuento ha sido aplicado, el total del producto es ${precio}`)
    }
    else if (cupon == "descuento20") {
        precio *= .8;
        alert(`Su descuento ha sido aplicado, el total del producto es ${precio}`)
    }
    else{
       alert(`Lo sentimos "${cupon}" no es un cupón válido` )
    }
    decision = confirm(`Sus productos en el carrito son ${carrito}, ¿Quiere comprar otra cosa?`)

} while( decision == true);
alert("Gracias por probar el simulador")

