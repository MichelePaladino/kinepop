const initialState = [];

const moviesReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_LATEST_MOVIES':
            return [
                ...state,
                ...action.movies
            ];
        case 'SET_SEARCH_MOVIE':
            return [
                ...action.movies
            ]
        default:
        return state
    }
}

export default moviesReducer;