import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import RouterConfig from './router';
import store from './store/store';
import { browserHistory } from 'react-router';
export default class Root extends Component {
    render() {
        return (
           <RouterConfig store={store} history={browserHistory} />
        )
    }
}

// Add container dom to page
let root = document.createElement('div');
root.className = 'root';
document.body.appendChild(root);

render(
    <Root />,
    root
);
