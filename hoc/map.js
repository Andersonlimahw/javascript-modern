import { array } from "./array.js";

// Retorna o primeiro item encontrado na lista
export const map = array.map((anime, index) => {
  return {
    ...anime,
    order: index,
    large: anime.episodes > 1000
  };
});

console.log({ map });
