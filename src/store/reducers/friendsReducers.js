import * as actions from './../actions/actionTypes';

const initalState = {
    allFriends: {},
    loading: false,
    searchTerm: ''
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case actions.LOADING_FRIENDS_LIST:
            return {
                ...state,
                loading: true
            }
        case actions.SET_FRIENDS: 
            return {
                ...state,
                allFriends: action.data,
                loading: false
            }
        case actions.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.term
            }
        default: return state;
    }
}

export default reducer;
