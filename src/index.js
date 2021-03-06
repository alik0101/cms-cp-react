import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './routes';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './stores/configureStore';

ReactDOM.render(
    <Provider store={configureStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
