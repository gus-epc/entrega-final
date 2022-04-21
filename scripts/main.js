
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
    const listaUsuarios = ["Gustavo" , "Marco" , "Yael", ""]
    const listaContrasenias = ["Flores", "Serlik", "Roufe", ""]
    let usuario;
    usuario = document.querySelector("#usuario").value;
    let contrasenia;
    contrasenia = document.querySelector("#contrasenia").value;
    if (listaUsuarios.includes(usuario) && listaContrasenias.includes(contrasenia)) {
        document.getElementById("formulario").remove();
        let saludo = document.getElementById("saludo");
        saludo.innerText = `Hola ${usuario}`;
        let marcas = document.getElementById("marcas");

        marcas.insertAdjacentHTML('afterend','<im data-aos="flip-down" data-aos-duration="1500" class="marca" src="../assets/marcas/hannabach.png"  alt="hanabach">');
        
        marcas.insertAdjacentHTML('afterbegin','<div><img data-aos="flip-down" data-aos-duration="1500" class="marca" src="../assets/marcas/hannabach.png"  alt="hanabach"><h3 class="hannabach">HANNABACH</h3></div><div><img data-aos="flip-down" data-aos-duration="1500" class="marca" src="../assets/marcas/knobloch.png"  alt="knobloch"><h3 class="knobloch">KNOBLOCH</h3>    </div>   <div>        <img data-aos="flip-down" data-aos-duration="1500" class="marca" src="../assets/marcas/savarez.png"  alt="savarez">       <h3 class="savarez">SAVAREZ</h3>    </div>    <div>        <img data-aos="flip-down" data-aos-duration="1500" class="marca" src="../assets/marcas/d´addario.png"  alt="d´addario">        <h3 class="daddario">D´ADDARIO</h3>   </div>    <div >        <img data-aos="flip-down" data-aos-duration="1500" class="marca" src="../assets/marcas/augustine.png"  alt="augustine">       <h3 class="augustine">AUGUSTINE</h3>    </div>    <div>        <img data-aos="flip-down" data-aos-duration="1500" class="marca" src="../assets/marcas/sonatina.png"  alt="sonatina">        <h3 class="sonatina">SONATINA</h3>    </div>');


    }
    else {
        alert("Usuario no válido")
        alert(`Lo sentimos "${cupon}" no es un cupón válido`)
    }    
}
enviar.addEventListener("click", verificar);


