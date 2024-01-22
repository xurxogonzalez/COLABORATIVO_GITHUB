    //Crea una función que determine si un número es primo o no
function esPrimo (numero) {
    let message = `${numero} es un número primo.`
    for (i = numero - 1; i > 1; i--) {
        resto = numero % i
        if (resto === 0) {
            message = `${numero} no es un número primo.`
            return false
        }
    }
    return true
}