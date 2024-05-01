const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:
   const a = objeto[propiedad];

   for(let i = 0; i< objeto.length; i++){
     if( objeto[i] === 1){
      return undefined;

     }else{
      return false;
     }
      
   }

   return a;
};

module.exports = obtenerValorPropiedad;
