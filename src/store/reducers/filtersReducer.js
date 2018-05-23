const initialState = {
    title: ''
};

const filterReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_TITLE_FILTER':
            return {
                ...state,
                title: action.title
            };
        default:
        return state
    }
}


export default filterReducer;