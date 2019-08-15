import axios from 'axios';

export const FETCH_TWEET_START = 'FETCH_TWEET_START';
export const FETCH_TWEET_SUCCESS = 'FETCH_TWEET_SUCCESS';
export const FETCH_TWEET_FAILURE = 'FETCH_TWEET_FAILURE';

export const fetchTweet = () => dispatch => {
    dispatch({ type: FETCH_TWEET_START });
    axios.get ('https://api.kanye.rest')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_TWEET_SUCCESS, payload: res.data.quote })
        })
        .catch(err => {
            dispatch({ type: FETCH_TWEET_FAILURE, payload: "Unable to load Tweet"})
        });
}