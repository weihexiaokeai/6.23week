import React, { Component } from 'react'
import Foot from '../commponts/foot'
import Header from '../commponts/header'
import islogin from '../utlis/islogin'
class My extends Component {
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
export default islogin(My)