import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Friend.scss';

const Friend = props => {
    return (
        <div className={styles.friend}>
            <p>{props.friend.name}</p>
            {
                props.friend.is_favorite ?
                <FontAwesomeIcon icon={"star"} /> :
                <FontAwesomeIcon icon={["far", "star"]} />
            }
            <span>{props.friend.is_favorite}</span>
            <FontAwesomeIcon icon={"trash"} />
        </div>
    )
}

export default Friend;
