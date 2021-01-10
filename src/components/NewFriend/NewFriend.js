import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addNewFriend } from './../../store/actions/friendsActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NewFriend.scss';

const NewFriend = props => {
    const [inputValue, setInputValue] = useState('');
    const textChangeHandler = event => {
        setInputValue(event.target.value);
    }

    const keyPressHandler = event => {
        if(event.which === 13) {
            props.addNewFriend(inputValue);
            setInputValue('');
        }
    }

    return (
        <div className={styles.newFriendContainer}>
            <input 
                type="text" 
                placeholder={"Add a new friend..."}
                onChange={textChangeHandler}
                onKeyPress={keyPressHandler}
                value={inputValue}
            />
            <FontAwesomeIcon icon={"user-plus"} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addNewFriend: name => dispatch(addNewFriend(name))
    }
}

export default connect(null, mapDispatchToProps)(NewFriend);
