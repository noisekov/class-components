import Loader from './Loader';
import './Search.css';
import React, { Component, SyntheticEvent } from 'react';
export const Context = React.createContext({});

interface requestDataI {
    name: string;
    abilities: string[];
    sprites: string;
}
interface SerachState {
    isLoading: boolean;
}

export default class Serach extends Component {
    state: SerachState = {
        isLoading: false,
    };

    constructor(props: React.Component) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    async handleSubmit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        event.preventDefault();

        this.setState({ isLoading: true });
        try {
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
            const resultObj: requestDataI = {
                name: '',
                abilities: [],
                sprites: '',
            };
            resultObj['name'] = data['name'];
            resultObj['sprites'] = data['sprites']['front_default'];
            data['abilities'].forEach(
                (ability: { ability: { name: string } }) => {
                    resultObj['abilities'].push(ability.ability.name);
                }
            );

            localStorage.setItem('data', JSON.stringify(resultObj));
        } catch (err) {
            localStorage.setItem(
                'data',
                "{ name: '', abilities: [], sprites: ''}"
            );
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        return this.state.isLoading ? (
            <Loader />
        ) : (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="search" className="input-search" />
                <button type="submit">Search</button>
            </form>
        );
    }
}
