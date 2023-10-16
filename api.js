function users(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=>displayUsers(data));

}       

function displayUsers(data){
    const ul = document.getElementById('users');
    for (const user of data){
        //console.log(user);
        const li = document.createElement('li');
        li.innerText= `name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
}

function quote (){

    fetch('https://api.kanye.rest')
    .then(res=> res.json())
    .then(data=>displayQuote(data));
}
function  displayQuote (quote){
    const quotes = document.getElementById('quote');
    quotes.innerText = quote.quote;

};

function buddy (){
    fetch('https://randomuser.me/api/?results=5')
    .then(res=> res.json())
    .then(data=>displayBuddy(data))
}
buddy()

function displayBuddy (data){
    const buddies = data.results;
    const buddiesDiv =document.getElementById('buddies');
    for (const buddy of buddies ){
   // console.log(buddy.email);
    const p = document.createElement('p');
    p.innerHTML= `Name : ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email}`;
    buddiesDiv.appendChild(p);
}
} 
