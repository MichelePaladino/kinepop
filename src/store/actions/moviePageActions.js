export const startSetMovies = (movies, mode) => {
    return (dispatch) => {
        dispatch(setMovies(movies, mode))
    }
}

export const setMovies = (movies, mode) => ({
    type: 'SET_MOVIES',
    movies,
    mode
})

export const startAddMovies = (movies, mode) => {
    return (dispatch) => {
        dispatch(addMovies(movies, mode))
    }
}

export const addMovies = (movies, mode) => ({
    type: 'ADD_MOVIES',
    movies,
    mode
})


// export const resetNowMovies = () => ({
//     type: 'RESET_NOW_MOVIES'
// })

// export const incrementPageNowMovies = () => ({
//     type: 'INCREMENT_PAGE_NOW_MOVIES'
// })



