import { array } from "./array.js";

// Retorna um array transformado em outro tipo de dado
// exemplo total de episodios
// accumulator navega em todas interações que temos.
// Então desta forma não é necessário criar variáveis temporárias pra executar logicas
// neste exemplo nossa função soma o total de episodios dos animes
export const reduce = array.reduce((accumulator, item) => {
  console.log('reduce accumulator: ', accumulator , ' item: ', item);
  return accumulator + (item.episodes);
}, 0); // 0 neste caso é o valor inicial porém pode ser um objeto, array ou outro tipo de dado.

console.log({ reduce });
