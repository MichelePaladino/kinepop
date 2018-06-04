export const setPeopleInfo = ({...payload}) => ({
    type: 'SET_PEOPLE_INFO',
    ...payload
})

export const startSetPeopleInfo = (payload) => {
    return dispatch => {
        dispatch(setPeopleInfo(payload))
    }
}

export const resetPeopleInfo = () => ({
    type: 'RESET_PEOPLE_INFO',
})

export const startResetPeopleInfo = (payload) => {
    return dispatch => {
        dispatch(resetPeopleInfo(payload))
    }
}