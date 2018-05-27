const initialState = {
    sideDrawer: false
}

const uiReducer = (state=initialState, action) => {
    switch (action.type) {
        case "TOGGLE_SIDE_DRAWER":
            return {
                ...state,
                sideDrawer: !state.sideDrawer
            }
        default:
            return state;
    }
}

export default uiReducer;