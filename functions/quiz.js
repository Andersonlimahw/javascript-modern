const createUser = () => ({ user: 'Mateus' });

console.log(createUser());

function user(userName) { this.name = userName; }

console.log(typeof new user('Mateus'));

function greetings(message = 'Welcome!') { console.log(message) }

greetings('Bem-vindo!');

greetings();