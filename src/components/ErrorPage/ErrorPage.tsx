import React, { Component } from 'react';
import './ErrorPage.css';

export default class ErrorPage extends Component {
    render() {
        return (
            <div className="error-page">
                <h1>Something went wrong</h1>
                <button
                    className="button"
                    onClick={() => window.location.reload()}
                >
                    Back to App
                </button>
            </div>
        );
    }
}
