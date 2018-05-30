const initialState = {
    loaded: false,
    backdrop_path: "",
    budget: 0,
    id: 0,
    overview: '',
    release_date: '',
    revenue: 0,
    runtime: 0,
    tagline: '',
    videos: [],
    similar: [],
    cast: [],
    director: ''
}

const movieInfoReducer = (state=initialState, { 
    type, 
    backdrop_path,  
    id,
    overview,
    release_date,
    runtime,
    tagline,
    videos,
    similar,
    credits
} ) => {
    switch (type) {
        case 'SET_MOVIE_INFO':
            return {
                loaded: true,
                type, 
                backdrop_path,  
                id,
                overview,
                release_date,
                runtime,
                tagline,
                videos: videos.results,
                similar: similar.results,
                cast: credits.cast.slice(0,15),
                director: credits.crew[0]
            };
        default:
            return state;
    }
}

export default movieInfoReducer;