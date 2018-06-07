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
            case 'ADD_MOVIES':
                return {
                    ...state,
                    movies: [...state.movies, ...action.movies],
                    page: state.page+1
                };

        }
    }
    return state;
}

export default upcomingReducer;