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

  $contenedor.classList.add('card', 'col-2', 'text-center');
  $contenedor.style.width = '150px';
  $contenedor.style.height = '170px';

  $imagen.setAttribute('src', pokemonImg);
  $imagen.className = 'card-img-top';
  $imagen.style.width = '100px';

  $contenedorTexto.className = 'card-body';
  $textoImagen.classList.add('btn', 'btn-primary');
  $textoImagen.style.fontSize = 'small';
  $textoImagen.textContent = pokemonNombre;
  $textoImagen.id = pokemonNombre;
  $textoImagen.addEventListener('click', callbackSeleccionPokemon);

  const $listaPokemon = document.querySelector('footer');
  $listaPokemon.appendChild($contenedor);
  $contenedor.appendChild($imagen);
  $contenedor.appendChild($contenedorTexto);
  $contenedorTexto.appendChild($textoImagen);
}

function mostrarInformacionPokemon(data) {
  const $nombre = document.querySelector('#nombre');
  const $numero = document.querySelector('#numero');
  const $experiencia = document.querySelector('#experiencia');
  const $tipo = document.querySelector('#tipo');
  const $habilidades = document.querySelector('#habilidades');
  const $altura = document.querySelector('#altura');
  const $peso = document.querySelector('#peso');
  $nombre.textContent = data.name;
  $numero.textContent = data.order;
  $experiencia.textContent = data.base_experience;
  $habilidades.innerHTML = '';
  $tipo.innerHTML = '';
  $altura.textContent = data.height;
  $peso.textContent = data.weight;
  data.types.forEach((tipo) => {
    const $tipoTexto = document.createElement('span');
    $tipoTexto.textContent = tipo.type.name;
    $tipoTexto.classList.add('badge', 'text-bg-primary', 'ps-2');
    $tipo.appendChild($tipoTexto);
  });
  data.abilities.forEach((habilidad) => {
    const $habilidadTexto = document.createElement('span');
    $habilidadTexto.textContent = habilidad.ability.name;
    $habilidadTexto.classList.add('badge', 'text-bg-warning', 'ps-2');
    $habilidades.appendChild($habilidadTexto);
  });
}

/* async function mostrarPokemon(evt) {
  const idPokemon = evt.target.id;
  const dataPokemon = await obtenerPokemon(idPokemon);

  const $img = document.querySelector('#imagen-pokemon');
  $img.setAttribute('src', dataPokemon.sprites.front_default);

  mostrarInformacionPokemon(dataPokemon);
} */

export function mostrarPokemon(poke) {
  console.log(poke);
}
