import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/forms/loginForm' ;
import {Container, Row} from 'reactstrap' ;
import SignInForm from '../components/forms/signInForm' ;

class LoginPage extends Component {
    /* constructor(props){
        super(props) ;
        this.state={
            danze: ''
        }
    } */
    submitLogIn(data){
        //console.log(data) ;
        fetch('/logIn', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            if (res.status === 200) return res.json();
            else return { error: 'there was an error with response' }
        })
        .then((data) => {
            if(data!==null){
                console.log(data) ;
                //this.setState({danze:'/userPage'}) ;
            }else console.log("This user doesn't exist") ;
        })
    }
    
    submitSignIn(data) {
        console.log(data);
        fetch('/createUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => console.log('data fetched: ',data)) ;
    }

    render(){
        return(
            <Container>
                <Row>
                    <div className="col-md-6">
                        <LoginForm /* danze={this.state.danze}  */submitLogIn={this.submitLogIn.bind(this)} />
                    </div>
                    <div className="col-md-6">
                        <SignInForm submitSignIn={this.submitSignIn.bind(this)}/>
                    </div>
                </Row>
                <Link to="/">homePage</Link>
            </Container>
        ) ;
    }
}

export default LoginPage ;
