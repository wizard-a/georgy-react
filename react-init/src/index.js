import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import store from './store/store';
import { Provider } from 'react-redux';
import App from './containers/App.js';
import HomePage from './containers/HomePage.js';
import Page2 from './containers/Page2.js';
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zhCN from './locale/zh.js';
import enUS from './locale/en.js';

addLocaleData([...en, ...zh]);

export default class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    render() {
        const { store , history } = this.props;
        return (
            <IntlProvider locale='zh' messages={zhCN}>
                <Provider store={store}>
                    <Router history={history}>
                        <Route path='/' component={App}>
                            <IndexRoute component={HomePage}/>
                            <Route path='/page2' component={Page2}/>
                        </Route>
                    </Router>
                </Provider>
            </IntlProvider>
        )
    }
}

// Add container dom to page
let root = document.createElement('div');
root.className = 'root';
document.body.appendChild(root);

render(
    <Root store={store} history={browserHistory} />,
    root
);
