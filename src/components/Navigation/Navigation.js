import React, { Component } from 'react';
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Aux from '../../hoc/Aux';
import constants from '../../assets/constants/Constants'; 

import classes from './Navigation.css';

class Navigation extends Component {
    
    render () { 
        let login = null;
        if (!this.props.isUserLoggedIn) {
            login = <Aux>
                <GoogleLogin
                clientId = {constants.GOOGLE_CLIENT_ID}
                
                render={renderProps => (
                    <a className={classes.JoinButton}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}>Join</a> 
                )}
                
                onSuccess={this.props.responseGoogle}
                onFailure={this.props.responseGoogle}
            
                />  
                <a className={classes.SignInButton}>SignIn</a>
            </Aux>
        } else {
            login = <a className={classes.SignInButton}>Log out</a> 
        }

        return (
            <nav className={classes.Nav}>
                <a>Logo</a> 
                {login}
            </nav>
        );
    }
}

export default Navigation;