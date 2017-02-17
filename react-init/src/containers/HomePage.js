import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as Actions from '../actions/HomeAction.js';
import {injectIntl, FormattedMessage} from 'react-intl';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : 'Joe',
            unreadCount: 100
        };
    }

    render () {
        const {name, unreadCount} = this.state;
        const {intl} = this.props;
        let tmp = intl.formatMessage({id: 'intl.name'},{name: 'joe'});
        return (
            <div>
                <h2>React-intl Demo</h2>
                <p>
                    <FormattedMessage 
                        id="intl.hello"
                        defaultMessage={'hello'}
                    />,
                    <FormattedMessage
                        id="intl.name"
                        defaultMessage={`我是默认消息`}
                        values={{name: <b>{name}</b>}}
                    />
                </p>
                {tmp}
            </div>
        );
    }   
}

const mapStateToProps = (state) => ({
    HomeMessage: state.home
});

const mapActionCreators = {
    changeMessage: () => Actions.changeMessage("hello"),
}

export default connect(mapStateToProps, mapActionCreators)(injectIntl(App));
