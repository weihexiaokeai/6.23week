import React, { Component } from 'react'
import Header from '../commponets/header'
import Foot from '../commponets/foot'
export default class shop extends Component {
    render() {
        return (
            <div>
                <Header back={true} title={"购物车"}/>
                <section></section>
                <Foot/>
            </div>
        )
    }
}
