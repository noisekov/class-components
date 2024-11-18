/* eslint-disable */
import React, { Component } from 'react'
import { ThemeContext } from '../App'

export default class Pokemon extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {(value) => <div>{value}</div>}
            </ThemeContext.Consumer>
        )
    }
}
