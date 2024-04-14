import { obtenerPokemones, obtenerPokemon } from './api/pokemon.js';

import {
  actualizarTotalPokemones,
  agregarPokemonAlListado,
  mostrarPokemon,
} from './ui/listado.js';

async function actualizarPokemon(e) {
  mostrarPokemon(await obtenerPokemon(e.target.id));
}

async function inicializar() {
  const listaPokemones = await obtenerPokemones();
  actualizarTotalPokemones(listaPokemones.count);

  const pokemones = Object.entries(listaPokemones.results);
  pokemones.forEach(async (pokemon) => {
    agregarPokemonAlListado(
      await obtenerPokemon(pokemon[1].name),
      actualizarPokemon,
    );
  });
}

inicializar();
