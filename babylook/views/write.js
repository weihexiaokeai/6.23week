import React, { Component } from 'react'
import Header from '../commpoent/header'
import Foo from '../commpoent/foot'
import {NavLink} from 'react-router-dom'
import RouterView from '../router//routerview'
export default class Write extends Component {
    render() {
        let {child}=this.props;
        console.log(this.props)
        return (
            <div>
                <Header back={false} title={"宝宝看"}/>
                <section>
                    <div className="top">
                            <NavLink to="/write/nursery">儿歌</NavLink>
                            <NavLink to="/write/story">故事</NavLink>
                            <NavLink to="/write/cartoon">动画片</NavLink>
                    </div>
                    <RouterView routers={child}/>
                </section>
                <Foo/>
            </div>
        )
    }
}
