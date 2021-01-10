import React from 'react';

import Search from './../components/Search/Search';
import NewFriend from './../components/NewFriend/NewFriend';
import FriendsList from './../components/FriendsList/FriendsList';

const App = () => {
    return (
        <div>
            <h2>Friends List</h2>
            <Search />
            <NewFriend />
            <FriendsList />
        </div>
    )
}

export default App;
