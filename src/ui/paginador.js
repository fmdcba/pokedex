import { actualizarListado } from '../index.js';
import { obtenerPokemones } from '../api/pokemon.js';

const POKEMONES_POR_PAGINA = 20;

export function crearPaginador(totalPokemones) {
  const $paginador = document.querySelector('.pagination');
  const totalPaginas = Math.ceil(totalPokemones / POKEMONES_POR_PAGINA);

  let contador = 1;

  while (contador <= totalPaginas) {
    const $pagina = document.createElement('li');
    const $link = document.createElement('a');

    $pagina.className = 'page-item';
    $link.className = 'page-link';
    $link.setAttribute('href', '#');
    $link.textContent = contador;
    $link.onclick = manejarCambioDePagina;

    $pagina.appendChild($link);
    $paginador.appendChild($pagina);
    contador++;
  }
}

async function manejarCambioDePagina(e) {
  const numeroDePagina = e.target.textContent;
  const offset = (numeroDePagina - 1) * 20;

  const nuevoListado = await obtenerPokemones(offset);
  actualizarListado(nuevoListado);
}
