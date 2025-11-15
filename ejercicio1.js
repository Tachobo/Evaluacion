import{calcularPromedio} from 'index.js';
alert(`en este programa se pedira al ususario registrar la cantidad de notas, las notas
    y en base a ello, se mostrara el promedio y rendimiento`);

function rendimientoEstudiante() {
    let cantidad = parseInt(prompt("Ingresar el número de notas"));
    let notas = [];

    for (let i = 0; i < cantidad; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
        notas.push(nota);
    }

    const resultado = calcularPromedio(notas);
    alert(`Promedio: ${resultado}
    Rendimiento: ${rendimiento}`);
}
rendimientoEstudiante();




// let cantidad = parseInt(prompt("Ingrese cuantas notas desea calcular"))
// let agregarNota = []
// let suma = 0;

// calcularPromedio(agregarNota, suma)
// console.log(calcularPromedio(cantidad))



// function calcularPromedio (cantidad){
//     for( let i = 1; i <= cantidad; i++){
//         let agregaNota = parseInt(prompt(`Ingrese la nota numero ${i}`)) 
//         suma+= agregaNota;   
//     }
//     let promedio = suma/cantidad;

//     if (promedio >4.0){
//         rendimiento = "alto";
//     }else if(promedio >2.9 && promedio< 4.0){
//         rendimiento = "medio";
//     }
//     else{ 
//         rendimiento = "bajo";
//     }
//     return{
//         Promedio: promedio,
//         Rendimiento: rendimiento
//     };
// }
