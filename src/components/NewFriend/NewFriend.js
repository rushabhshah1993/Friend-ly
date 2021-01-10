import { add } from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addNewFriend } from './../../store/actions/friendsActions';

const NewFriend = props => {
    const [inputValue, setInputValue] = useState('');
    const textChangeHandler = event => {
        setInputValue(event.target.value);
    }

    const keyPressHandler = event => {
        if(event.which === 13) props.addNewFriend(inputValue);
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder={"Enter your friend's name..."}
                onChange={textChangeHandler}
                onKeyPress={keyPressHandler}
                value={inputValue}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addNewFriend: name => dispatch(addNewFriend(name))
    }
}

export default connect(null, mapDispatchToProps)(NewFriend);
