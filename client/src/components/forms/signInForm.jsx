import React, { Component } from 'react';
import {Container, Form, FormGroup, Label, Input, Button, FormFeedback, FormText} from 'reactstrap' ;
import Validator from 'validator' ;
import PropTypes from 'prop-types'; 
//import Alert from '../components/alert' ;

class SignInForm extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            data: {
                username: '',
                email: '',
                password: ''
            },
            errors: {},
            loading: false
        }
    }

    handleChange(e){
        this.setState({
            data:{
                ...this.state.data, [e.target.name]:e.target.value
            }
        }) ;
    }

    onSubmit(e){
        e.preventDefault() ;
        const errors = this.validate(this.state.data) ;
        this.setState({errors}) ;
        if (Object.keys(errors).length === 0) {
            this.props.submitSignIn(this.state.data);
        }
    }

    validate(data){
        const errors = {} ;
        if (!data.username) errors.username = "can't be blank" ;
        if (!data.password) errors.password = "can't be blank";
        if(!data.email){
            errors.email = "can't be blank" ;
        }else if(!Validator.isEmail(data.email)){
            errors.email = "invalid email" ;
        }
        return errors ;
    }

    render() {
        return (
            <Container style={{ borderLeft: '1px solid gainsboro' }}>
                <h2 style={{ borderBottom: '1px solid gainsboro' }}>Create your acount here</h2>
                <Form 
                    action="/createUser"
                    method="post"
                    onSubmit={this.onSubmit.bind(this)}
                >
                    <FormGroup>
                        <Label for="_username">Username: </Label>
                        <Input
                        id="_username"
                        name="username"
                        value={this.state.data.username}
                        onChange={this.handleChange.bind(this)}
                        invalid={this.state.errors.username ? true : false} />
                        <FormFeedback>{this.state.errors.username}</FormFeedback>
                        <FormText>Your username here.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="_email">Email: </Label>
                        <Input
                            id="_email"
                            name="email"
                            value={this.state.data.email}
                            onChange={this.handleChange.bind(this)}
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
                        <FormText>For a hight level of security use numbers with caracters.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Button block outline color="primary">Sign in</Button>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

SignInForm.propTypes = {
    submitSignIn: PropTypes.func.isRequired
};

export default SignInForm;