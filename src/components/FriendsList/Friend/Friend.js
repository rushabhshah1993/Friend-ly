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
        <div className={styles.friendContainer} id={props.friend.id}>
            <p>{props.friend.name}</p>
            <div className={styles.icons}>
                <FontAwesomeIcon
                    icon={props.friend.is_favorite ? "star" : ["far", "star"]}
                    className={props.friend.is_favorite ? styles.favorite : styles.general}
                    onClick={() => favoriteClickHandler(props.friend.id, props.friend.is_favorite)}
                    title={props.friend.is_favorite ? "Remove from favorites" : "Add as a favorite"}
                />
                <FontAwesomeIcon 
                    icon={"trash"} 
                    onClick={() => deleteClickHandler(props.friend.id)}
                    className={styles.delete}
                    title={"Remove friend"}
                />
            </div>
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
