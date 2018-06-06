export const onChangeSortBy = (e) => ({
    type: 'SET_SORT_BY',
    sortBy: e.target.value
})


export const startOnChangeSortBy = (e) => {
    return (dispatch) => {
        dispatch(onChangeSortBy(e));
    }
}

export const onChangeStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

export const onChangeEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

export const onChangePrimaryReleaseDate = (primaryReleaseDate) => ({
    type: 'SET_PRIMARY_RELEASE_DATE',
    primaryReleaseDate
})

export const resetDates = () => ({
    type: 'RESET_DATES'
})

export const setRating = (rating) => ({
    type: 'SET_RATING',
    rating
})

export const toggleGenre = (genre) => ({
    type: 'TOGGLE_GENRE',
    genre
})


export const onChangeTab = (index) => ({
    type: 'CHANGE_TAB',
    index
})

export const onChangeSwitch = (checked) => ({
    type: 'CHANGE_SWITCH',
    checked
})

export const onChangeGenre = (genre, toggle) => ({
    type: 'CHANGE_GENRE',
    genre,
    toggle
})

