export const startPopulateSearch = (movies) => {
    return (dispatch) => {
        dispatch(populateSearch(movies))
    }
}

export const populateSearch = (movies) => ({
    type: 'POPULATE_SEARCH',
    movies
})

// export const resetSearchMovies = () => ({
//     type: 'RESET_SEARCH_MOVIES'
// })

export const incrementPageSearchMovies = () => ({
    type: 'INCREMENT_PAGE_SEARCH_MOVIES'
})

export const onTitleChange = (e) => ({
    type: 'SET_TITLE_FILTER_SEARCH',
    title: e.target.value
})

// export const doResetTitleFilter = () => ({
//     type: 'RESET_TITLE_FILTER'
// })


export const startAddSearchMovies = (movies) => {
    return (dispatch) => {
        dispatch(addSearchMovies(movies))
    }
}

export const addSearchMovies = (movies) => ({
    type: 'ADD_SEARCH_MOVIES',
    movies
})




