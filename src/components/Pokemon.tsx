import './Pokemon.css';
import React, { Component } from 'react';
import equal from 'fast-deep-equal';

interface requestDataI {
    name: string;
    abilities: string[];
    sprites: string;
}

interface SerachState {
    inputData: object;
}

export default class Pokemon extends Component {
    state: SerachState = {
        inputData: {},
    };

    constructor(props: React.Component) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (!equal(this.props.onInputData, prevProps.onInputData)) {
            // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
            this.setState(this.props.onInputData);
        }
    }

    render() {
        return (
            <div className="pokemon-card">
                <h1>Pokemon</h1>
                <img
                    src={this.state.sprites ? this.state.sprites : ''}
                    alt={this.state.name ? this.state.name : ''}
                />
                <p className="pokemon-card__text">
                    name: {this.state.name ? this.state.name : ''}
                </p>
                <p className="pokemon-card__text">
                    abilities:{' '}
                    {this.state.abilities
                        ? this.state.abilities.join(' ,')
                        : ''}
                </p>
            </div>
        );
    }
}
