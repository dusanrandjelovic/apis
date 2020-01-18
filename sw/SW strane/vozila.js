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
  <p>Length: ${data.results[i].length}</p>

  </div>
`

}
filmIspis.innerHTML = sablon2
})
}
zaFilmove()

function newPage(){

}
  //fetch(`https://swapi.co/api/vehicles/?page=2`)
