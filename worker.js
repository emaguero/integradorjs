let vEntrada =200;

let descEstudiante =0.8;
let descTrainee =0.5;
let descJunior =0.15;
let btnResumen = document.getElementById("resumen");
let totalPagar = document.getElementById("totalAPagar");

let form =document.getElementById('formulario');
let categoria =document.getElementById('categoria');
let nombre =document.getElementById('nommbre');
let apellido =document.getElementById('apellido');
let correo =document.getElementById('correo');
let cantidad =document.getElementById("cantidad");


function calcular(){
    let total = cantidad.value * vEntrada;
    // condicionar por descuento

    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descEstudiante);
            break;
        case "trainee":
            total = total - (total * descTrainee);
                break;
        case "junior":
            total = total - (total * descJunior);
            break;
        default:
            break
    }

    totalPagar.textContent = 'Total a Pagar: $ ${total}'; 
}
btnResumen.addEventListener('Click',(e)=>{
    e.preventDefault();
    calcular();
});