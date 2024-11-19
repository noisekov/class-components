/* eslint-disable */
import React, { Component } from 'react'
import { Context } from './Serach'

export default class Pokemon extends Component {
    static contextType = Context

    render() {
        return <div>{this.context}</div>
    }
}
