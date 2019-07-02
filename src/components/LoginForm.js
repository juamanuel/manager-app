import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    render() {
        console.log(this.props);
        return(
            <Card>
                <CardSection>
                    <Input 
                        label = "Email"
                        placeholder= "user@mail.com"
                        onChangeText = {this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label= "Password"
                        placeholder= "******"
                        secureTextEntry
                        onChangeText = {this.onPasswordChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};


export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);