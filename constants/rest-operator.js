// Obejcts: Rest operator
const user = {
    name: 'Lemon',
    age: 30,
    instagram: '@anderson.lima.dev',
    skills: ['back-end', 'front-end', 'mobile', 'arquitecture']
  };

// restOperator precisa ser empre a ultima prop

const { skills, ...restOperator } = user;
console.log('skills: ', skills, ' restOperator: ', ...restOperator);
