function loadCountry(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=>displaycountry(data))
}
loadCountry();

function displaycountry(countries){
    //console.log(countries);
    const countriesDiv = document.getElementById('countries');
    

  for(const country of countries){
     

    
    const li = document.createElement('li');
  li.innerText =`Country Name : ${country.name.official}   Capital: ${country.capital}`;
    countriesDiv.appendChild(li);
  
};

}