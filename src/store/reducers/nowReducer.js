const initialState = {
    movies: [],
    page: 1,
    loaded: false,
};

const nowReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'POPULATE_NOW':
            return {
                ...state,
                loaded: true,
                page: 1,
                movies: [...action.movies],
            }
        // case 'RESET_NOW_MOVIES': 
        //     return {
        //         ...state,
        //         page: 1,
        //         movies: [],
        //     }
        // case 'INCREMENT_PAGE_NOW_MOVIES':
        //     return {
        //         ...state,
        //         movies: [...state.movies],
        //         page: state.page + 1
        //     }
        case 'ADD_NOW_MOVIES':
            return {
                ...state,
                movies: [...state.movies, ...action.movies],
                page: state.page+1
            };
        default:
        return state
    }
}

export default nowReducer;