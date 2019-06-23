import React, { Component } from 'react'

export default class Detail extends Component {
    
    render() {
        console.log(this.props.match.params.id)
        return (
            <div className="detail">
                <div>
                <span onClick={this.handelGoback.bind(this)}>&lt;</span>
               <h3>{this.props.match.params.id}</h3>
                </div>
            </div>
        )
    }
    handelGoback()
    {
        console.log(this.props)
        let {history}=this.props
        history.go('-1')
    }
}
