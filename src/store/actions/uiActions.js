export const toggleSideDrawer = () => ({
    type: "TOGGLE_SIDE_DRAWER",
})

export const startToggleSideDrawer = () => {
    return (dispatch) => {
        dispatch(toggleSideDrawer())
    }
}