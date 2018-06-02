import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import movieReducer from "./reducers/moviesReducer";
import filterReducer from "./reducers/filtersReducer";
import uiReducer from "./reducers/uiReducer";
import movieInfoReducer from "./reducers/movieInfoReducer";
import peopleInfoReducer from "./reducers/peopleInfoReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = {
    movies: movieReducer,
    filters: filterReducer,
    ui: uiReducer,
    movieInfo: movieInfoReducer,
    peopleInfo: peopleInfoReducer,
}

const configureStore = () => {
    const store = createStore(combineReducers(rootReducer), composeEnhancers(applyMiddleware(thunk)));
    return store;
}

export default configureStore;