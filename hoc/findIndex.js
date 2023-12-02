import { array } from "./array.js";

// Retorna o indice do primeiro item encontrado na lista
export const findIndex = array.findIndex((anime) => {
  const isOnePiece = anime.name === 'One Piece';
  console.log('is one piece?', isOnePiece);
  return isOnePiece;
});

console.log({ findIndex });
