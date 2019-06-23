import React, { Component } from 'react'
import Foot from '../commponts/foot'
import Header from '../commponts/header'
export default class Release extends Component {
    render() {
        return (
            <div>
                   <Header back={false} show={false}/>
                  <section></section>
                <Foot/>
            </div>
        )
    }
}
