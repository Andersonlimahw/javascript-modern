import { array } from "./array.js";

// Retorna  um boolean ( true | false) para a condição informaada
export const some = array.some((anime) => anime.episodes > 1000);

console.log({ some });
