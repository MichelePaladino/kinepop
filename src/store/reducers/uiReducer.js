const initialState = {
    sideDrawer: false
}

const uiReducer = (state=initialState, action) => {
    switch (action.type) {
        case "OPEN_SIDE_DRAWER":
            return {
                ...state,
                sideDrawer: true
            }
        case "CLOSE_SIDE_DRAWER":
            return {
                ...state,
                sideDrawer: false
            }
        default:
            return state;
    }
}

export default uiReducer;