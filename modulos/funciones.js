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

/*Función calcular impuesto*/
function calcularImpuestoUnitario(valor, porcentaje) {
  return valor * (porcentaje / 100);
}

const procesarImpuestos = function() {
    const cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
    let impuestoTotal = 0;

    for (let i = 1; i <= cantidad; i++) {
        const valor = parseFloat(prompt(`Ingrese el valor del producto ${i}:`));
        const porcentaje = parseFloat(prompt(`Ingrese el porcentaje de impuesto para el producto ${i}:`));
        const impuesto = calcularImpuestoUnitario(valor, porcentaje);
        impuestoTotal += impuesto;
}
return impuestoTotal;
};

const totalImpuesto = procesarImpuestos();
console.log(`El impuesto total acumulado es: $${totalImpuesto}`);


/*Función buscar elemento*/
const buscarElemento = (lista, elemento) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return true;
    }
}
    return false;
};

// Solicitar entradas al usuario
const cantidad = parseInt(prompt("¿Cuántos elementos tendrá el arreglo?"));
const lista = [];

for (let i = 0; i < cantidad; i++) {
    const valor = prompt(`Ingresa el elemento #${i + 1}:`);
    lista.push(valor);
}

const elementoBuscado = prompt("¿Qué elemento deseas buscar en el arreglo?");

// Ejecutar la búsqueda
const encontrado = buscarElemento(lista, elementoBuscado);

// Mostrar el resultado
if (encontrado) {
    console.log(`El elemento "${elementoBuscado}" SÍ se encuentra en el arreglo.`);
} else {
    console.log(`El elemento "${elementoBuscado}" NO se encuentra en el arreglo.`);
}
