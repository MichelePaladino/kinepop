export const setLatestMovies = (movies) => ({
    type: 'SET_LATEST_MOVIES',
    movies
})

export const startSetLatestMovies = (movies) => {
    return (dispatch) => {
        dispatch(setLatestMovies(movies))
    }
}
