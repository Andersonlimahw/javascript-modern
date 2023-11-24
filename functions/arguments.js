//Argumentos
function sum() {
  console.log(arguments); // variável especial do javascript.
  console.log(Object.values(arguments)); // variável especial do javascript.
}

function sumRestOperators(customArgument, ...arguments) {
  console.log('customArgument => ', customArgument); // variável especial do javascript.
  console.log('arguments => ', arguments); // variável especial do javascript.
}

// Herda os argumentos de onde foi criada
const sumRestOperatorsArrow = (customArgument, ...arguments) => {
  console.log('customArgument => ', customArgument); // variável especial do javascript.
  console.log('arguments => ', arguments); // variável especial do javascript.
}

// Variações de arrow functions:
// Padrão:
const arrowSample = (customArgument, ...arguments) => {
  console.log('customArgument => ', customArgument); // variável especial do javascript.
  console.log('arguments => ', arguments); // variável especial do javascript.
  return customArgument;
}

// Short sintax
const arrowSampleShortSintax = (customArgument, ...arguments) => customArgument;

// Short sintax com parenteses
const arrowSampleShortSintaxParenteses = (customArgument, ...arguments) => (
    customArgument === 1 
    ? 'OK' 
    : 'NOK'
  );


sum(1,2,3,4,5);
sumRestOperators(9, 1,2,3,4,5);
sumRestOperatorsArrow(9, 1,2,3,4,5);
arrowSample('arrow');
arrowSampleShortSintax('arrow sintax');
arrowSampleShortSintaxParenteses('arrow sintax');