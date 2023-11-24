// Tem o seu próprio this / contexto
// o valor padrão é undefined a  menos que seja retornado um valor com return;
function myFunction() {
  this.name = 'Lemon';

  return this.name; 
}

console.log(typeof myFunction()); // retornará um string

console.log(new myFunction()); // tranforma a função num objeto / classe

// Tem o this do contexto que foi criado
// herda o this de onde foi criada, no browser por exemplo seria window, e no nodejs seria do node.
const myArrowFunction = () => {
 this.name = 'Anderson';
 return name;
}

console.log(myArrowFunction()); // não tem o this, então retornará Lemon.

function handleFunctions() {
  this.lastName = 'Lemon handler';
  return this.lastName;
}

handleFunctions();