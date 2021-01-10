import React from 'react';
import { connect } from 'react-redux';

import { setSearchTerm } from './../../store/actions/friendsActions';

const Search = props => {
    const inputChangeHandler = event => {
        props.setSearchTerm(event.target.value);
    }

    return (
        <div>
            <input 
                type="text" 
                onChange={inputChangeHandler} 
                placeholder={"Search..."}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchTerm: term => dispatch(setSearchTerm(term))
    }
}

export default connect(null, mapDispatchToProps)(Search);
