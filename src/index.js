let key1= "https://imdb-api.com/en/API/SearchMovie/k_jtrut4iw/inception";
let key2= "https://imdb-api.com/en/API/Posters/k_jtrut4iw/tt1375666";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

console.log(key1);
console.log(key2);

function getData(e) {
    let input = searchInput.textContent;
    console.log(input);
}

searchInput.addEventListener('input', getData);
searchBtn.addEventListener('click', getData);