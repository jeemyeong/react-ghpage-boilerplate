import React, { Component, PropTypes } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'

const propTypes = {

};
const defaultProps = {

};
class Nav extends Component {

    constructor(props) {
        super(props);
    }
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
        const { activeItem } = this.state

        return(
            <Segment inverted>
                <Menu inverted>
                    <Link to="/">
                        <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                    </Link>
                </Menu>
            </Segment>
        );
    }
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
