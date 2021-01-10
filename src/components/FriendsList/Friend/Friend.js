import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Friend.scss';

import { toggleFavorite } from './../../../store/actions/friendsActions';

const Friend = props => {
    const favoriteClickHandler = (friendId, currentValue) => {
        props.toggleFavorite(friendId, currentValue);
    }

    return (
        <div className={styles.friend} id={props.friend.id}>
            <p>{props.friend.name}</p>
            {
                <FontAwesomeIcon
                    icon={props.friend.is_favorite ? "star" : ["far", "star"]}
                    onClick={() => favoriteClickHandler(props.friend.id, props.friend.is_favorite)}
                />
            }
            <span>{props.friend.is_favorite}</span>
            <FontAwesomeIcon icon={"trash"} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleFavorite: (id, value) => dispatch(toggleFavorite(id, value))
    }
}

export default connect(null, mapDispatchToProps)(Friend);
