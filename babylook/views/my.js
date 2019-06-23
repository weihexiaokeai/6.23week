import React, { Component } from 'react'
import Header from '../commpoent/header'
import Foo from '../commpoent/foot'
import  islogin from '../utlis/islogin'
 class My extends Component {
    render() {
        return (
            <div>
                 <Header back={false} title={"我的"}/>
                <section></section>
                <Foo/>
            </div>
        )
    }
}
export default islogin(My)
