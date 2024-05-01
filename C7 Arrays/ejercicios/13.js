function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let numeroPares = [];
  for (let i = 0; i < array.length; i++){
    if ( typeof array[i] === "number" && array[i] % 2 === 0){
      numeroPares.push(array[i]);
    }
  }
  return numeroPares;
}

module.exports = filtrarNumerosPares;
