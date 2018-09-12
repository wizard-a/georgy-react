import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Provider } from 'react-redux';
import App from './containers/App.js';
import HomePage from './containers/HomePage.js';
import Page2 from './containers/Page2.js';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zhCN from './locale/zh.js';
import enUS from './locale/en.js';

addLocaleData([...en, ...zh]);

class RouterConfig extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { store , history, currLocale } = this.props;
        return (
            <IntlProvider locale={currLocale} messages={currLocale === 'en' ? enUS : zhCN}>
                <Provider store={store}>
                    <Router history={history}>
                        <Route path='/' component={App}>
                            <IndexRoute component={HomePage}/>
                            <Route path='/page2' component={Page2}/>
                        </Route>
                    </Router>
                </Provider>
            </IntlProvider>
        );
    }   
}

const mapStateToProps = (state) => ({
    currLocale: state.home.currLocale
});

const mapActionCreators = {
    changeMessage: () => Actions.changeMessage("hello"),
}

export default connect(mapStateToProps, mapActionCreators)(RouterConfig);
