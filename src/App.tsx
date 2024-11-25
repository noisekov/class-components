import './App.css';
import React, { Component } from 'react';
import Serach from './components/Serach';
import Pokemon from './components/Pokemon';

interface SerachState {
    inputData: object;
}

class App extends Component {
    state: SerachState = {
        inputData: {},
    };

    handleData = (inputData: object) => {
        this.setState({ inputData });
    };

    render() {
        return (
            <div className="page">
                <div className="top">
                    <Serach onInputData={this.handleData} />
                </div>
                <div className="bottom">
                    <Pokemon onInputData={this.state.inputData} />
                </div>
            </div>
        );
    }
}

export default App;
