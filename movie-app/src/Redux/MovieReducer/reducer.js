import { GET_MOVIE_ERROR, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from "./actionTypes";

const init =
{
    isLoading: false,
    isError: false,
    movies: [],
};


export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case GET_MOVIE_REQUEST:
            return { ...state, isLoading:true}

        case GET_MOVIE_SUCCESS:
            return {...state, isLoading: false, movies: payload}

        case GET_MOVIE_ERROR:
            return {...state, isLoading:false, isError: true}

        default:
            return state;
    }
}
