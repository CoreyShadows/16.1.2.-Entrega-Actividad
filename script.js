function buscarAnime() {
  const id = document.getElementById('anime-id').value;
  const card = document.getElementById('anime-card');

  if (!id) {
    card.innerHTML = '<p>Por favor, ingresa un ID válido.</p>';
    return;
  }

  fetch(`https://api.jikan.moe/v4/anime/${id}`)
    .then(res => res.json())
    .then(data => {
      const anime = data.data;
      card.innerHTML = `
        <h2>${anime.title}</h2>
        <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
        <p><strong>Sinopsis:</strong> ${anime.synopsis}</p>
        <p><strong>Tipo:</strong> ${anime.type}</p>
        <p><strong>Emisión:</strong> ${anime.aired.string}</p>
        <p><strong>Score:</strong> ${anime.score}</p>
      `;
    })
    .catch(err => {
      card.innerHTML = `<p>Error al cargar el anime: ${err.message}</p>`;
    });
}
