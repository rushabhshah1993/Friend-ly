import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './pages/App';

import store from './store/store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { 
    faStar, faTrash, faSearch,
    faUserPlus
} from '@fortawesome/free-solid-svg-icons';

import './index.scss';

library.add(
    faStar, farStar, faTrash, 
    faSearch, faUserPlus
);

const main = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    main,
    document.getElementById("root")
);

