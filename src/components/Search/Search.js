import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';

import { setSearchTerm } from './../../store/actions/friendsActions';

import styles from './Search.scss';

const Search = props => {
    const inputChangeHandler = event => {
        props.setSearchTerm(event.target.value);
    }

    return (
        <div className={styles.searchContainer}>
            <FontAwesomeIcon icon="search" className={styles.icon} />
            <input 
                type="text" 
                onChange={inputChangeHandler} 
                placeholder={"Find a friend..."}
                className={styles.searchBar}
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
