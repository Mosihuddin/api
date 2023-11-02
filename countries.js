function loadCountry(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=>displaycountry(data))
}
loadCountry();

function displaycountry(countries){
   
    const countriesDiv = document.getElementById('countries');
   
    

  for(const country of countries){
     
   const div = document.createElement('div');
   
    div.classList.add('country');
    
    div.innerHTML =`
     
    <h3> Country Name: ${country.name.official}
</h3>   
<p> Capital : ${country.capital}</p>
<button onclick = "loadCountriesByName('${country.name.official}')"> Details </button>
    `;
    countriesDiv.appendChild(div);
    
        // my old code :)
    //     const h3 = document.createElement('h3');
    
    // h3.innerText =`Country Name : ${country.name.official}`;
    //     div.appendChild(h3);

    //     const p = document.createElement('p');
    //     p.innerText= `Capital: ${country.capital}`;
       
    //     div.appendChild(p);
        
        

    //     // const button = document.createElement('button');
    //     // // button.addEventListener= onclick();
    //     // button.innerHTML  = 'details';
    //     // div.appendChild(button);
    //     // countriesDiv.appendChild(div);
    //     // div.innerHTML=
    //     // `<button></button>`

    //     const button = document.createElement('button');
    //     button.innerHTML='details';
    //     div.appendChild(button);
    //     countriesDiv.appendChild(div);
       
    

    }
}

function loadCountriesByName(name){
    
    const url =` https://restcountries.com/v3.1/name/${name}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data=> DisplayCountryDetail(data[0]));
}

function DisplayCountryDetail(country){
    console.log(country);
  const countrydiv = document.getElementById('country-detail');
  countrydiv.innerHTML= `
    <h4>${country.name.official}</h4>
    <p>${country.capital}</p>
    <img src ="${country.flags.png}">
  
                  `
}


// function displayDetails(){
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data=>displaycountry(data))
// }