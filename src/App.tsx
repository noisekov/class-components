import './App.css';
import React, { Component } from 'react';
import Serach from './components/Search/Serach';
import Pokemon from './components/Pokemon/Pokemon';

interface SerachState {
    inputData: object;
    error: boolean;
}

class App extends Component {
    state: SerachState = {
        inputData: {},
        error: false,
    };

    handleData = (inputData: object) => {
        this.setState({ inputData });
    };

    render() {
        if (this.state.error) {
            throw new Error('I crashed!');
        }

        return (
            <>
                <div className="page">
                    <div className="top">
                        <Serach onInputData={this.handleData} />
                    </div>

                    <div className="bottom">
                        <Pokemon onInputData={this.state.inputData} />
                    </div>
                </div>
                <button
                    className="button--error"
                    onClick={() => {
                        this.setState({ error: true });
                    }}
                >
                    throw an error
                </button>
            </>
        );
    }
}

export default App;
