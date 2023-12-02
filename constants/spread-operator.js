
// Obejcts:
const user = {
  name: 'Lemon',
  age: 30,
  instagram: '@anderson.lima.dev',
  skills: ['back-end', 'front-end', 'mobile', 'arquitecture']
}

const { name, age } = user; // Referência por chave

console.log('Destructuring object => name: ', name, ', age: ', age);

// Merge: quebra o principio da imutabilidade, onde n devemos mudar um dado.

Object.assign(user, { active: false });

console.log('user with merge: ', user);

// Spread : Espelhador operator
// devemos criar um novo objeto clonando as informacoes do objeto principal.
const newUser = { ...user, active: true };
console.log('user with spread: ', newUser);

// Arrays
const newUserWithSkills = {
  ...user,
  skills: [
    ...user.skills, // Spread : preferivelmente no começo pois só pode haver uma chave para cada valor, caso contrário o valor de baixo sobrescreverá o de cima.
    'Marketing' // nova prop
  ],
  active: true
};
console.log('user with spread: skills updated ', newUserWithSkills);

