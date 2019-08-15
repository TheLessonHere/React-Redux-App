import {
    FETCH_TWEET_START,
    FETCH_TWEET_SUCCESS,
    FETCH_TWEET_FAILURE
} from '../actions';

export const initialState = {
    isFetching: false,
    error: '',
    quote: null 
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TWEET_START:
            return {
                ...state,
                error: '',
                isFetching: true,
                quote: null
            }
        default: 
            return state;
    }
};