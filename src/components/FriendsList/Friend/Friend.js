import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Friend.scss';

import { toggleFavorite, deleteFriend } from './../../../store/actions/friendsActions';

const Friend = props => {
    const favoriteClickHandler = (friendId, currentValue) => {
        props.toggleFavorite(friendId, currentValue);
    }
    
    const deleteClickHandler = friendId => {
        props.deleteFriend(friendId)
    }

    return (
        <div className={styles.friend} id={props.friend.id}>
            <p>{props.friend.name}</p>
            <FontAwesomeIcon
                icon={props.friend.is_favorite ? "star" : ["far", "star"]}
                onClick={() => favoriteClickHandler(props.friend.id, props.friend.is_favorite)}
            />
            <FontAwesomeIcon 
                icon={"trash"} 
                onClick={() => deleteClickHandler(props.friend.id)}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleFavorite: (id, value) => dispatch(toggleFavorite(id, value)),
        deleteFriend: id => dispatch(deleteFriend(id))
    }
}

export default connect(null, mapDispatchToProps)(Friend);
