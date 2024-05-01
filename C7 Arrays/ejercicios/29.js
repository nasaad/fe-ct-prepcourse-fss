function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) {
    return null;
  }

  let max = Math.max(...numeros);

  let sumaTeorica = (max * (max + 1)) / 2;
  let sumaReal = numeros.reduce((total, num) => total + num, 0);

  let numeroFaltante = sumaTeorica - sumaReal;

  return numeroFaltante === 0 ? null : numeroFaltante;
}



module.exports = encontrarNumeroFaltante;