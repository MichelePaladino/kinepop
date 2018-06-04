import moment from "moment";

const initialState = {
    sortBy: '',
    startDate: '',
    endDate: '',
    primaryReleaseDate: '',
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
        default:
            return state;
    }
}

export default discoverReducer;

