import { array } from "./array.js";

// Retorna  um boolean ( true | false) para a condição informaad, caso todos os itens atendem a x condição.
export const every = array.every((anime) => anime.episodes < 500);

console.log({ every });
