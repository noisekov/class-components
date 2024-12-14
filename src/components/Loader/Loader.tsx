import { Component } from 'react';
import './Loader.css';

export default class Loader extends Component {
    render() {
        return (
            <>
                <div className="spinner-box">
                    <div className="pulse-container">
                        <div className="pulse-bubble pulse-bubble-1"></div>
                        <div className="pulse-bubble pulse-bubble-2"></div>
                        <div className="pulse-bubble pulse-bubble-3"></div>
                    </div>
                </div>
            </>
        );
    }
}
