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
  <p>Gender: ${data.results[i].gender}</p>
  <p>Hair Color: ${data.results[i].hair_color}</p>

  </div>
`
}
ispis.innerHTML = sablon
})

}
pretraga()


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
  <p>Passengers: ${data.results[i].passengers}</p>
  <p>Model: ${data.results[i].model}</p>

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

  </div>
`
}
vrstaIspis.innerHTML = sablon2
})
}
zaVrste()
