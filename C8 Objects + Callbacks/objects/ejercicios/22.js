function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   if (str1.length !== str2.length){
      return false;
   }
   const ana = str1.toLowerCase().split("").sort().join("");
   const pepe = str2.toLowerCase().split("").sort().join("");

   return ana === pepe;

}

module.exports = esAnagrama;

