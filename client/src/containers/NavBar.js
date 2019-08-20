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
import { login, logout } from '../actions/authActions';

import '../css/NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoginModal: false,
            loginDetails: {
                username: "",
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

    showLoginModal = () => {
        this.setState({
            showLoginModal: !this.state.showLoginModal,
            loginDetails: {
                username: "",
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
                username: "",
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
    mapStateToProps, { login, logout })(NavBar);
