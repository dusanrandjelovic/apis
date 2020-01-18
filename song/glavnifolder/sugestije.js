const frazaInput = document.getElementById('fraza')
const rezultatDiv = document.getElementById('rezultat')
const dugme = document.getElementById('dugme')
const forma = document.getElementById('forma')
const loader = document.getElementById('loader')

function ucitatiSugestije(e) {
  e.preventDefault()
  loader.style.display = 'inline'
  rezultatDiv.innerHTML = ''
  fetch(`https://api.lyrics.ovh/suggest/${frazaInput.value}`)
    .then(response => response.json())
    .then(response => {
      loader.style.display = 'none'
      const sugestije = response.data
      let sablon = ``
      for (let i = 0; i < sugestije.length; i++) {
        const pesma = sugestije[i]
        sablon += `
          <div>
            <h3>${pesma.artist.name} - ${pesma.title}</h3>
            <p>On album: <i>${pesma.album.title}</i></p>
            <img src="${pesma.album.cover}" alt="Omot albuma">
            <div id="dizer">
              <audio src="${pesma.preview}" controls></audio>
              <a href="${pesma.link}" title="Deezer" target="_blank"><img src="http://gigiradics.com/wp-content/uploads/2015/04/deezer-logo-circle.png" width="50" alt="Deezer" title="Pusti na Deezeru"></a>
            </div>
            <p>Duration: ${pesma.duration}s</p>
            <p>Explicit content: ${pesma.explicit_lyrics ? "Yes" : "No"}</p>
          </div>
        `
      }
      rezultatDiv.innerHTML = sablon
    })
}

dugme.addEventListener('click', ucitatiSugestije)
forma.addEventListener('submit', ucitatiSugestije)
