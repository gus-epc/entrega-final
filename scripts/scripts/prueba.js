const marcas = [
    {nombre: "HANNABACH", 
    class: "hannabach",
    scr:"../assets/marcas/hannabach.png"},
    {nombre: "KNOBLOCH",
    class: "knobloch",
    scr:"assets/marcas/knobloch.png"},
    {nombre: "SAVAREZ",
    class: "savarez",
    scr:"assets/marcas/savarez.png"},
]              

for (const marca of marcas) {
    let nodo = document.createElement("div");
    nodo.innerHTML =
    `<a class="m" href="">
    <img data-aos="flip-down" data-aos-duration="1500" class="marca" src="${marca.scr}"  alt="${marca.class}">"</img>
    <h3 class="${marca.class}">${marca.nombre}</h3>
  </a>`
    document.getElementById("marcas").appendChild(nodo);
}     
              
              
