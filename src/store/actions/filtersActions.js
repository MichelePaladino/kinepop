// export const onTitleChange = () => {
//     return () => {
//         return ({
//             type: SET_TITLE_FILTER,
//             title
//         })
//     }
// }

export const onTitleChange = (e) => ({
    type: 'SET_TITLE_FILTER',
    title: e.target.value
})

export const startOnTitleChange = (e) => {
    return (dispatch) => {
        dispatch(onTitleChange(e))
    }
}
