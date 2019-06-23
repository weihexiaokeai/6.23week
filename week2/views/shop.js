import React, { Component } from 'react'
import Foot from '../commponts/foot'
import Header from '../commponts/header'
export default class Shop extends Component {
    render() {
        return (
            <div>
                    <Header back={true} show={true}/>
                  <section></section>
                <Foot/>
            </div>
        )
    }
}
