const initialState = {
    loaded: false,
    profile_path: "",
    birthday: "",
    id: 0,
    name: "",
    deathday: '',
    biography: '',
    place_of_birth: '',
    cast: [],
    crew: []
}

const peopleInfoReducer = (state=initialState, { 
    type, 
    profile_path, 
    birthday, 
    id,
    name,
    deathday,
    biography,
    place_of_birth,
    movie_credits
} ) => {
    switch (type) {
        case 'SET_PEOPLE_INFO':
            return {
                loaded: true,
                type, 
                birthday, 
                name,
                profile_path,
                id,
                deathday,
                biography,
                place_of_birth,
                cast: movie_credits.cast,
                crew: movie_credits.crew
            };
        case 'RESET_PEOPLE_INFO':
            return {
                ...initialState,
            };
        default:
            return state;
    }
}

export default peopleInfoReducer;