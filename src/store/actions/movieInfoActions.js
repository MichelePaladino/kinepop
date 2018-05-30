export const setMovieInfo = ({...payload}) => ({
    type: 'SET_MOVIE_INFO',
    ...payload
})

export const startSetMovieInfo = (payload) => {
    return dispatch => {
        dispatch(setMovieInfo(payload))
    }
}