export const startPopulateSearch = (movies) => {
    return (dispatch) => {
        dispatch(populateSearch(movies))
    }
}

export const populateSearch = (movies) => ({
    type: 'POPULATE_SEARCH',
    movies
})

export const onTitleChange = (e) => ({
    type: 'SET_TITLE_FILTER_SEARCH',
    title: e.target.value
})

export const startAddSearchMovies = (movies) => {
    return (dispatch) => {
        dispatch(addSearchMovies(movies))
    }
}

export const addSearchMovies = (movies) => ({
    type: 'ADD_SEARCH_MOVIES',
    movies
})




