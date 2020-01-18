

function pretraga(){
  const ispisInput = document.getElementById("ispis")
  let sablon = ""
  fetch(`https://swapi.co/api/people`)
.then(response => response.json())
.then(data => {
  console.log(data)
  for(i=0; i<data.results.length; i++){
sablon += `
<div>
  <h1>Name: ${data.results[i].name}</h1>
  <p>Birth year: ${data.results[i].birth_year}</p>
  <p>Height: ${data.results[i].height}</p>
  <p>Mass: ${data.results[i].mass}</p>
  <p>Gender: ${data.results[i].gender}</p>
  <p>Eye color: ${data.results[i].eye_color}</p>
  <p>Hair Color: ${data.results[i].hair_color}</p>

  </div>
`
}
ispis.innerHTML = sablon
})

}
pretraga()

function zaFilmove(){
  const filmIspisInput = document.getElementById("filmIspis")
  let sablon2 = ""
  fetch(`https://swapi.co/api/vehicles`)
.then(response => response.json())
.then(data => {
  console.log(data)
  for(i=0; i<data.results.length; i++){
sablon2 += `
<div>
  <h1>Name: ${data.results[i].name}</h1>
  <p>Model: ${data.results[i].model}</p>
  <p>Manufacturer: ${data.results[i].manufacturer}</p>
  <p>Length: ${data.results[i].length}</p>
  <p>Passsengers: ${data.results[i].passengers}</p>
<p>Max Atmosphering speed: ${data.results[i].max_atmosphering_speed}</p>
<p>Cost in credits: ${data.results[i].cost_in_credits}</p>
  </div>
`
}
filmIspis.innerHTML = sablon2
})
}
zaFilmove()

function zaPlanete(){
  const planetaIspisInput = document.getElementById("planetaIspis")
  let sablon2 = ""
  fetch(`https://swapi.co/api/planets`)
.then(response => response.json())
.then(data => {
  console.log(data)
  for(i=0; i<data.results.length; i++){
sablon2 += `
<div>
  <h1>Name: ${data.results[i].name}</h1>
  <p>Climate: ${data.results[i].climate}</p>
  <p>Terrain: ${data.results[i].terrain}</p>
<p>Gravity: ${data.results[i].gravity}</p>
<p>Population: ${data.results[i].population}</p>
  </div>
`
}
planetaIspis.innerHTML = sablon2
})
}
zaPlanete()

function zaBrodove(){
  const brodIspisInput = document.getElementById("brodIspis")
  let sablon2 = ""
  fetch(`https://swapi.co/api/starships`)
.then(response => response.json())
.then(data => {
  console.log(data)
  for(i=0; i<data.results.length; i++){
sablon2 += `
<div>
  <h1>Name: ${data.results[i].name}</h1>
  <p>Model: ${data.results[i].model}</p>
  <p>Manufacturer: ${data.results[i].manufacturer}</p>
  <p>Length: ${data.results[i].length}</p>
  <p>Passengers: ${data.results[i].passengers}</p>


  </div>
`
}
brodIspis.innerHTML = sablon2
})
}
zaBrodove()

function zaVrste(){
  const brodIspisInput = document.getElementById("vrstaIspis")
  let sablon2 = ""
  fetch(`https://swapi.co/api/species`)
.then(response => response.json())
.then(data => {
  console.log(data)
  for(i=0; i<data.results.length; i++){
sablon2 += `
<div>
  <h1>Name: ${data.results[i].name}</h1>
  <p>Language: ${data.results[i].language}</p>
  <p>Classification: ${data.results[i].classification}</p>
<p>Average height: ${data.results[i].average_height}</p>
<p>Average Lifespan: ${data.results[i].average_life_span}</p>
  </div>
`
}
vrstaIspis.innerHTML = sablon2
})
}
zaVrste()
