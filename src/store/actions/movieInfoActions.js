export const setMovieInfo = ({...payload}) => ({
    type: 'SET_MOVIE_INFO',
    ...payload
})

export const startSetMovieInfo = (payload) => {
    return dispatch => {
        dispatch(setMovieInfo(payload))
    }
}

export const resetMovieInfo = () => ({
    type: 'RESET_MOVIE_INFO',
})

export const startResetMovieInfo = (payload) => {
    return dispatch => {
        dispatch(resetMovieInfo(payload))
    }
}