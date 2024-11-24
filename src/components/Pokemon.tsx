/* eslint-disable */
import './Pokemon.css';
import React, { Component } from 'react';
import { Context } from './Serach';

export default class Pokemon extends Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.data = JSON.parse(localStorage.getItem('data'));
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
