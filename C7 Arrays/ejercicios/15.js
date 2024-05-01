function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let valorIndice = array[0];
  let indiceMasGrande = 0;

  for (let i = 0; i < array.length; i++){
    if ( array[i] > valorIndice) {
      valorIndice = array[i];
      indiceMasGrande = i;
    }
  }
  return indiceMasGrande;
}

module.exports = encontrarIndiceMayor;

