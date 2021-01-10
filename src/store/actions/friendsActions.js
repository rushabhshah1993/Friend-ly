import axios from "axios";

import * as actions from './actionTypes';

export const getFriendsList = () => {
    return dispatch => {
        dispatch(loadingFriends());
        
        axios.get('https://friend-ly-d2f6b-default-rtdb.firebaseio.com/allFriends.json')
            .then(response => {
                if(Object.keys(response.data).length) dispatch(setFriends(response.data));
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

export const toggleFavorite = (id, value) => {
    return dispatch => {
        axios.patch(
            `https://friend-ly-d2f6b-default-rtdb.firebaseio.com/allFriends/${id}.json`, 
            {is_favorite : !value}
        ).then(() => {
            return axios.get('https://friend-ly-d2f6b-default-rtdb.firebaseio.com/allFriends.json')
        }).then(response => {
            dispatch(setFriends(response.data));
        }).catch(error => {
            console.log(error);
        })
    }
}
