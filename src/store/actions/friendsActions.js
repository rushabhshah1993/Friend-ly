import axios from "axios";
import { cloneDeep } from 'lodash';

import * as actions from './actionTypes';
import store from './../store';

import { createNewId } from './../../utils';

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

export const addNewFriend = name => {
    return dispatch => {
        let allFriends = cloneDeep(store.getState()?.friends?.allFriends);
        let newFriend = {
            id: createNewId(allFriends),
            is_favorite: false,
            name: name
        };
        allFriends[newFriend.id] = newFriend;
        
        axios.put(
            'https://friend-ly-d2f6b-default-rtdb.firebaseio.com/allFriends.json',
            allFriends
        ).then(() => {
            dispatch(getFriendsList());
        }).catch(error => {
            console.log(error);
        })
    }
}

export const deleteFriend = id => {
    return dispatch => {
        axios.delete(`https://friend-ly-d2f6b-default-rtdb.firebaseio.com/allFriends/${id}.json`)
            .then(() => {
                dispatch(getFriendsList());
            }).catch(error => {
                console.log(error);
            })
    }
}
