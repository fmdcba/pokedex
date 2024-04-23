import { obtenerPokemones, obtenerPokemon } from './api/pokemon.js';

import {
  actualizarTotalPokemones,
  agregarPokemonAlListado,
  mostrarPokemon,
} from './ui/listado.js';

import { crearPaginador } from './ui/paginador.js';

async function actualizarPokemon(e) {
  mostrarPokemon(await obtenerPokemon(e.target.id));
}

async function inicializar() {
  const listaPokemones = await obtenerPokemones();
  const totalPokemones = listaPokemones.count;
  actualizarTotalPokemones(listaPokemones.count);
  crearPaginador(totalPokemones);
  actualizarListado(listaPokemones);
}

export async function actualizarListado(listaPokemones) {
  const $listaPokemon = document.querySelector('#lista-pokemon');
  $listaPokemon.innerHTML = '';
  const pokemones = Object.entries(listaPokemones.results);
  pokemones.forEach(async (pokemon) => {
    agregarPokemonAlListado(
      await obtenerPokemon(pokemon[1].name),
      actualizarPokemon,
    );
  });
}

inicializar();
