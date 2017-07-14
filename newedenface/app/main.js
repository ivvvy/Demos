import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowseHistory from 'history/lib/createBrowserHistory';
import routes from  './routes'

let history = createBrowseHistory();

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));