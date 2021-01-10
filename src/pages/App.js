import React from 'react';

import Header from './../components/Header/Header';
import Search from './../components/Search/Search';
import NewFriend from './../components/NewFriend/NewFriend';
import FriendsList from './../components/FriendsList/FriendsList';

import styles from './App.scss';

const App = () => {
    return (
        <div className={styles.appContainer}>
            <Header />
            <Search />
            <NewFriend />
            <FriendsList />
        </div>
    )
}

export default App;
