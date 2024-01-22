function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}


function sumar(a, b) {
    return a + b;
}


function sumarYVerificarPrimo(a, b) {
    const suma = sumar(a, b);
    return esPrimo(suma);
}
