import React, { Component } from 'react'

export default class Header extends Component {
      static defaultProps={
            back:false,
            title:"宝宝看"
      }
    render() {
        let{back,title}=this.props
        return (
            <header>
                    {
                        back ? <span>&lt;</span>:null
                    }
                    <span>{title}</span>
            </header>
        )
    }
}
