const initialState = {
    moviesList: [],
    moviesMode: '',
    infiniteScrollPage: 0,
    initialLoad: true
};

const moviesReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_LATEST_MOVIES':
            return {
                ...state,
                moviesMode: 'latest',
                infiniteScrollPage: 1,
                moviesList: [
                    ...action.movies
                ],
            };
        case 'SET_MORE_LATEST_MOVIES':
            return {
                ...state,
                moviesMode: 'latest',
                initialLoad: false,
                infiniteScrollPage: state.infiniteScrollPage + 1,
                moviesList: [
                    ...state.moviesList, 
                    ...action.movies
                ],
            }
        case 'SET_SEARCH_MOVIE':
            return {
                ...state,
                infiniteScrollPage: 1,
                initialLoad: true,
                moviesMode: 'search',
                moviesList: [
                    ...action.movies
                ]
            }
        case 'SEARCH_MORE_MOVIE':
            return {
                ...state,
                infiniteScrollPage: state.infiniteScrollPage + 1,
                initialLoad: true,
                moviesMode: 'search',
                moviesList: [
                    ...state.moviesList, 
                    ...action.movies
                ] 
            }     
        case 'SET_POPULAR_MOVIES':
            return {
                ...state,
                moviesMode: 'popular',
                initialLoad: false,
                infiniteScrollPage: 1,
                moviesList: [
                    ...action.movies
                ]
            }      
        case 'SET_MORE_POPULAR_MOVIES':
            return {
                ...state,
                moviesMode: 'popular',
                initialLoad: false,
                infiniteScrollPage: state.infiniteScrollPage + 1,
                moviesList: [
                    ...state.moviesList,
                    ...action.movies
                ]
            }
        case 'RESET_MOVIES_MODE':
            return {
                ...state,
                moviesMode: '',
                moviesList: [
                    ...state.moviesList
                ]
            };
        case 'SET_MOVIES_MODE_TO_SEARCH':
            return {
                ...state,
                moviesMode: 'search',
                moviesList: [
                    ...state.moviesList
                ]
            }
        default:
        return state
    }
}

export default moviesReducer;