import * as actions from './../actions/actionTypes';

const initalState = {
    allFriends: [],
    loading: false
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
        default: return state;
    }
}

export default reducer;
