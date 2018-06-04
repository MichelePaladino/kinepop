export const onSortByChange = (e) => ({
    type: 'SET_SORT_BY',
    sortBy: e.target.value
})


export const startOnChangeSortBy = (e) => {
    return (dispatch) => {
        dispatch(onSortByChange(e));
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
