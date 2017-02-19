import React, { Component, PropTypes } from 'react';
import Counter from './Counter';
import Home from './Home';
import Nav from './Nav';
import NotFound from './NotFound';
import {
  Route,
  Link
} from 'react-router-dom'
import { Grid } from 'semantic-ui-react'


const propTypes = {

};
const defaultProps = {

};
class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Grid centered doubling columns={2}>
                    <Grid.Column>
                        <Nav/>

                        <Route exact path="/" component={Home}/>

                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
