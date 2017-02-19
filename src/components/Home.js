import React, { Component, PropTypes } from 'react';
import { Header, Image, Grid, Segment, Icon, Card } from 'semantic-ui-react'

import {
    Link
} from 'react-router-dom'

const propTypes = {

};
const defaultProps = {

};
class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const square = { width: 175, height: 175 }
        return(
            <div>
                HOME
            </div>
        );
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
