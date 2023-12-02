import { array } from "./array.js";

// Retorna um array atualizado de acordo com a condição informada
export const filter = array.map((anime, index) => {
  return {
    ...anime,
    order: index,
    large: anime.episodes > 1000
  };
}).filter((x) => x.large);

console.log({ filter });
