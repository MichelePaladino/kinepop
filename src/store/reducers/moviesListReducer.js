const initialState = {
    movies: [],
    page: 1,
};

const moviesListReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'POPULATE_MOVIES_LIST':
            return {
                ...state,
                movies: [...state.movies, ...action.movies],
            }
        case 'RESET_MOVIES_LIST': 
            return {
                ...state,
                page: 1,
                movies: [],
            }
        case 'INCREMENT_PAGE_MOVIES_LIST':
            return {
                ...state,
                movies: [...state.movies],
                page: state.page + 1
            }
        default:
        return state
    }
}

export default moviesListReducer;