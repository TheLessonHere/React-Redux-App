import {
    FETCH_TWEET_START,
    FETCH_TWEET_SUCCESS,
    FETCH_TWEET_FAILURE
} from '../actions';

export const initialState = {
    isFetching: false,
    error: '',
    quote: "Let's be like water",
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TWEET_START:
            return {
                ...state,
                error: '',
                isFetching: true,
                quote: '',
            };
        case FETCH_TWEET_SUCCESS:
            return {
                ...state,
                quote: action.payload,
                isFetching: false,
                error: '',
            };
        case FETCH_TWEET_FAILURE:
            return {
                ...state,
                quote: '',
                isFetching: false,
                error: action.payload
            };
        default: 
            return state;
    }
};