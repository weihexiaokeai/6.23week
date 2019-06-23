import React, { Component } from 'react'
import Header from '../commponets/header'
import Foot from '../commponets/foot'
export default class My extends Component {
    render() {
        return (
            <div>
                 <Header back={true} title={"我的"}/>
                <section></section>
                <Foot/>
            </div>
        )
    }
}
