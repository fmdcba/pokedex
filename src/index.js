import { obtenerPokemones, obtenerPokemon } from './api/pokemon.js';

import {
  actualizarTotalPokemones,
  agregarPokemonAlListado,
} from './ui/listado.js';

async function actualizarPokemon() {
  await obtenerPokemon(mostrarPokemon());
}

async function inicializar() {
  const listaPokemones = await obtenerPokemones();
  actualizarTotalPokemones(listaPokemones.count);

  const pokemones = Object.entries(listaPokemones.results);
  pokemones.forEach(async (pokemon) => {
    agregarPokemonAlListado(
      await obtenerPokemon(pokemon[0]),
      actualizarPokemon,
    );
  });
}

inicializar();
