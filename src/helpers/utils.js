const TestDefault = {
  test: (value) => value !=='',
  message: (label) => `${label} es un campo necesario`
}
function formatError(e){
  switch(e.code){
    case 'auth/argument-error':
      return 'Ingreso mal los argumentos';
    case 'auth/invalid-email':
      return 'Campos requeridos vacios';
    case 'auth/email-already-in-use':
      return 'Correo Electronico ya esta siendo usado';
    default:
      console.log(e.code,e.message);
      return '';
  }
}

export {
  TestDefault,
  formatError
}