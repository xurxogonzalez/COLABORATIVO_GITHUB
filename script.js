//Ejercicios de repaso examen JavaScript
//Ejercicio 1: crea una función llamada esPrimo con un parámetro numero.

function esPrimo (numero) {
    if (numero % numero ===0){
        console.log (`El número ${numero}es primo por que es divisible por si mismo`)
    }else if(numero % 1 ===0){
        console.log(`El número ${numero}es primo por que es divisible por 1`)
    }else {
        console.log (`El número no es primo`);
    }
    return;
}