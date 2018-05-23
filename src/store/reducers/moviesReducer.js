const initialState = [
    {
        title: "Ghost",
        year: "1990",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtxy3cplRFPUvruZajpcoxOQ7bi.jpg"
    },
    {
        title: "Back to the Future",
        year: "1985",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg"
    },
    {
        title: "Titanic",
        year: "1997",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kHXEpyfl6zqn8a6YuozZUujufXf.jpg"
    },
];

const moviesReducer = (state=initialState, action) => {
    return state;
}

export default moviesReducer;