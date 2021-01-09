import axios from "axios";

import * as actions from './actionTypes';

export const getFriendsList = () => {
    return dispatch => {
        dispatch(loadingFriends());
        axios.get('https://friend-ly-d2f6b-default-rtdb.firebaseio.com/friends.json')
            .then(response => {
                let data = Object.values(response.data)[0];
                if(data.length) dispatch(setFriends(data));
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const setFriends = data => {
    return {
        type: actions.SET_FRIENDS,
        data: data
    }
}

export const loadingFriends = () => {
    return {
        type: actions.LOADING_FRIENDS_LIST
    }
}

export const setSearchTerm = term => {
    return {
        type: actions.SET_SEARCH_TERM,
        term: term
    }
}
