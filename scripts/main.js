const listaUsuarios = ["Gustavo" , "Marco" , "Yael"]
const listaContrasenias = ["Flores", "Serlik", "Roufe"]

const enSesion = []
const usuarioSesionado = JSON.parse(localStorage.getItem("validado"));

if (usuarioSesionado != null) {
    document.getElementById("formulario").remove();
    let saludo = document.getElementById("saludo");
    saludo.innerText = `Hola ${usuarioSesionado}`;

    
    marcas.innerHTML = `
        <div class="m">
            <img class="marca" src="../assets/hannabach/1869.jpg"  alt="1869">
            <pre>
              <h5>HANNABACH 1869
$1,149
              </h5>
            </pre>
        </div>
        <div class="m">
          <img class="marca" src="../assets/hannabach/exclusive.jpg"  alt="exclusive">
          <pre>
            <h5>HANNABACH
EXCLUSIVE
$827
            </h5>
          </pre>
        </div>
        <div class="m">
          <img class="marca" src="../assets/hannabach/goldin.jpg"  alt="goldin">
          <pre>
            <h5>HANNABACH GOLDIN
$765
            </h5>
          </pre>
        </div>
        <div class="m">
          <img class="marca" src="../assets/hannabach/carbon.jpg"  alt="carbon">
          <pre>
            <h5>HANNABACH
SP CARBÓN
$613
            </h5>
          </pre>
        </div>
        <div class="m">
          <img class="marca" src="../assets/hannabach/cus-car.jpg"  alt="cus-car">
          <pre>
            <h5>HANNABACH
CM CARBÓN
$596
            </h5>
          </pre>
        </div>
        <div class="m">
          <img class="marca" src="../assets/hannabach/requinto.jpg"  alt="requinto">
          <pre>
            <h5>HANNABACH
REQUINTO
$499
            </h5>
          </pre>
         </div>
         <div class="m">
          <img class="marca" src="../assets/hannabach/cus.png"  alt="cus">
          <pre>
            <h5>HANNABACH
CUSTOM-MADE 
$425  
            </h5>
          </pre>
        </div>
        <div class="m">
          <img class="marca" src="../assets/hannabach/815.png"  alt="815">
          <pre>
            <h5>HANNABACH
SILVER SPECIAL
$765
            </h5>
          </pre>
        </div>
        <div class="m">
          <img class="marca" src="../assets/hannabach/815.png"  alt="815">
          <pre>
            <h5>HANNABACH
SILVER SPECIAL
$412
            </h5>
          </pre>
        </div>
        <div class="m">
          <img class="marca" src="../assets/hannabach/600.png"  alt="600">
          <pre>
            <h5>HANNABACH 600
$268
            </h5>
          </pre>
        </div>
        <div class="m">
          <img class="marca" src="../assets/hannabach/500.png"  alt="500">
          <pre>
            <h5>HANNABACH 500
$268
            </h5>
          </pre>
        </div>`
}




let enviar = document.querySelector("#enviar");


const verificar = () => {

    let usuario = document.querySelector("#usuario").value;
    let contrasenia = document.querySelector("#contrasenia").value;

    
    if (listaUsuarios.includes(usuario) && listaContrasenias.includes(contrasenia)) {
        document.getElementById("formulario").remove();
        enSesion.push(usuario)
        localStorage.setItem('validado', JSON.stringify(enSesion))

        let saludo = document.getElementById("saludo");
        saludo.innerText = `Hola ${usuario}`;
        let marcas = document.getElementById("marcas");
        
        marcas.innerHTML = `
            <div class="m">
                <img class="marca" src="../assets/hannabach/1869.jpg"  alt="1869">
                <pre>
                  <h5>HANNABACH 1869
$1,149
                  </h5>
                </pre>
            </div>
            <div class="m">
              <img class="marca" src="../assets/hannabach/exclusive.jpg"  alt="exclusive">
              <pre>
                <h5>HANNABACH
EXCLUSIVE
$827
                </h5>
              </pre>
            </div>
            <div class="m">
              <img class="marca" src="../assets/hannabach/goldin.jpg"  alt="goldin">
              <pre>
                <h5>HANNABACH GOLDIN
$765
                </h5>
              </pre>
            </div>
            <div class="m">
              <img class="marca" src="../assets/hannabach/carbon.jpg"  alt="carbon">
              <pre>
                <h5>HANNABACH
SP CARBÓN
$613
                </h5>
              </pre>
            </div>
            <div class="m">
              <img class="marca" src="../assets/hannabach/cus-car.jpg"  alt="cus-car">
              <pre>
                <h5>HANNABACH
CM CARBÓN
$596
                </h5>
              </pre>
            </div>
            <div class="m">
              <img class="marca" src="../assets/hannabach/requinto.jpg"  alt="requinto">
              <pre>
                <h5>HANNABACH
REQUINTO
$499
                </h5>
              </pre>
             </div>
             <div class="m">
              <img class="marca" src="../assets/hannabach/cus.png"  alt="cus">
              <pre>
                <h5>HANNABACH
CUSTOM-MADE 
$425  
                </h5>
              </pre>
            </div>
            <div class="m">
              <img class="marca" src="../assets/hannabach/815.png"  alt="815">
              <pre>
                <h5>HANNABACH
SILVER SPECIAL
$765
                </h5>
              </pre>
            </div>
            <div class="m">
              <img class="marca" src="../assets/hannabach/815.png"  alt="815">
              <pre>
                <h5>HANNABACH
SILVER SPECIAL
$412
                </h5>
              </pre>
            </div>
            <div class="m">
              <img class="marca" src="../assets/hannabach/600.png"  alt="600">
              <pre>
                <h5>HANNABACH 600
$268
                </h5>
              </pre>
            </div>
            <div class="m">
              <img class="marca" src="../assets/hannabach/500.png"  alt="500">
              <pre>
                <h5>HANNABACH 500
$268
                </h5>
              </pre>
            </div>`




    }
    else {
        alert("Usuario no válido")
        alert(`Lo sentimos "${cupon}" no es un cupón válido`)
    }    
}
enviar.addEventListener("click", () => {
    verificar()
});


