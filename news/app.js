const apiKey = '28e794b91ebb48539ed6ef447e3b22bf';
const main = document.querySelector('main');
const izvori = document.querySelector('#izvori');
const defaultSource = 'the-washington-post';

window.addEventListener('load', async e => {
  updateNews();
  await updateSources();

  izvori.value = defaultSource;
  izvori.addEventListener('change', e => {
      updateNews(e.target.value);
  });
});

async function updateSources(){
    const res = await fetch(`https://newsapi.org/v1/sources`);
    const json = await res.json();

    izvori.innerHTML = json.sources.map(src => `<option value="${src.id}">${src.name}</option>`).join('\n');
}

async function updateNews(izvor = defaultSource){
    const res = await fetch(`https://newsapi.org/v1/articles?source=${izvor}&apiKey=${apiKey}`);
    const json = await res.json();

    main.innerHTML = json.articles.map(ispis).join('\n');
}

function ispis(article){  // umesto article i gore src moze bilo koja rec
    return `
    <div class="omotacarticle">
<a href="${article.url}" target="_blank">
<h2>${article.title}</h2>
<img src="${article.urlToImage}">
<p>${article.description}</p>
</a>
    </div>
    `;
}