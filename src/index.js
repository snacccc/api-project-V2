let key= "https://imdb-api.com/en/API/SearchMovie/k_jtrut4iw/inception";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const movieName = document.getElementById("movieName");
const moviePoster = document.getElementById("moviePoster");
const movieError = document.getElementById("movieError");

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

        movieError.innerText = "";
        movieError.style.opacity = 0;

        const response = await fetch(key);
        const data = await response.json();
        console.log(data);   

        if (!data.results[0]) {
            movieError.innerText = "Unable to find specified movie";
            movieError.style.opacity = 1;
            return;
        } else {

        const movieTitle = data.results[0]['title'];
        const movieImage = data.results[0]['image'];
        console.log(movieTitle);
        console.log(moviePoster);
        movieName.innerHTML = movieTitle;
        moviePoster.src = movieImage;

        }

    } catch (error) {
        console.log(error);
        movieError.innerText = "Something went wrong";
        movieError.style.opacity = 1;
        return;
    }
}