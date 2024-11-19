/* eslint-disable */
import Pokemon from './Pokemon'
import './Search.css'
import React, { Component, SyntheticEvent } from 'react'
export let Context = React.createContext('oppa')

export default class Serach extends Component {
    async handleSubmit(event: SyntheticEvent) {
        event.preventDefault()

        const request = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${event.target[0].value}`,
            {
                method: 'GET',
            }
        )
        const data = await request.json()
        console.log(data)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="search" className="input-search" />
                <button type="submit">Search</button>
            </form>
        )
    }
}
