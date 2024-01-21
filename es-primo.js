function esPrimo (num) {
  if (num <= 1) {
    return false
  }
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  
  return true
}

for (let i = 0; i < 101; i++) {
  if (esPrimo(i)) {
    console.log(i)
  }
}