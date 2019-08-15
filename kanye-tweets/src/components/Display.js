import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchTweet } from '../actions';

const Display = (props) => {
    const newTweet = e => {
        e.preventDefault();
        props.fetchTweet();
    };

    if (props.isFetching) {
        return <Loader
                    type="Puff"
                    color="#00BFFF"
                    height="100"
                    width="100"
                />
    }

    return (
        <div className="tweet-display">
            {props.quote ? <h1>{props.quote}</h1> : <h1> No Tweet Found</h1>}
            <button onClick={newTweet}>New Tweet</button>
        </div>
    )
};

const mapStateToProps = state => {
    console.log(state);
    return {
        error: state.error,
        isFetching: state.isFetching,
        quote: state.quote
    }
}

export default connect(mapStateToProps, { fetchTweet })(Display);