import Loader from './Loader';
import './Search.css';
import React, { Component, SyntheticEvent } from 'react';

interface requestDataI {
    name: string;
    abilities: string[];
    sprites: string;
}
interface SerachState {
    isLoading: boolean;
    requestData: object;
}

interface SerachProps {
    onInputData: (data: requestDataI) => void;
}

export default class Serach extends Component<SerachProps> {
    state: SerachState = {
        isLoading: false,
        requestData: {},
    };

    constructor(props: SerachProps) {
        super(props);
        this.state = {
            isLoading: false,
            requestData: {},
        };
    }

    componentDidMount() {
        const storedData: string | null = localStorage.getItem('data');
        this.setState({ isLoading: true });

        this.request(storedData);
    }

    async request(value: string) {
        const request = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${value}`,
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
        data['abilities'].forEach((ability: { ability: { name: string } }) => {
            resultObj['abilities'].push(ability.ability.name);
        });

        this.setState({ isLoading: false, requestData: resultObj });
        this.props.onInputData(resultObj);
    }

    async handleSubmit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        event.preventDefault();
        const inputValue = (
            (event.target as HTMLFormElement)?.elements[0] as HTMLInputElement
        ).value;

        localStorage.setItem('data', inputValue);
        this.request(inputValue);
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
