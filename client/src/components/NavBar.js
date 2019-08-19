import React, { Component, Fragment } from 'react';
import {
    Button
} from 'reactstrap';

import '../css/NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        }
    }

    render() {
        return (
            <div className="authContainer">
                {(this.state.isAuthenticated) ? 
                <Button className="authBtn" color="primary">
                    Login
                </Button>
                :
                <div className="loggedInBtn">
                    <p>Logged In As, Will Morris</p>
                    <Button color="primary">
                        Logout
                    </Button>
                </div>
                }
            </div>
        )
    }
}

export default NavBar
