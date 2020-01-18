
//fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b4dc9a7257e17beac01da392c14b5fe9')
const dugme = document.getElementById('dugme');
function upis(){
    const grad = document.getElementById('grad').value;
    const podacilevo = document.getElementById('podacilevo');
    const podacidesno = document.getElementById('podacidesno');
    let sablon = ``;
    let sablon2 = ``;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${grad}&units=metric&appid=6e8fd375562bf0578b68cdbfca4821c3`)
    .then(response => response.json())
    .then(data => {
     console.log(data);
    
         sablon += `
             <h2>Temp: ${data.main.temp.toFixed(0)} &#186 </h2>
             <h1>City: ${data.name}</h1>
         `;

         sablon2 += `
         <img src="${'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png'}">
              <p>${data.weather[0].description}</p>
              <p>wind: ${data.wind.speed} m/s</p>
         `;
     
     podacilevo.innerHTML = sablon;
     podacidesno.innerHTML = sablon2;
    });

   
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${grad}&units=metric&appid=6e8fd375562bf0578b68cdbfca4821c3`)
.then(response => response.json())
.then(data2 => {
 console.log(data2);


 let dateOfWeek = "";
 const today = new Date().toString().slice(0, 10);
 const timeOfDayForCond = '15:00:00';  

 for (let i = 1; i <= 39; i++){
     if (data2.list[i].dt_txt.slice(0,10) != today && data2.list[i].dt_txt.slice(11,19) == timeOfDayForCond){
     dateOfWeek += `
     <div id="sutra">
             <p>${data2.list[i].dt_txt.slice(0,10)}</p>
             <img src="${'https://openweathermap.org/img/w/' + data2.list[i].weather[0].icon + '.png'}">
             <p class="predicted-weather-conditions">${data2.list[i].weather[0].description}</p>
             <p class="predicted-max">${data2.list[i].main.temp_max.toFixed(0) + "&#186"}</p> 
     </div>`;
     } 
 }
 weekly.innerHTML = dateOfWeek;



});

}

dugme.addEventListener('click', upis);

