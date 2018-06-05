import moment from "moment";

const initialState = {
    sortBy: 'popularity.desc',
    startDate: '',
    endDate: '',
    primaryReleaseDate: '',
    rating: '',
    genres: [],
    movies: []
};

const discoverReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy,
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate,
            };    
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate,
            };    
        case 'SET_PRIMARY_RELEASE_DATE':
            return {
                ...state,
                primaryReleaseDate: action.primaryReleaseDate,
            }
        case 'RESET_DATES':
            return {
                ...state,
                startDate: '',
                endDate: '',
                primaryReleaseDate: '',
            }
        case 'SET_RATING':
            return {
                ...state,
                rating: action.rating,
            }
        case 'TOGGLE_GENRE':
            if (state.genres.includes(action.genre)) {
                // REMOVE GENRE FROM ARRAY
                return {
                    ...state,
                    genres: state.genres.filter(id => id !== action.genre)
                }
            } else {
                // PUSH GENRE INTO ARRAY
                return {
                    ...state,
                    genres: [
                        ...state.genres,
                        action.genre
                    ]
                }
            }
        case 'POPULATE_MOVIES':
            return {
                ...state,
                genres: [...state.genres],
                movies: [...state.movies, ...action.movies],
            }
        case 'RESET_DISCOVER': 
            return {
                ...state,
                genres: [...state.genres],
                movies: [],
            }
        default:
            return state;
    }
}

export default discoverReducer;

