import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
            console.log()
        return (
            <div>
                详情<h3>{this.props.match.params.id}</h3>
            </div>
        )
    }
}
