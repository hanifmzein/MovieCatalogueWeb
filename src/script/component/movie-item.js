class MovieItem extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    set movie(movie) {
        this._movie = movie;
        this.render();
    }
  
    render() {

        

        this.shadowDOM.innerHTML = `
        <style>
            * {
                box-sizing: border-box;
            }
            
            .fan-art-movie {
                width: 100%;
                height: 200px;
                object-fit: cover;
                object-position: center;
                display: block;
            }
            
            .movie-info {
                line-height: 1.5;
                font-size: 0.9em;
                padding: 15px;
                background: #fafafa;
            }
            
            .movie-info > h2 {
                margin-top: 0;
            }
            
            .movie-info > p {
                padding: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #555555;
                background: #eeeeee;
                font-size: 0.8em;
            }
        </style>
        <img class="fan-art-movie" src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" alt="Fan Art">
        <div class="movie-info">
            <h2>${this._movie.title}</h2>
            <p>${this._movie.overview.substring(1,30)}</p>
        </div>`;
    }
 }
  
 customElements.define("movie-item", MovieItem);