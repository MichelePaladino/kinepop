const initialState = {
    listMovies: [],
    latestMovies: false,
    infiniteScrollPage: 0
};

const moviesReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_LATEST_MOVIES':
            return {
                ...state,
                latestMovies: true,
                infiniteScrollPage: state.infiniteScrollPage + 1,
                listMovies: [
                    ...state.listMovies, 
                    ...action.movies
                ],
            };
        case 'SET_SEARCH_MOVIE':
            return {
                ...state,
                infiniteScrollPage: 1,
                latestMovies: false,
                listMovies: [
                    ...action.movies
                ]
            }
        case 'SEARCH_MORE_MOVIE':
            return {
                ...state,
                infiniteScrollPage: state.infiniteScrollPage + 1,
                latestMovies: false,
                listMovies: [
                    ...state.listMovies, 
                    ...action.movies
                ] 
            }           
        case 'RESET_PAGE':
            return {
                ...state,
                infiniteScrollPage: 1,
                listMovies: [
                    ...state.listMovies
                ]
            };
        default:
        return state
    }
}

export default moviesReducer;