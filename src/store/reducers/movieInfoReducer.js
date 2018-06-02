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
    title: '',
    videos: [],
    similar: [],
    cast: [],
}

const movieInfoReducer = (state=initialState, { 
    type, 
    backdrop_path,
    budget,  
    id,
    overview,
    release_date,
    revenue,
    runtime,
    tagline,
    title,
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
                budget,
                id,
                overview,
                release_date,
                revenue,
                runtime,
                tagline,
                title,
                videos: videos.results,
                similar: similar.results,
                cast: credits.crew.slice(0,1).concat(credits.cast.slice(0,14)),
            };
        default:
            return state;
    }
}

export default movieInfoReducer;