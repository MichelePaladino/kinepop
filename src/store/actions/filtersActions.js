// export const onTitleChange = () => {
//     return () => {
//         return ({
//             type: SET_TITLE_FILTER,
//             title
//         })
//     }
// }

// import axios from "axios";

export const onTitleChange = (e) => ({
    type: 'SET_TITLE_FILTER',
    title: e.target.value
})


export const startOnTitleChange = (e) => {
    return (dispatch) => {
        // let movieTitle = e.target.value;
        // axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&query=${movieTitle}`)
        //     .then(response => console.log(response));
        dispatch(onTitleChange(e));
    }
}
