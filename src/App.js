import React, { Component } from 'react';

import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import Aux from './hoc/Aux';

class App extends Component {
  
  
  state = {
      userDetails: {},
      isUserLoggedIn: false
  };  


  responseGoogle = response => {
      this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
      console.log(this.state.userDetails);
  };

 

  render () {
    let userDetail = [];
    if (this.state.isUserLoggedIn) {
      userDetail = Object.keys(this.state.userDetails)
          .map(udKey => {
              return <li key={udKey}><span style={{textTransform: 'capitalize'}}>{udKey}</span>: {this.state.userDetails[udKey]}</li>
      });
    }

    return (
      <div>
        <Layout responseGoogle={this.responseGoogle} isUserLoggedIn={this.state.isUserLoggedIn}>
            {this.state.isUserLoggedIn ?
              <div>{userDetail}</div>
             :
            <Aux>
              <Home/>
              <Footer/>
            </Aux>
          }
        </Layout>
      </div>
    );
  }
}

export default App;
