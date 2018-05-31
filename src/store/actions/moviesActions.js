export const resetPage = () => ({
    type: "RESET_PAGE"
})

export const setLatestMovies = (movies) => ({
    type: 'SET_LATEST_MOVIES',
    movies
})

export const startSetLatestMovies = (movies) => {
    return (dispatch) => {
        dispatch(setLatestMovies(movies))
    }
}

export const setMoreLatestMovies = (movies) => ({
    type: 'SET_MORE_LATEST_MOVIES',
    movies
})

export const startSetMoreLatestMovies = (movies) => {
    return (dispatch) => {
        dispatch(setMoreLatestMovies(movies))
    }
}

export const setSearchMovie = (movies) => ({
    type: "SET_SEARCH_MOVIE",
    movies
})

export const startSetSearchMovie = (movies) => {
    return (dispatch) => {
        dispatch(setSearchMovie(movies))
    }
}

export const searchMoreMovie = (movies) => ({
    type: "SEARCH_MORE_MOVIE",
    movies
})

export const startSearchMoreMovie = (movies) => {
    return (dispatch) => {
        dispatch(searchMoreMovie(movies))
    }
}

export const setPopularMovies = (movies) => ({
    type: "SET_POPULAR_MOVIES",
    movies
})

export const startSetPopularMovies = (movies) => {
    return (dispatch) => {
        dispatch(setPopularMovies(movies))
    }
}


export const setMorePopularMovies = (movies) => ({
    type: "SET_MORE_POPULAR_MOVIES",
    movies
})

export const startSetMorePopularMovies = (movies) => {
    return (dispatch) => {
        dispatch(setMorePopularMovies(movies))
    }
}