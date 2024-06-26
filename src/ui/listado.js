export function actualizarTotalPokemones(total) {
  const $totalPokemones = document.querySelector('#total-pokemones');
  $totalPokemones.textContent = total;
}

export function agregarPokemonAlListado(pokemon, callbackSeleccionPokemon) {
  const pokemonImg = pokemon.sprites.front_default;
  const pokemonNombre = pokemon.name;

  const $contenedor = document.createElement('div');
  const $imagen = document.createElement('img');
  const $contenedorTexto = document.createElement('div');
  const $textoImagen = document.createElement('a');

  $contenedor.classList.add('card', 'col-2', 'text-start', 'bg-warning');
  $contenedor.style.width = '150px';
  $contenedor.style.height = '170px';

  if (pokemonImg !== null) {
    $imagen.setAttribute('src', pokemonImg);
  } else {
    $imagen.setAttribute(
      'src',
      'https://github.com/fmdcba/pokedex/assets/95236196/a1f9187d-be6f-45d3-87b0-55dceffe7a12',
    );
  }

  $imagen.className = 'card-img-top';
  $imagen.style.width = '100px';

  $contenedorTexto.className = 'card-body';
  $textoImagen.classList.add('btn', 'btn-primary');
  $textoImagen.style.fontSize = 'small';
  $textoImagen.textContent = pokemonNombre;
  $textoImagen.id = pokemonNombre;
  $textoImagen.addEventListener('click', callbackSeleccionPokemon);

  const $listaPokemon = document.querySelector('#lista-pokemon');
  $listaPokemon.appendChild($contenedor);
  $contenedor.appendChild($imagen);
  $contenedor.appendChild($contenedorTexto);
  $contenedorTexto.appendChild($textoImagen);
}

export function mostrarPokemon(pokemon) {
  const $imagen = document.querySelector('#imagen-pokemon');
  const $nombre = document.querySelector('#nombre');
  const $id = document.querySelector('#id');
  const $experiencia = document.querySelector('#experiencia');
  const $tipo = document.querySelector('#tipo');
  const $habilidades = document.querySelector('#habilidades');
  const $altura = document.querySelector('#altura');
  const $peso = document.querySelector('#peso');

  const imagenPokemon = pokemon.sprites.front_default;

  if (imagenPokemon !== null) {
    $imagen.setAttribute('src', imagenPokemon);
  } else {
    $imagen.setAttribute(
      'src',
      'https://github.com/fmdcba/pokedex/assets/95236196/a1f9187d-be6f-45d3-87b0-55dceffe7a12',
    );
  }

  $imagen.setAttribute('alt', `imagen-del-pokemon-${pokemon.name}`);
  $nombre.textContent = pokemon.name;
  $nombre.classList.add('text-uppercase');
  $id.textContent = pokemon.id;
  $experiencia.textContent = pokemon.base_experience;
  $habilidades.innerHTML = '';
  $tipo.innerHTML = '';
  $altura.textContent = pokemon.height;
  $peso.textContent = pokemon.weight;
  pokemon.types.forEach((tipo) => {
    const $tipoTexto = document.createElement('span');
    $tipoTexto.textContent = tipo.type.name;
    $tipoTexto.classList.add('badge', 'text-bg-dark', 'mx-2');
    $tipo.appendChild($tipoTexto);
  });
  pokemon.abilities.forEach((habilidad) => {
    const $habilidadTexto = document.createElement('span');
    $habilidadTexto.textContent = habilidad.ability.name;
    $habilidadTexto.classList.add('badge', 'text-bg-dark', 'mx-2');
    $habilidades.appendChild($habilidadTexto);
  });
}
