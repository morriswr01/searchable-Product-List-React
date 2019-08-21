import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Actions
import { logout } from '../actions/authActions';

// CSS
import { Button } from 'reactstrap';
import '../css/NavBar.css';

// Components
import LoginModal from './LoginModal';
import RegistrationModal from './RegistrationModal';

class NavBar extends Component {

    render() {
        return (
            <div className="authContainer">
                {(!this.props.isAuthenticated) ?
                    <Fragment>
                        <LoginModal />
                        <RegistrationModal />
                    </Fragment>
                    :
                    <div className="loggedInBtn">
                        <p className="nameTag">Logged In As, {this.props.user.name}</p>
                        <Button color="primary" onClick={this.props.logout}>
                            Logout
                        </Button>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(
    mapStateToProps, { logout })(NavBar);
