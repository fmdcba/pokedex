const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const LIMITE_POKEMONES = 20;

export async function obtenerPokemones(offset = 0, limite = LIMITE_POKEMONES) {
  const listadoPokemon = await fetch(
    `${BASE_URL}?offset=${offset}&limite=${limite}`,
  );
  return await listadoPokemon.json();
}

export async function obtenerPokemon(nombre) {
  const pokemon = await fetch(`${BASE_URL}${nombre}`);
  return await pokemon.json();
}
