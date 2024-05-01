function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  var nuevoPepe = {...objetoUsuario, password : nuevaPassword};
  return nuevoPepe;
}

module.exports = actualizarPassword;
