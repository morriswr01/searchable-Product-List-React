import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Form,
    Alert
} from 'reactstrap';

import InputGroup from '../components/InputGroup';
import { login, logout, register } from '../actions/authActions';

import '../css/NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoginModal: false,
            loginDetails: {
                email: "",
                password: "",
                generalError: ""
            },
            showRegistrationModal: false,
            registrationDetails: {
                name: "John",
                email: "",
                password: "",
                generalError: ""
            }
        }
    }

    handleLoginFormChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            ...this.state,
            loginDetails: {
                ...this.state.loginDetails,
                [name]: value
            }
        });
    }

    handleRegistrationFormChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            ...this.state,
            registrationDetails: {
                ...this.state.registrationDetails,
                [name]: value
            }
        });
    }

    showLoginModal = () => {
        this.setState({
            showLoginModal: !this.state.showLoginModal,
            loginDetails: {
                email: "",
                password: "",
                generalError: ""
            }
        })
    }

    showRegistrationModal = () => {
        this.setState({
            showRegistrationModal: !this.state.showRegistrationModal,
            registrationDetails: {
                name: "John",
                email: "",
                password: "",
                generalError: ""
            }
        })
    }

    submitLogin = () => {
        // Check for errors
        const { email, password } = this.state.loginDetails;

        if (!email || !password) {
            this.setState({
                ...this.state,
                loginDetails: {
                    ...this.state.loginDetails,
                    generalError: "All inputs must be filled to login"
                }
            });
            return;
        }

        this.props.login(this.state.loginDetails);

        this.setState({
            ...this.state,
            showLoginModal: false,
            loginDetails: {
                ...this.state.loginDetails,
                email: "",
                password: "",
                generalError: ""
            }
        })
    }

    submitRegistration = () => {
        // Check for errors
        const { email, password } = this.state.registrationDetails;

        if (!email || !password) {
            this.setState({
                ...this.state,
                registrationDetails: {
                    ...this.state.registrationDetails,
                    generalError: "All inputs must be filled to login"
                }
            });
            return;
        }

        this.props.register(this.state.registrationDetails);

        this.setState({
            ...this.state,
            showRegistrationModal: false,
            registrationDetails: {
                ...this.state.registrationDetails,
                name: "John",
                email: "",
                password: "",
                generalError: ""
            }
        })
    }

    render() {
        return (
            <div className="authContainer">
                {(!this.props.isAuthenticated) ?
                    <Fragment>
                        {/* Login modal */}
                        <Button className="authBtn" color="primary" onClick={this.showLoginModal}>
                            Login
                    </Button>
                        <Modal isOpen={this.state.showLoginModal} toggle={this.showLoginModal}>
                            <ModalHeader
                                toggle={this.showLoginModal}
                                className="modalHeader">
                                Login
                            </ModalHeader>
                            <ModalBody>
                                {(this.state.loginDetails.generalError) ?
                                    <Alert color="danger">{this.state.loginDetails.generalError}</Alert>
                                    : ""
                                }
                                <Form>
                                    <InputGroup
                                        type="email"
                                        labeltext="Email"
                                        name="email"
                                        id="emailLogin"
                                        onChange={this.handleLoginFormChange}
                                    />
                                    <InputGroup
                                        type="password"
                                        labeltext="Password"
                                        name="password"
                                        id="passwordLogin"
                                        autoComplete="off"
                                        onChange={this.handleLoginFormChange}
                                    />
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    onClick={this.submitLogin}
                                    color="primary"
                                >
                                    Login
                        </Button>{' '}
                            </ModalFooter>
                        </Modal>

                        {/* Registration modal */}
                        <Button className="authBtn" color="success" onClick={this.showRegistrationModal}>
                            Register
                        </Button>
                        <Modal isOpen={this.state.showRegistrationModal} toggle={this.showRegistrationModal}>
                            <ModalHeader
                                toggle={this.showRegistrationModal}
                                className="modalHeader">
                                Register
                            </ModalHeader>
                            <ModalBody>
                                {(this.state.registrationDetails.generalError) ?
                                    <Alert color="danger">{this.state.registrationDetails.generalError}</Alert>
                                    : ""
                                }
                                <Form>
                                    <InputGroup
                                        type="email"
                                        labeltext="Email"
                                        name="email"
                                        id="emailRegistration"
                                        onChange={this.handleRegistrationFormChange}
                                    />
                                    <InputGroup
                                        type="password"
                                        labeltext="Password"
                                        name="password"
                                        id="passwordRegistration"
                                        autoComplete="off"
                                        onChange={this.handleRegistrationFormChange}
                                    />
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    onClick={this.submitRegistration}
                                    color="primary"
                                >
                                    Register
                        </Button>{' '}
                            </ModalFooter>
                        </Modal>
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
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps, { login, logout, register })(NavBar);
