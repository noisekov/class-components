/* eslint-disable react/react-in-jsx-scope */
import './Search.css'
import { Component } from 'react'

export default class Serach extends Component {
    handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault()

        console.log('You clicked submit.')
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
