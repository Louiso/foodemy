export default class InputValidator{
  constructor(label, validators = []){
    this.label = label;
    this.value = '';
    this.validators = validators;
    this.errors = [];
  }
  validar(){
    const errors = [];
    this.validators.forEach(({test, message})=>{
      if(!test(this.value)) errors.push(message(this.label));    
    });
    this.errors = errors;
  }
}

// const username = new inputForm('Nombre de usuario');

// username.validators.push({
//   test: (value) => value !== '',
//   message: (name) => `${name} es requerido`
// },{
//   test: (value) => validator.isEmail(value),
//   message: (name) => `${name} no es Email`
// });

// username.validar();
