import './Search.css';
import React, { Component, SyntheticEvent } from 'react';
export const Context = React.createContext('oppa');

interface resultObjI {
    name: string;
    abilities: string[];
    sprites: string;
}
export default class Serach extends Component {
    async handleSubmit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        event.preventDefault();

        const request = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${
                (
                    (event.target as HTMLFormElement)
                        ?.elements[0] as HTMLInputElement
                ).value
            }`,
            {
                method: 'GET',
            }
        );
        const data = await request.json();
        const resultObj: resultObjI = {
            name: '',
            abilities: [],
            sprites: '',
        };
        resultObj['name'] = data['name'];
        resultObj['sprites'] = data['sprites']['front_default'];
        data['abilities'].forEach((ability: { ability: { name: string } }) => {
            resultObj['abilities'].push(ability.ability.name);
        });

        localStorage.setItem('data', JSON.stringify(resultObj));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="search" className="input-search" />
                <button type="submit">Search</button>
            </form>
        );
    }
}
