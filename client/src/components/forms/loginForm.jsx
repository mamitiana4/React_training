import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import { Container, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
//import {Link} from 'react-router-dom' ;

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: '',
                password: ''
            },
            errors: {},
            loading: false,
        }
    }

    handleChange(e) {
        this.setState({
            data: {
                ...this.state.data, [e.target.name]: e.target.value
            }
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length === 0){
            this.props.submitLogIn(this.state.data) ;
        }
    }

    validate(data) {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "invalid email";
        if (!data.password) errors.password = "can't be blank";
        return errors;
    }

    /* componentWillReceiveProps(nextProps){
        if(nextProps.danze){
            document.getElementById("ito").setAttribute('to' ,nextProps.danze) ;
        }
    } */

    render() {
        return (
            <Container>
                <h2 style={{ borderBottom: '1px solid gainsboro' }}>Log here if you already have account</h2>
                <Form 
                    onSubmit={this.onSubmit.bind(this)}
                    method="post"
                    action="/logIn"
                >
                    <FormGroup>
                        <Label for="_email">Email: </Label>
                        <Input
                            id="_email"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.data.email}
                            name="email"
                            invalid={this.state.errors.email ? true : false} />
                        <FormFeedback>{this.state.errors.email}</FormFeedback>
                        <FormText>Only valide email is accepted.</FormText>
                    </FormGroup>

                    <FormGroup>
                        <Label for="_password">Password: </Label>
                        <Input
                            id="_password"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.data.password}
                            name="password"
                            invalid={this.state.errors.password ? true : false} />
                        <FormFeedback>{this.state.errors.password}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        {/* <Link id="ito"> */}
                            <Button block outline color="primary">Submit</Button>
                        {/* </Link> */}
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

LoginForm.propTypes = {
    submitLogIn: PropTypes.func.isRequired
};

export default LoginForm ;
