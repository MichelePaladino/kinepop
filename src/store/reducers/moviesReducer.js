const initialState = {
    moviesList: [],
    moviesMode: '',
    infiniteScrollPage: 0
};

const moviesReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_LATEST_MOVIES':
            return {
                ...state,
                moviesMode: 'latest',
                infiniteScrollPage: state.infiniteScrollPage + 1,
                moviesList: [
                    ...state.moviesList, 
                    ...action.movies
                ],
            };
        case 'SET_SEARCH_MOVIE':
            return {
                ...state,
                infiniteScrollPage: 1,
                moviesMode: 'search',
                moviesList: [
                    ...action.movies
                ]
            }
        case 'SEARCH_MORE_MOVIE':
            return {
                ...state,
                infiniteScrollPage: state.infiniteScrollPage + 1,
                moviesMode: 'search',
                moviesList: [
                    ...state.moviesList, 
                    ...action.movies
                ] 
            }           
        case 'RESET_PAGE':
            return {
                ...state,
                infiniteScrollPage: 1,
                moviesList: [
                    ...state.moviesList
                ]
            };
        default:
        return state
    }
}

export default moviesReducer;