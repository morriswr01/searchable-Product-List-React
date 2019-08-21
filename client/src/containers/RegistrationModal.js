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
import { register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';

class RegistrationModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showRegistrationModal: false,
            registrationDetails: {
                name: 'John',
                email: '',
                password: '',
                generalError: ''
            }
        }
    }

componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({
                    registrationDetails: {
                        ...this.state.registrationDetails,
                        generalError: this.props.error.msg.msg
                    }
                });
            }
            else {
                this.setState({
                    registrationDetails: {
                        ...this.state.registrationDetails,
                        generalError: ''
                    }
                });
            }
        }
        // If authenticated, close modal
        if (isAuthenticated) {
            this.setState({
                showRegistrationModal: false,
            })
        }
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

    showRegistrationModal = () => {
        this.props.clearErrors();
        this.setState({
            showRegistrationModal: !this.state.showRegistrationModal,
            registrationDetails: {
                name: "",
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
    }

    render() {
        return (
            <Fragment>
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
                                type="text"
                                labeltext="Name"
                                name="name"
                                id="name"
                                onChange={this.handleRegistrationFormChange}
                            />
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
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(
    mapStateToProps, { register, clearErrors })(RegistrationModal);