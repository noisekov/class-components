import './Pokemon.css';
import React, { Component } from 'react';
import equal from 'fast-deep-equal';

interface requestDataI {
    name: string;
    abilities: string[];
    sprites: string;
}

interface SerachState {
    inputData: requestDataI;
}

interface SerachProps {
    onInputData: requestDataI | object;
}

export default class Pokemon extends Component<SerachProps> {
    state: SerachState = {
        inputData: {
            name: '',
            abilities: [],
            sprites: '',
        },
    };

    constructor(props: SerachProps) {
        super(props);
    }

    componentDidUpdate(prevProps: SerachProps) {
        if (!equal(this.props.onInputData, prevProps.onInputData)) {
            this.setState({ inputData: this.props.onInputData });
        }
    }

    render() {
        const { sprites, name, abilities } = this.state.inputData;

        return (
            <div className="pokemon-card">
                <h1>Pokemon</h1>
                <img
                    src={sprites ? sprites : ''}
                    alt={name && sprites ? name : 'No data'}
                />
                <p className="pokemon-card__text">
                    name: {name ? name : 'No data'}
                </p>
                <p className="pokemon-card__text">
                    abilities:{' '}
                    {abilities.length ? abilities.join(', ') : 'No data'}
                </p>
            </div>
        );
    }
}
