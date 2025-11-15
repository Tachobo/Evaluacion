/*Función de calcular promedio*/
export function calcularPromedio (notas){
    let suma = 0;
    for( let i = 0; i <= notas.length; i++){
        suma+= notas [i];   
    }
    let promedio = suma/notas.length;
    let rendimiento= "";

    if (promedio >4.0){
        rendimiento = "alto";
    }else if(promedio >2.9 && promedio< 4.0){
        rendimiento = "medio";
    }
    else{ 
        rendimiento = "bajo";
    }
    return{
        Promedio: promedio,
        Rendimiento: rendimiento
    };
}

/*funcion validar acceso*/

const validarAcceso = function(edad, contraseñaAcceso){
    const edadMinima = 18;
    const contraseñaUnica = "arrozconleche";

    if (edad>= edadMinima && contraseñaUnica === contraseñaAcceso){
        return "Bienvenido";
    }else{
        return "Incorrecto, acceso denegado";
    }
}

/*Funcion generar tabla de multiplicar*/
const generarTabla = (numero) => {
    const resultados = [];
    for (let i = 1; i <= 10; i++) {
    resultados.push(numero * i);
}
return resultados;
};




// // APLICA 
// export function calcularPromedio (cantidad){
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