import React, { Component } from 'react';
import '../App.css';
import FormUpload from '../components/formUpload';
import DisplayFiles from '../components/displayFiles';
import Header from '../components/header' ;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            userInfo: []
        };
    }
    componentDidMount() {
        fetch('/files')
            .then(res => res.json())
            .then(allFiles => this.setState({
                files: allFiles
            }));
    }
    render() {
        return (
            <div className="App">
                <Header />
                <FormUpload />
                <hr />
                <DisplayFiles files={this.state.files} />
            </div>
        );
    }

}

export default App;
