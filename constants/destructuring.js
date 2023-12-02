
// Obejcts:
const user = {
  name: 'Lemon',
  age: 30,
  instagram: '@anderson.lima.dev',
  skills: ['back-end', 'front-end', 'mobile', 'arquitecture']
}

const { name, age } = user; // Referência por chave

console.log('Destructuring object => name: ', name, ', age: ', age);


// Arrays:
const array = user.skills === 1;
const [firstSkill, secondSkill] = array; // Referência por indice, ex: 0, 1, 2
console.log('Destructuring array => firstSkill:', firstSkill , ' secondSkill: ', secondSkill)
