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
        case 'RESET_SEARCH_MOVIES': 
            return {
                ...state,
                page: 1,
                movies: [],
            }
        case 'INCREMENT_PAGE_SEARCH_MOVIES':
            return {
                ...state,
                movies: [...state.movies],
                page: state.page + 1
            }
        case 'SET_TITLE_FILTER_SEARCH':
            return {
                ...state,
                movies: [...state.movies],
                title: action.title
            };
        case 'RESET_TITLE_FILTER':
            return {
                ...state,
                movies: [...state.movies],
                title: ''
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