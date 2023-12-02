import { array } from "./array.js";

// Retorna o primeiro item encontrado na lista
export const find = array.find((anime) => {
  const isOnePiece = anime.name === 'One Piece';
  console.log('is one piece?', isOnePiece);
  return isOnePiece;
});

console.log({ find });
