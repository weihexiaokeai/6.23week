import React, { Component } from 'react'
import Header from '../commpoent/header'
import Foo from '../commpoent/foot'
import {NavLink} from 'react-router-dom'
import RouterView from '../router//routerview'
export default class Hear extends Component {
    render() {
        let {child}=this.props;
        return (
            <div>
                 <Header back={true} title={"宝宝听"}/>
                <section>
                    <div className="top">
                        <NavLink to="/hear/childhood">儿歌</NavLink>
                        <NavLink to="/hear/course">故事</NavLink>
                    </div>
                    <RouterView routers={child}/>
                </section>
                <Foo/>
            </div>
        )
    }
}
