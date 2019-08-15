import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import { fetchTweet } from '../actions';

const TweetContainer = styled.div`
    max-width: 1000px;
    width: 100%;
    height: 300px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border: 3px solid #ff0000;
    border-radius: 20px;
    background: whitesmoke;
    margin: 0 auto;
    box-shadow: 5px 5px 10px black;
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;

    h2 {
        font-size: 2.0rem;
    }

    .quote-container {
        width: 100%;
        height: 225px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .button-container {
        width: 100%;
        height: 75px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        margin: 0 auto;

        button {
            background-color: whitesmoke; 
            color: black; 
            border: 3px solid #ff0000;
            border-radius: 20px;
            padding: 16px 32px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            margin: 10px 2px;
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
            cursor: pointer;
          }
          
        button:hover {
            background-color: #ff0000;
            color: whitesmoke;
          }
    }
`;

const Display = (props) => {
    const newTweet = e => {
        e.preventDefault();
        props.fetchTweet();
    };

    if (props.isFetching) {
        return (
        <TweetContainer>
            <Loader className="spinner" type="BallTriangle" color="#ff0000" height={150} width={150} />
        </TweetContainer>
        )
    }

    if (props.error) {
        return (
            <TweetContainer>
                <div className="quote-container">
                <h2>{props.error}</h2>
                </div>
                <div className="button-container">
                <button onClick={newTweet}>Try Again</button>
                </div>
            </TweetContainer>
        )
    }

    return (
        <TweetContainer>
            <div className="quote-container">
            {props.quote ? <h2>{props.quote}</h2> : <h2>No Tweet Found</h2>}
            </div>
            <div className="button-container">
            <button onClick={newTweet}>Get New Kanye Tweet</button>
            </div>
        </TweetContainer>
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