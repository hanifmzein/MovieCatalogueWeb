import '../component/search-bar.js';
import '../component/movie-item';
import '../component/movie-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");
    
    const showPopularMovie = async () => {
        try {
            const result = await DataSource.getPopular();
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    }

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result)
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.innerHTML = "";
        movieListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    showPopularMovie();
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;