function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let mayoresADiez = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && array[i] > 10) { 
      mayoresADiez++; 
    }
  }

  return mayoresADiez; 
}

module.exports = contarElementosMayoresA10;
