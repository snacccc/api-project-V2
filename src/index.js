let key= "https://imdb-api.com/en/API/SearchMovie/k_jtrut4iw/inception";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

console.log(key);

function getData() {
    searchInput.input;    
    let input = searchInput.value;
    console.log(input);
    let key = `https://imdb-api.com/en/API/SearchMovie/k_jtrut4iw/${input}`;
    console.log(key);
    getInfo(key);
}

const getInfo = async function (key) {
    try {

        const response = await fetch(key);
        const data = await response.json();
        console.log(data);   

        const movieID = data.results[0]['id'];
        const movieTitle = data.results[0]['title'];
        const moviePoster = data.results[0]['title'];
        console.log(movieID);
        console.log(movieTitle);
        console.log(moviePoster);

    } catch (error) {
        console.log(error);
    }
}