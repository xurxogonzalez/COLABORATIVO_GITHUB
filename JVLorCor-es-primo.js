function esPrimo(numero) {
    for (i = 2; i < numero - 1; i++) {
      if(numero % i === 0) {
        return false
      }
    }
    return true
  }
  console.log(esPrimo())