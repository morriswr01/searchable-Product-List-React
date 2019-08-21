import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Actions
import { login, logout, register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';

// CSS
import { Button } from 'reactstrap';
import '../css/NavBar.css';

// Components
import LoginModal from './LoginModal';
import RegistrationModal from './RegistrationModal';

class NavBar extends Component {

    // componentDidUpdate(prevProps) {
    //     const { error, isAuthenticated } = this.props;
    //     console.log(error);
    //     if (error !== prevProps.error) {
    //         // Check for register error
    //         if (error.id === 'LOGIN_FAIL') {
    //             this.setState({
    //                 loginDetails: {
    //                     ...this.state.loginDetails,
    //                     generalError: this.props.error.msg.msg
    //                 }
    //             });
    //         }
    //         if (error.id === 'REGISTER_FAIL') {
    //             this.setState({
    //                 registrationDetails: {
    //                     ...this.state.registrationDetails,
    //                     generalError: this.props.error.msg.msg
    //                 }
    //             });
    //         }
    //         else {
    //             this.setState({
    //                 loginDetails: {
    //                     ...this.state.loginDetails,
    //                     generalError: null
    //                 },
    //                 registrationDetails: {
    //                     ...this.state.registrationDetails,
    //                     generalError: null
    //                 }
    //             });
    //         }
    //     }
    //     // If authenticated, close modal
    //     if (isAuthenticated) {
    //         this.setState({
    //             showRegistrationModal: false,
    //             showLoginModal: false
    //         })
    //     }
    // }

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
                        <p>Logged In As, Will Morris</p>
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
    error: state.error
});

export default connect(
    mapStateToProps, { login, logout, register, clearErrors })(NavBar);
