const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export async function obtenerPokemones() {
  const listadoPokemon = await fetch(`${BASE_URL}`);
  return await listadoPokemon.json();
}

export async function obtenerPokemon(nombre) {
  const pokemon = await fetch(`${BASE_URL}${nombre}`);
  return await pokemon.json();
}
