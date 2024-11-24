import './Pokemon.css';
import React, { Component } from 'react';
import { Context } from './Serach';

interface requestDataI {
    name: string;
    abilities: string[];
    sprites: string;
}

export default class Pokemon extends Component {
    static contextType = Context;
    data: requestDataI;

    constructor(props: React.Component) {
        super(props);
        const storedData = localStorage.getItem('data');
        this.data =
            storedData !== null
                ? JSON.parse(storedData)
                : { name: '', abilities: [], sprites: '' };
    }

    render() {
        return (
            <div className="pokemon-card">
                <h1>Pokemon</h1>
                <img src={this.data.sprites} alt={this.data.name} />
                <p className="pokemon-card__text">name: {this.data.name}</p>
                <p className="pokemon-card__text">
                    abilities: {this.data.abilities.join(' ,')}
                </p>
            </div>
        );
    }
}
