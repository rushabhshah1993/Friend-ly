import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getFriendsList } from './../../store/actions/friendsActions';

import Friend from './Friend/Friend';

const FriendsList = props => {
    const allFriends = props.friends.allFriends;
    let friendsElement = `You don't have any friends!`

    useEffect(() => {
        if(!props.friends.loading && Object.keys(allFriends).length === 0) {
            props.fetchFriends();
        }
    }, [])

    if(props.friends.loading) friendsElement = `Loading...`; 
    else if(!props.friends.loading && 
        Object.keys(allFriends).length > 0 &&
        props.friends.searchTerm.length === 0) {
            let favoriteFriends = Object.values(allFriends)
                                .filter(friend => friend.is_favorite)
                                .map(friend => <Friend friend={friend} key={friend.id} />);
            let generalFriends = Object.values(allFriends)
                            .filter(friend => !friend.is_favorite)
                            .map(friend => <Friend friend={friend} key={friend.id} />);
            friendsElement = [...favoriteFriends, ...generalFriends];
    } else {
        let filteredFriends = Object.values(allFriends).filter(friend => 
            friend.name.includes(props.friends.searchTerm));
        friendsElement = filteredFriends.map(friend =>
            <Friend friend={friend} key={friend.id} />);
    }

    return (
        <div>
            {friendsElement}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFriends: () =>  dispatch(getFriendsList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
