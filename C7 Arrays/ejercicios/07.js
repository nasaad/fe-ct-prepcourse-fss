function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.map(Number).sort((a, b) => a - b);
}



module.exports = ordenarArray;
