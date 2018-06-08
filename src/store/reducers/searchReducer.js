const initialState = {
    movies: [],
    title: '',
    page: 1,
};

const searchReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'POPULATE_SEARCH':
            return {
                ...state,
                page: 1,
                movies: [...action.movies],
            }
        case 'SET_TITLE_FILTER_SEARCH':
            return {
                ...state,
                movies: [...state.movies],
                title: action.title
            };
        case 'ADD_SEARCH_MOVIES':
            return {
                ...state,
                movies: [...state.movies, ...action.movies],
                page: state.page+1
            };
        default:
        return state
    }
}

export default searchReducer;