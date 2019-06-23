import React, { Component } from 'react'

export default class Header extends Component {
    static defaultProps={
            back:true,
            show:true
    }
 
    render() {
        console.log(this.props)
        let {back,show}=this.props
        return (
            <header>
                {back? <input placeholder="请输入内容"/> :null}
                {show? <p></p> :null}
            </header>
        )
    }
}
