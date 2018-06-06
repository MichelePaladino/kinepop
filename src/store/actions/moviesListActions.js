export const startPopulateMoviesList = (movies) => {
    return (dispatch) => {
        dispatch(populateMoviesList(movies))
    }
}

export const populateMoviesList = (movies) => ({
    type: 'POPULATE_MOVIES_LIST',
    movies
})

export const resetMoviesList = () => ({
    type: 'RESET_MOVIES_LIST'
})

export const incrementPageMoviesList = () => ({
    type: 'INCREMENT_PAGE_MOVIES_LIST'
})