export const setPeopleInfo = ({...payload}) => ({
    type: 'SET_PEOPLE_INFO',
    ...payload
})

export const startSetPeopleInfo = (payload) => {
    return dispatch => {
        dispatch(setPeopleInfo(payload))
    }
}