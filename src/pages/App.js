import React from 'react';

import Search from './../components/Search/Search';
import FriendsList from './../components/FriendsList/FriendsList';

const App = () => {
    return (
        <div>
            <h2>Friends List</h2>
            <Search />
            <FriendsList />
        </div>
    )
}

export default App;
