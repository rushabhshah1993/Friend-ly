import React from 'react';

import styles from './Friend.scss';

const Friend = props => {
    return (
        <div className={styles.friend}>
            <p>{props.friend.name}</p>
            <span>{props.friend.is_favorite}</span>
            <span>Delete</span>
        </div>
    )
}

export default Friend;
