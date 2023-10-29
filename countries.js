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
    
    
        
        const h3 = document.createElement('h3');
    
    h3.innerText =`Country Name : ${country.name.official}`;
        div.appendChild(h3);

        const p = document.createElement('p');
        p.innerText= `Capital: ${country.capital}`;
        div.appendChild(p);
        countriesDiv.appendChild(div);
        

        // const button = document.createElement('button');
        // // button.addEventListener= onclick();
        // button.innerHTML  = `details`;
        // div.appendChild(button);
        // countriesDiv.appendChild(div);
       
    

    }
}