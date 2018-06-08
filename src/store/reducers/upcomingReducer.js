const initialState = {
    movies: [],
    page: 1,
    loaded: false,
};

const upcomingReducer = (state=initialState, action) => {
    if (action.mode === 'upcoming') {
        switch (action.type) {
            case 'SET_MOVIES':
                return {
                    ...state,
                    loaded: true,
                    page: 1,
                    movies: [...action.movies],
                }
            case 'ADD_MOVIES':
                return {
                    ...state,
                    movies: [...state.movies, ...action.movies],
                    page: state.page+1
                };
            default:
                return state;
        }
    }
    return state;
}

export default upcomingReducer;