const API = 'https://pokeapi.co/api/v2';

async function traerPokemones() {
  const pokemones = await fetch(`${API}/pokemon`);
  const resultadoJSON = await pokemones.json();
  return resultadoJSON;
}

async function mostrarPokemones() {
  const listaPokemones = await traerPokemones();

  const $totalPokemones = document.querySelector('#total-pokemones');
  $totalPokemones.textContent = listaPokemones.count;

  const pokemones = Object.entries(listaPokemones.results);

  console.log(pokemones);

  pokemones.forEach(async (pokemon) => {
    const urlPokemon = pokemon[1].url;
    const imgUrl = await obtenerImagenPokemon(urlPokemon);
    const nombrePokemon = await obtenerNombrePokemon(urlPokemon);
    const idPokemon = await obtenerIdPokemon(urlPokemon);

    mostrarImagenPokemon(imgUrl, nombrePokemon, urlPokemon);
  });
}

async function obtenerNombrePokemon(url) {
  const resultado = await fetch(url);
  const resultadoJSON = await resultado.json();
  return resultadoJSON.name;
}

async function obtenerImagenPokemon(url) {
  const imagen = await fetch(`${url}`);
  const imagenJSON = await imagen.json();
  return imagenJSON.sprites.front_default;
}

function mostrarImagenPokemon(imgUrl, nombre, url) {
  const $contenedor = document.createElement('div');
  const $imagen = document.createElement('img');
  const $contenedorTexto = document.createElement('div');
  const $textoImagen = document.createElement('p');

  $contenedor.classList.add('card', 'col-2', 'text-center');
  $contenedor.style.width = '150px';
  $contenedor.style.height = '150px';
  $contenedor.addEventListener('click', mostrarPokemon(url));

  $imagen.setAttribute('src', imgUrl);
  $imagen.className = 'card-img-top';
  $imagen.style.width = '100px';

  $contenedorTexto.className = 'card-body';
  $textoImagen.className = 'card-text';
  $textoImagen.style.fontSize = '10px';
  $textoImagen.textContent = nombre;

  const $listaPokemon = document.querySelector('footer');
  $listaPokemon.appendChild($contenedor);
  $contenedor.appendChild($imagen);
  $contenedor.appendChild($contenedorTexto);
  $contenedorTexto.appendChild($textoImagen);
}

function mostrarPokemon(url) {
  alert(url);
}

mostrarPokemones();
