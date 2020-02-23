import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Navigation from '../Navigation/Navigation';
import classes from './Layout.css';


class Layout extends Component {
    
    //code
    
    render () {
        return (
            <Aux>
                <Navigation responseGoogle={this.props.responseGoogle} isUserLoggedIn={this.props.isUserLoggedIn}/>
                <main className={classes.Main}>
                    {this.props.children}
                </main>
            </Aux>
        ) ;
    };
}

export default Layout;