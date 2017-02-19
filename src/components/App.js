import React, { Component, PropTypes } from 'react';
import Main from './Main';

import {
  BrowserRouter as Router,
} from 'react-router-dom'

const propTypes = {

};
const defaultProps = {

};


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Router>
                <div>
                    <Main/>
                </div>
            </Router>
        );
    }
}


App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
