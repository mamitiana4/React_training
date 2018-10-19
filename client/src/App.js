import React, { Component } from 'react';
import './App.css';
/* import FormUpload from './views/formUpload' ;
import DisplayFiles from './views/displayFiles' ; */
import {Route} from 'react-router-dom' ;
import UserPage from './pages/userPage' ;
import LoginPage from './pages/loginPage' ;
import HomePage from './pages/homePage' ;
import {Provider} from 'react-redux' ;
import store from './store' ;

class App extends Component {

  /*constructor(props){
    super(props) ;
    this.state = {
      isConnected: false
    };
  }
  componentDidMount() {
    fetch('/files')
      .then(res => res.json())
      .then(allFiles => this.setState({
        files : allFiles
      }));
  }*/
  render() {
    /* return (
      <div className="App">
        <FormUpload />
        <hr/>
        <DisplayFiles files={this.state.files} />
      </div>
    ); */
    return(
      <Provider store={store}>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/userPage" exact component={UserPage} />
          <Route path="/loginPage" exact component={LoginPage} />
        </div>
      </Provider>
    ) ;
  }

}

export default App;
