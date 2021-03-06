
// import movies from './movies.js';


class DataSource {
 
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=cecb2163f48864d224cc35f55f0e30fd&language=en-US&query=${keyword}&page=1&include_adult=false`)
        .then(response => {
            // console.log(response);
            return response.json()
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }

    static getPopular() {
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cecb2163f48864d224cc35f55f0e30fd&language=en-US&page=1`)
        .then(response => {
            // console.log(response);
            return response.json()
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
}

export default DataSource;