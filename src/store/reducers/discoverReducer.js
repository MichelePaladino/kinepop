const initialState = {
    sortBy: 'popularity.desc',
    startDate: '',
    endDate: '',
    primaryReleaseDate: '',
    rating: '',
    genres: [],
    page: 1,
    yearCheck: false,
    activeTabIndex: 0,
    actionChecked: false,
    adventureChecked: false,
    animationChecked: false,
    comedyChecked: false,
    crimeChecked: false,
    documentaryChecked: false,
    dramaChecked: false,
    familyChecked: false,
    fantasyChecked: false,
    historyChecked: false,
    horrorChecked: false,
    musicChecked: false,
    mysteryChecked: false,
    romanceChecked: false,
    sciencefictionChecked: false,
    thrillerChecked: false,
    warChecked: false,
    westernChecked: false,
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
        case 'CHANGE_TAB':
            return {
                ...state,
                genres: [...state.genres],
                activeTabIndex: action.index
            }
        case 'CHANGE_SWITCH':
            return {
                ...state,
                genres: [...state.genres],
                yearCheck: action.checked
            }
        case 'CHANGE_GENRE':
            return {
                ...state,
                genres: [...state.genres],
                [action.genre]: action.toggle
            }
        default:
            return state;
    }
}

export default discoverReducer;

