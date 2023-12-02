// Não funciona sem configurar o babel com nodejs
import { sayHello } from './say-hello.js'; // named export

import { sayHello as hello } from './say-hello.js'; // alias

sayHello('Lemon');

hello('Lemon alias')
