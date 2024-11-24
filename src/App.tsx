// import reactLogo from "./assets/react.svg";
// import viteLogo from '/vite.svg'
import './App.css';
import React, { Component } from 'react';
import Serach from './components/Serach';
import Pokemon from './components/Pokemon';

class App extends Component {
    render() {
        return (
            <div className="page">
                <div className="top">
                    <Serach />
                </div>
                <div className="bottom">
                    <Pokemon />
                </div>
            </div>
        );
    }
}

export default App;
